<script>
	import Brand1Img from '$lib/assets/template1/images/brands/graygrids.svg';
	import Brand2Img from '$lib/assets/template1/images/brands/lineicons.svg';
	import Brand3Img from '$lib/assets/template1/images/brands/ayroui.svg';
</script>

<section class="bg-[#F4F7FF] py-10">
	<div class="container mx-auto">
		<div class="-mx-4 flex flex-wrap items-center">
			<div class="w-full px-4 lg:w-1/2 xl:w-5/12">
				<div class="px-2">
					<h2
						class="text-3xl font-bold text-dark sm:text-4xl lg:text-3xl xl:text-[33px] 2xl:text-4xl"
					>
						Tailwind CSS UI Components for Modern Web Apps
					</h2>
				</div>
			</div>
			<div class="w-full px-4 lg:w-1/2 xl:w-7/12">
				<div class="mt-12 flex flex-wrap items-center justify-center lg:mt-0 xl:justify-end">
					{#each [Brand1Img, Brand2Img, Brand3Img] as imgSrc, idx}
						<a
							href={undefined}
							class="mx-4 flex min-w-[150px] max-w-[200px] items-center justify-center py-5 lg:min-w-min lg:max-w-[110px] xl:max-w-[180px]"
						>
							<img src={imgSrc} alt="brand{idx}" class="h-10 w-full" />
						</a>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
