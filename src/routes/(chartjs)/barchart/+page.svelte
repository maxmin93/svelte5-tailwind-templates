<script>
	import { bindBarChart } from './chartjs-bar.svelte';
</script>

<section class="container mx-auto">
	<h1 class="pb-4 text-xl">Bar Chart</h1>
	<div class="w-[800px] border">
		<canvas use:bindBarChart></canvas>
	</div>
</section>
