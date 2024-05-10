<script>
	import { Chart as ChartJS } from 'chart.js/auto';
	import { onMount } from 'svelte';

	/** @type { HTMLCanvasElement } */
	let canvas;
	/** @type { import('chart.js').Chart } */
	let barChart;

	onMount(() => {
		/** @type { CanvasRenderingContext2D | null } */
		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		barChart = new ChartJS(ctx, {
			type: 'bar',
			data: {
				labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
				datasets: [
					{
						label: '# of Votes',
						data: [12, 19, 3, 5, 2, 3],
						borderWidth: 1,
					},
				],
			},
			options: {
				scales: {
					y: {
						beginAtZero: true,
					},
				},
			},
		});

		return () => {
			barChart.destroy();
		};
	});
</script>

<div class="w-[600px] border">
	<canvas id="myChart" bind:this={canvas}></canvas>
</div>
