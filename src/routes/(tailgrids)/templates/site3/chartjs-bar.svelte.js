import { Chart as ChartJS } from 'chart.js/auto';

/** @param { HTMLCanvasElement } node */
export function bindBarChart(node) {
	const ctx = node.getContext('2d');
	if (!ctx) return;

	const data = {
		labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
		datasets: [
			{
				label: '# of Votes',
				data: [12, 19, 3, 5, 2, 3],
				borderWidth: 1,
			},
		],
	};

	const config = {
		type: 'bar',
		data: data,
		options: {
			plugins: {
				customCanvasBackgroundColor: {
					color: 'lightGreen',
				},
			},
			scales: {
				y: {
					beginAtZero: true,
				},
			},
		},
		plugins: [
			{
				id: 'customCanvasBackgroundColor',
				beforeDraw: (chart, args, options) => {
					const { ctx } = chart;
					ctx.save();
					ctx.globalCompositeOperation = 'destination-over';
					ctx.fillStyle = options.color || '#99ffff';
					ctx.fillRect(0, 0, chart.width, chart.height);
					ctx.restore();
				},
			},
		],
	};

	/** @type { import('chart.js').Chart | undefined } */
	let barChart = new ChartJS(ctx, config);

	return {
		destroy() {
			if (barChart) barChart.destroy();
			barChart = undefined;
		},
	};
}
