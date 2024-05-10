<script>
	import Hero12p1Img from '$lib/assets/template1/images/hero/hero-12/image-1.jpg';
	import Hero12p2Img from '$lib/assets/template1/images/hero/hero-12/image-2.jpg';
	import Hero12p3Img from '$lib/assets/template1/images/hero/hero-12/image-3.jpg';
</script>

<div class="relative pb-[110px] pt-[150px] lg:pt-[170px]">
	<div class="container mx-auto">
		<div class="-mx-4 flex flex-wrap items-center">
			<!-- || Section Right side -->
			<div class="w-full px-4 lg:w-1/2">
				<div class="mb-12 lg:mb-0">
					<h2
						class="mb-5 text-3xl font-bold leading-tight text-black sm:text-[40px] sm:leading-tight md:text-[45px] md:leading-tight lg:text-[38px] lg:leading-tight xl:text-[45px] xl:leading-tight"
					>
						Build beautiful website with TailGrids blocks.
					</h2>
					<p
						class="mb-10 text-base font-medium leading-relaxed text-body-color md:text-lg md:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed"
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at egestas tortor.
						Morbi sed odio id purus pellentesque iaculis. Nulla facilisi.
					</p>

					<p class="mb-5 text-lg font-semibold text-body-color">
						Subscribe to get notified when we launch 🎉
					</p>

					<form class="mb-7 flex max-w-[445px] flex-wrap">
						<input
							type="email"
							class="mb-3 mr-3 h-[50px] w-full rounded border border-form-stroke bg-white px-5 text-sm text-body-color outline-none focus:border-primary focus-visible:shadow-none sm:max-w-[220px] md:max-w-[315px] lg:max-w-[250px] xl:max-w-[315px]"
							placeholder="Your work mail"
						/>
						<button
							type="submit"
							class="mb-3 h-[50px] rounded bg-primary px-6 text-sm text-white transition hover:bg-opacity-90"
							>Notify Me!</button
						>
					</form>
				</div>
			</div>

			<!-- || Section Left side -->
			<div class="w-full px-4 lg:w-1/2">
				<div class="-mx-2 flex flex-wrap sm:-mx-4">
					<div class="w-1/2 px-2 sm:px-4">
						<div class="mb-4 h-[256px] sm:mb-8 sm:h-[442px] lg:h-[332px] xl:h-[442px]">
							<img
								src={Hero12p1Img}
								alt="hero image1"
								class="h-full w-full object-cover object-center"
							/>
						</div>
					</div>
					<div class="w-1/2 px-2 sm:px-4">
						<div class="mb-4 h-[120px] sm:mb-8 sm:h-[205px] lg:h-[150px] xl:h-[205px]">
							<img
								src={Hero12p2Img}
								alt="hero image2"
								class="h-full w-full object-cover object-center"
							/>
						</div>
						<div class="mb-4 h-[120px] sm:mb-8 sm:h-[205px] lg:h-[150px] xl:h-[205px]">
							<img
								src={Hero12p3Img}
								alt="hero image3"
								class="h-full w-full object-cover object-center"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
