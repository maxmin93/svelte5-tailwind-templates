<script>
	import { onMount } from 'svelte';
	import { Splide } from '@splidejs/splide';

	/** @type { import('@splidejs/splide').Splide } */
	let splide;

	/**
	 * https://splidejs.com/guides/options
	 **/
	/** @type { import('@splidejs/splide').Options } */
	let options = {
		type: 'loop',
		arrows: false, // hide
		perPage: 1,
		classes: {
			// pagination: 'splide__pagination bg-red-100 -bottom-2',
			page: 'splide__pagination__page bg-blue-400',
		},
	};

	/** @type { HTMLElement } */
	let root;

	onMount(() => {
		splide = new Splide(root, options);
		splide.mount();

		return () => splide.destroy();
	});

	const styles = {
		slides: ['1', '2', '3'],
		activeSlide: 1,
		activeButton: 'w-[30px] bg-primary',
		button: 'w-[10px] bg-[#E4E4E4]',
	};

	import TestimonialLineIcon from '$lib/assets/template1/images/testimonials/testimonial-01/lineicon.svg';
	import TestimonialDeco from '$lib/assets/template1/icons/testimonial-deco.svelte';
	import Testinomial1Img from '$lib/assets/template1/images/testimonials/testimonial-01/image-01.jpg';
	import ArrowLeftIcon from '$lib/assets/template1/icons/arrow-left-icon.svelte';
	import ArrowRightIcon from '$lib/assets/template1/icons/arrow-right-icon.svelte';
</script>

<section id="features" class="pb-20 pt-20 lg:pb-[120px] lg:pt-[120px]">
	<div class="container mx-auto">
		<div class="relative flex justify-center">
			<div class="relative w-full pb-16 md:w-11/12 lg:w-10/12 xl:w-8/12 xl:pb-0">
				<div
					class="snap flex-no-wrap mx-auto flex h-auto w-full max-w-[300px] overflow-hidden transition-all xs:max-w-[368px] sm:max-w-[508px] md:max-w-[630px] lg:max-w-[738px] 2xl:max-w-[850px]"
				>
					<div
						class="mx-auto h-full min-w-[300px] xs:min-w-[368px] sm:min-w-[508px] sm:p-6 md:min-w-[630px] lg:min-w-[738px] 2xl:min-w-[850px]"
					>
						<!-- Slide root : track > list > slide -->
						<div class="splide w-full" bind:this={root}>
							<h2 id="carousel-heading">Splide Basic HTML Example</h2>
							<!-- Slide group -->
							<div class="splide__track py-4">
								<div class="splide__list gap-x-4">
									<!-- Slide #1 -->
									<div class="splide__slide w-full items-center md:flex">
										<div
											class="relative mb-12 w-full max-w-[310px] md:mb-0 md:mr-12 md:max-w-[250px] lg:mr-14 lg:max-w-[280px] 2xl:mr-16"
										>
											<img src={Testinomial1Img} alt="image" class="w-full" />
											<span class="absolute -left-6 -top-6 z-[-1] hidden sm:block">
												<TestimonialDeco />
											</span>
											<span class="absolute -bottom-6 -right-6 z-[-1]">
												<svg
													width="64"
													height="64"
													viewBox="0 0 64 64"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M3 32C3 15.9837 15.9837 3 32 3C48.0163 2.99999 61 15.9837 61 32C61 48.0163 48.0163 61 32 61C15.9837 61 3 48.0163 3 32Z"
														stroke="#13C296"
														stroke-width="6"
													/>
												</svg>
											</span>
										</div>
										<div class="w-full">
											<div>
												<div class="mb-7">
													<img src={TestimonialLineIcon} alt="lineicon" />
												</div>
												<p class="mb-11 text-base font-medium italic text-body-color sm:text-lg">
													Velit est sit voluptas eum sapiente omnis! Porro, impedit minus quam
													reprehenderit tempore sint quaerat id! Mollitia perspiciatis est
													asperiores commodi labore!
												</p>
												<h4 class="text-xl font-semibold text-dark">Larry Diamond</h4>
												<p class="text-base text-body-color">Chief Executive Officer.</p>
											</div>
										</div>
									</div>

									<!-- Slide #2 -->
									<div class="splide__slide w-full items-center md:flex">
										<div
											class="relative mb-12 w-full max-w-[310px] md:mb-0 md:mr-12 md:max-w-[250px] lg:mr-14 lg:max-w-[280px] 2xl:mr-16"
										>
											<img src="https://random.imagecdn.app/310/420" alt="image" class="w-full" />
											<span class="absolute -left-6 -top-6 z-[-1] hidden sm:block">
												<TestimonialDeco />
											</span>
											<span class="absolute -bottom-6 -right-6 z-[-1]">
												<svg
													width="64"
													height="64"
													viewBox="0 0 64 64"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M3 32C3 15.9837 15.9837 3 32 3C48.0163 2.99999 61 15.9837 61 32C61 48.0163 48.0163 61 32 61C15.9837 61 3 48.0163 3 32Z"
														stroke="#13C296"
														stroke-width="6"
													/>
												</svg>
											</span>
										</div>
										<div class="w-full">
											<div>
												<div class="mb-7">
													<img src={TestimonialLineIcon} alt="lineicon" />
												</div>
												<p class="mb-11 text-base font-medium italic text-body-color sm:text-lg">
													Velit est sit voluptas eum sapiente omnis! Porro, impedit minus quam
													reprehenderit tempore sint quaerat id! Mollitia perspiciatis est
													asperiores commodi labore!
												</p>
												<h4 class="text-xl font-semibold text-dark">Larry Diamond</h4>
												<p class="text-base text-body-color">Slide &num;2</p>
											</div>
										</div>
									</div>

									<!-- Slide #3 -->
									<div class="splide__slide w-full items-center md:flex">
										<div
											class="relative mb-12 w-full max-w-[310px] md:mb-0 md:mr-12 md:max-w-[250px] lg:mr-14 lg:max-w-[280px] 2xl:mr-16"
										>
											<img src="https://random.imagecdn.app/310/420" alt="image" class="w-full" />
											<span class="absolute -left-6 -top-6 z-[-1] hidden sm:block">
												<TestimonialDeco />
											</span>
											<span class="absolute -bottom-6 -right-6 z-[-1]">
												<svg
													width="64"
													height="64"
													viewBox="0 0 64 64"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M3 32C3 15.9837 15.9837 3 32 3C48.0163 2.99999 61 15.9837 61 32C61 48.0163 48.0163 61 32 61C15.9837 61 3 48.0163 3 32Z"
														stroke="#13C296"
														stroke-width="6"
													/>
												</svg>
											</span>
										</div>
										<div class="w-full">
											<div>
												<div class="mb-7">
													<img src={TestimonialLineIcon} alt="lineicon" />
												</div>
												<p class="mb-11 text-base font-medium italic text-body-color sm:text-lg">
													Splide js Example
												</p>
												<h4 class="text-xl font-semibold text-dark">Larry Diamond</h4>
												<p class="text-base text-body-color">Slide &num;3</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- carousel slider -->
				<div
					class="absolute bottom-0 left-0 right-0 flex items-center justify-center lg:pl-[120px] 2xl:pl-0"
				>
					<button
						onclick={() => {
							splide.go('<');
						}}
						class="mx-1 flex h-12 w-12 items-center justify-center rounded-full bg-white text-primary shadow-input transition-all hover:bg-primary hover:text-white"
					>
						<ArrowLeftIcon />
					</button>
					<button
						onclick={() => {
							splide.go('>');
						}}
						class="mx-1 flex h-12 w-12 items-center justify-center rounded-full bg-white text-primary shadow-input transition-all hover:bg-primary hover:text-white"
					>
						<ArrowRightIcon />
					</button>
				</div>
			</div>
		</div>
	</div>
</section>
