import { Chart as ChartJS } from 'chart.js/auto';
import * as Utils from '$lib/utils/chartjs-utils';

export const lineChartActions = [
	{
		name: 'Randomize',
		/** @param { import('chart.js').Chart } chart */
		handler(chart) {
			chart.data.datasets.forEach((dataset) => {
				if (chart.data.labels)
					dataset.data = Utils.numbers({ count: chart.data.labels.length, min: -100, max: 100 });
			});
			chart.update();
		},
	},
	{
		name: 'Add Dataset',
		/** @param { import('chart.js').Chart } chart */
		handler(chart) {
			const data = chart.data;
			const dsColor = Utils.namedColor(chart.data.datasets.length);
			if (data.labels) {
				const newDataset = {
					label: 'Dataset ' + (data.datasets.length + 1),
					backgroundColor: Utils.transparentize(dsColor, 0.5),
					borderColor: dsColor,
					data: Utils.numbers({ count: data.labels.length, min: -100, max: 100 }),
				};
				chart.data.datasets.push(newDataset);
				chart.update();
			}
		},
	},
	{
		name: 'Add Data',
		/** @param { import('chart.js').Chart } chart */
		handler(chart) {
			const data = chart.data;
			if (data.labels && data.datasets.length > 0) {
				data.labels = Utils.months({ count: data.labels.length + 1 });
				for (let index = 0; index < data.datasets.length; ++index) {
					data.datasets[index].data.push(Utils.rand(-100, 100));
				}
				chart.update();
			}
		},
	},
	{
		name: 'Remove Dataset',
		/** @param { import('chart.js').Chart } chart */
		handler(chart) {
			chart.data.datasets.pop();
			chart.update();
		},
	},
	{
		name: 'Remove Data',
		/** @param { import('chart.js').Chart } chart */
		handler(chart) {
			if (chart.data.labels) {
				chart.data.labels.splice(-1, 1); // remove the label first
				chart.data.datasets.forEach((dataset) => {
					dataset.data.pop();
				});
				chart.update();
			}
		},
	},
];

////////////////////////////////////////////////

/** @param { HTMLCanvasElement } node */
export function bindLineChart(node) {
	const ctx = node.getContext('2d');
	if (!ctx) return;

	const DATA_COUNT = 7;
	const NUMBER_CFG = { count: DATA_COUNT, min: -100, max: 100 };

	const labels = Utils.months({ count: 7 });
	const data = {
		labels: labels,
		datasets: [
			{
				label: 'Dataset 1',
				data: Utils.numbers(NUMBER_CFG),
				borderColor: Utils.CHART_COLORS.red,
				backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
			},
			{
				label: 'Dataset 2',
				data: Utils.numbers(NUMBER_CFG),
				borderColor: Utils.CHART_COLORS.blue,
				backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
			},
		],
	};

	const config = {
		type: 'line',
		data: data,
		options: {
			responsive: true,
			plugins: {
				legend: {
					position: 'top',
				},
				title: {
					display: true,
					text: 'Chart.js Line Chart',
				},
			},
		},
	};

	/** @type { import('chart.js').Chart | undefined } */
	let lineChart = new ChartJS(ctx, config);

	// init done
	node.dispatchEvent(new CustomEvent('emit', { detail: lineChart }));

	return {
		destroy() {
			if (lineChart) lineChart.destroy();
			lineChart = undefined;
		},
	};
}
