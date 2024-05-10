<script>
	import { bindLineChart } from './chartjs-line.svelte';
</script>

<section class="container mx-auto">
	<h1 class="pb-4 text-xl">Line Chart</h1>
	<div class="w-[800px] border">
		<canvas use:bindLineChart></canvas>
		<div class="join mt-6 flex place-content-center gap-2">
			<button class="btn join-item text-primary">Randomize</button>
			<button class="btn join-item text-primary">Add Dataset</button>
			<button class="btn join-item text-primary">Add Data</button>
			<button class="btn join-item text-primary">Remove Dataset</button>
			<button class="btn join-item text-primary">Remove Data</button>
		</div>
	</div>
</section>
