import { Chart as ChartJS } from 'chart.js/auto';
import * as Utils from '$lib/utils/chartjs-utils';

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

	return {
		destroy() {
			if (lineChart) lineChart.destroy();
			lineChart = undefined;
		},
	};
}
