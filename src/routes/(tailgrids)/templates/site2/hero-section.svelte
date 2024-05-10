<script>
	import DownloadIcon from '$lib/assets/template2/icons/download-icon.svelte';
	import HeroBgDeco from '$lib/assets/template2/icons/hero-bg-deco.svelte';
	import AyrouiSvg from '$lib/assets/template2/images/brands/ayroui.svg';
	import GrayGridsSvg from '$lib/assets/template2/images/brands/graygrids.svg';
	import UideckSvg from '$lib/assets/template2/images/brands/uideck.svg';
	import HeroImage01 from '$lib/assets/template2/images/hero/hero-image-01.png';
</script>

<div class="relative bg-white pb-[110px] pt-[120px] lg:pt-[150px] dark:bg-dark">
	<div class="container mx-auto">
		<div class="-mx-4 flex flex-wrap">
			<div class="w-full px-4 lg:w-5/12">
				<div class="hero-content flex-col">
					<h1
						class="mb-3 text-4xl font-bold leading-snug text-dark sm:text-[42px] lg:text-[40px] xl:text-[42px] dark:text-white"
					>
						Startup Site Template Built-with TailGrids Components
					</h1>
					<p class="dark:text-dark-6 mb-8 max-w-[480px] text-base text-body-color">
						With TailGrids, business and students thrive together. Business can perfectly match
						their staffing to changing demand throughout the dayed.
					</p>
					<ul class="flex flex-wrap items-center">
						<li>
							<a
								href={undefined}
								class="hover:bg-blue-dark inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-center text-base font-medium text-white lg:px-7"
							>
								Get Started
							</a>
						</li>
						<li>
							<a
								href={undefined}
								class="inline-flex items-center justify-center px-5 py-3 text-center text-base font-medium text-[#464646] hover:text-primary dark:text-white"
							>
								<span class="mr-2">
									<DownloadIcon />
								</span>
								Download App
							</a>
						</li>
					</ul>

					<!-- Bottom of Left side  -->
					<div class="clients pt-16">
						<h6 class="mb-2 flex items-center text-xs font-normal text-body-color">
							Used by Thriving Brands
							<span class="ml-2 inline-block h-[1px] w-8 bg-body-color"></span>
						</h6>
						<div class="flex max-w-[550px] items-center">
							<div class="mr-4 w-full py-3">
								<img src={AyrouiSvg} alt="ayroui" />
							</div>
							<div class="mr-4 w-full py-3">
								<img src={GrayGridsSvg} alt="graygrids" />
							</div>
							<div class="mr-4 w-full py-3">
								<img src={UideckSvg} alt="uideck" />
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Separator -->
			<div class="hidden px-4 lg:block lg:w-1/12"></div>

			<!-- Right side -->
			<div class="w-full px-4 lg:w-6/12">
				<div class="lg:ml-auto lg:text-right">
					<div class="relative z-10 inline-block pt-11 lg:pt-0">
						<img src={HeroImage01} alt="hero" class="max-w-full lg:ml-auto" />
						<span class="absolute -bottom-8 -left-8 z-[-1]">
							<HeroBgDeco />
						</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
