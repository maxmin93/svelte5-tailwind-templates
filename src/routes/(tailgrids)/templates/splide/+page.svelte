<script>
	import { onMount } from 'svelte';
	import { Splide } from '@splidejs/splide';
	import { MyTransition } from '$lib/utils/splide-transition';

	/** @type { import('@splidejs/splide').Splide } */
	let splide;

	/*
	onMount(() => {
		splide = new Splide(root, options);
		splide.mount({}, MyTransition);

		return () => splide.destroy();
	});
	*/

	/** @type {import('svelte/action').Action<HTMLElement>}  */
	function setupSplide(node) {
		/**
		 * https://splidejs.com/guides/options
		 **/
		/** @type { import('@splidejs/splide').Options } */
		let options = {
			type: 'loop',
			arrows: false, // hide
			padding: '2rem',
			perPage: 1,
			width: '40em',
			// fixedWidth: '20rem', // width of slide
			height: '10rem',
			classes: {
				pagination: 'splide__pagination bg-red-100 -bottom-2',
				page: 'splide__pagination__page bg-blue-400',
			},
		};

		splide = new Splide(node, options);
		// splide.mount();
		splide.mount({}, MyTransition);

		return {
			destroy() {
				splide.destroy();
			},
		};
	}
</script>

<!-- section class="splide" bind:this={root} aria-label="Splide Example">
	<h2 id="carousel-heading">Splide Basic HTML Example</h2>

	<div class="splide__track">
		<ul class="splide__list">
			<li class="splide__slide">Slide 01</li>
			<li class="splide__slide">Slide 02</li>
			<li class="splide__slide">Slide 03</li>
		</ul>
	</div>
</section -->

<div class="container mx-auto">
	<!-- Slide root : track > list > slide -->
	<!-- div class="splide" bind:this={root} -->
	<div class="splide" use:setupSplide>
		<h2 id="carousel-heading">Splide Basic HTML Example</h2>
		<div class="splide__arrows">
			<button class="splide__arrow splide__arrow--prev">Prev</button>
			<button class="splide__arrow splide__arrow--next">Next</button>
		</div>

		<!-- Slide group -->
		<div class="splide__track py-4">
			<div class="splide__list gap-x-4">
				<!-- Slide #1 -->
				<div class="splide__slide w-full bg-slate-300 p-4 shadow">
					<div class="space-y-2">
						<h3 class="text-2xl font-semibold">Tailwind Card Slider 1</h3>
						<p class="text-gray-600">
							tailwind card slider with splidejs It is a long established fact that a reader will be
							distracted.
						</p>
					</div>
				</div>
				<!-- Slide #2 -->
				<div class="splide__slide w-full bg-slate-200 p-4 shadow">
					<div class="space-y-2">
						<h3 class="text-2xl font-semibold">Tailwind Card Slider 2</h3>
						<p class="text-gray-600">
							tailwind card slider with splidejs It is a long established fact that a reader will be
							distracted.
						</p>
					</div>
				</div>
				<!-- Slide #3 -->
				<div class="splide__slide w-full bg-slate-300 p-4 shadow">
					<div class="space-y-2">
						<h3 class="text-2xl font-semibold">Tailwind Card Slider 3</h3>
						<p class="text-gray-600">
							tailwind card slider with splidejs It is a long established fact that a reader will be
							distracted.
						</p>
					</div>
				</div>
				<!-- Slide #4 -->
				<div class="splide__slide w-full bg-slate-200 p-4 shadow">
					<div class="space-y-2">
						<h3 class="text-2xl font-semibold">Tailwind Card Slider 4</h3>
						<p class="text-gray-600">
							tailwind card slider with splidejs It is a long established fact that a reader will be
							distracted.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- controller -->
	<div class="mt-4 flex w-1/2 justify-center gap-8 border">
		<button class="btn btn-accent px-8" onclick={() => splide.go('<')}> Prev </button>
		<button class="btn btn-accent px-8" onclick={() => splide.go('>')}> Next </button>
	</div>
</div>
