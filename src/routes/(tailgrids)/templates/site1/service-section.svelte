<script>
	import SmileIcon from '$lib/assets/template1/icons/smile-icon.svelte';
	import BrushIcon from '$lib/assets/template1/icons/brush-icon.svelte';
	import SquaresIcon from '$lib/assets/template1/icons/squares-icon.svelte';
	import UnkownIcon from '$lib/assets/template1/icons/unkown-icon.svelte';
</script>

<section class="pt-20 lg:pt-[120px]">
	<div class="container mx-auto">
		<div class="-mx-4 flex flex-wrap">
			<div class="w-full px-4">
				<div class="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
					<span class="mb-2 block text-lg font-semibold text-primary"> Core Features </span>
					<h2 class="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
						Our Awesome Features
					</h2>
					<p class="text-base text-body-color">
						There are many variations of passages of Lorem Ipsum available but the majority have
						suffered alteration in some form.
					</p>
				</div>
			</div>
		</div>
		<div class="-mx-4 flex flex-wrap">
			<div class="w-full px-4 md:w-1/2 xl:w-1/4">
				<div class="relative mx-auto mb-10 max-w-[370px] text-center">
					<div
						class="absolute -right-4 top-12 hidden h-1 w-16 border-t-2 border-dashed border-primary xl:block 2xl:w-[75px]"
					></div>
					<div
						class="relative mx-auto mb-8 flex h-[100px] w-[100px] items-center justify-center rounded-[20px] bg-primary text-white"
					>
						<SmileIcon />
					</div>
					<h3 class="mb-4 text-xl font-semibold text-dark">Easy To Use</h3>
					<p class="text-base leading-relaxed text-body-color">
						Lorem ipsum dolor sit amet sitim consectetur elit. Vestibulum tincidunt rutrum.
					</p>
				</div>
			</div>

			<div class="w-full px-4 md:w-1/2 xl:w-1/4">
				<div class="relative mx-auto mb-10 max-w-[370px] text-center">
					<div
						class="absolute -left-4 top-12 hidden h-1 w-16 border-t-2 border-dashed border-primary xl:block 2xl:w-[75px]"
					></div>
					<div
						class="absolute right-[-14px] top-12 hidden h-1 w-16 border-t-2 border-dashed border-primary xl:block 2xl:w-[75px]"
					></div>
					<div
						class="mx-auto mb-8 flex h-[100px] w-[100px] items-center justify-center rounded-[20px] bg-primary text-white"
					>
						<BrushIcon />
					</div>
					<h3 class="mb-4 text-xl font-semibold text-dark">Awesome Design</h3>
					<p class="text-base leading-relaxed text-body-color">
						Lorem ipsum dolor sit amet sitim consectetur elit. Vestibulum tincidunt rutrum.
					</p>
				</div>
			</div>
			<div class="w-full px-4 md:w-1/2 xl:w-1/4">
				<div class="relative mx-auto mb-10 max-w-[370px] text-center">
					<div
						class="absolute -left-4 top-12 hidden h-1 w-16 border-t-2 border-dashed border-primary xl:block 2xl:w-[75px]"
					></div>
					<div
						class="absolute right-[-14px] top-12 hidden h-1 w-16 border-t-2 border-dashed border-primary xl:block 2xl:w-[75px]"
					></div>
					<div
						class="mx-auto mb-8 flex h-[100px] w-[100px] items-center justify-center rounded-[20px] bg-primary text-white"
					>
						<SquaresIcon />
					</div>
					<h3 class="mb-4 text-xl font-semibold text-dark">Easy To Customize</h3>
					<p class="text-base leading-relaxed text-body-color">
						Lorem ipsum dolor sit amet sitim consectetur elit. Vestibulum tincidunt rutrum.
					</p>
				</div>
			</div>
			<div class="w-full px-4 md:w-1/2 xl:w-1/4">
				<div class="relative mx-auto mb-10 max-w-[370px] text-center">
					<div
						class="absolute left-[-14px] top-12 hidden h-1 w-16 border-t-2 border-dashed border-primary xl:block 2xl:w-[75px]"
					></div>
					<div
						class="mx-auto mb-8 flex h-[100px] w-[100px] items-center justify-center rounded-[20px] bg-primary text-white"
					>
						<UnkownIcon />
					</div>
					<h3 class="mb-4 text-xl font-semibold text-dark">Any Time Support</h3>
					<p class="text-base leading-relaxed text-body-color">
						Lorem ipsum dolor sit amet sitim consectetur elit. Vestibulum tincidunt rutrum.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
