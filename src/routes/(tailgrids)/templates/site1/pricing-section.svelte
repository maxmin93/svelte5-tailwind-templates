<script>
	import BusinessDecoBg from '$lib/assets/template1/icons/business-deco-bg.svelte';
</script>

<section
	id="pricing"
	class="relative z-20 overflow-hidden bg-[#F7F8FA] pb-12 pt-20 lg:pb-[90px] lg:pt-[120px]"
>
	<div class="container mx-auto">
		<div class="-mx-4 flex flex-wrap">
			<div class="w-full px-4">
				<div class="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
					<span class="mb-2 block text-lg font-semibold text-primary"> Our Pricing Plans </span>
					<h2 class="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
						Choose your best plan
					</h2>
					<p class="text-base text-body-color">
						There are many variations of passages of Lorem Ipsum available but the majority have
						suffered alteration in some form.
					</p>
				</div>
			</div>
		</div>

		<!-- Prices -->
		<div class="-mx-4 flex flex-wrap justify-center">
			<!-- Basic price -->
			<div class="w-full max-w-[300px] px-4">
				<div
					class="relative z-10 mb-10 overflow-hidden rounded-xl bg-white px-7 py-10 text-center shadow-card sm:px-9"
				>
					<span class="mb-4 block text-lg font-medium uppercase text-body-color"> BASIC </span>
					<h2 class="mb-4 text-4xl font-semibold text-primary xl:text-[42px]">
						<sup class="text-xl font-medium">$</sup>25
						<span class="block text-base font-medium text-body-color">per Month</span>
					</h2>
					<p class="mb-9 text-sm font-medium text-body-color">
						Lorem Ipsum simply dummy text of the printing.
					</p>
					<div class="mb-10">
						<a
							href={undefined}
							class="inline-block rounded-full border border-primary bg-primary px-7 py-[14px] text-center text-base font-semibold text-white transition hover:bg-opacity-90"
							>Purchase Now</a
						>
					</div>
					<div class="space-y-3 text-base text-body-color">
						<p>Up to 1 User</p>
						<p>All UI components</p>
						<p>Lifetime access</p>
						<p>Free updates</p>
						<p>Community Support</p>
						<p>Downloadable Files</p>
					</div>
				</div>
			</div>

			<!-- Business price -->
			<div class="w-full max-w-[300px] px-4">
				<div
					class="relative z-10 mb-10 overflow-hidden rounded-xl bg-primary px-7 py-10 text-center shadow-card sm:px-9"
				>
					<span class="mb-4 block text-lg font-medium uppercase text-white"> Business </span>
					<h2 class="mb-4 text-4xl font-semibold text-white xl:text-[42px]">
						<sup class="text-xl font-medium">$</sup>89
						<span class="block text-base font-medium text-white text-opacity-70"> per Month </span>
					</h2>

					<p class="mb-9 text-sm font-medium text-white">
						Lorem Ipsum simply dummy text of the printing.
					</p>

					<div class="mb-10">
						<a
							href={undefined}
							class="inline-block rounded-full border border-white bg-white px-7 py-[14px] text-center text-base font-semibold text-primary transition hover:bg-opacity-90"
						>
							Purchase Now
						</a>
					</div>
					<div class="space-y-3 text-base text-white">
						<p>Up to 5 User</p>
						<p>All UI components</p>
						<p>Lifetime access</p>
						<p>Free updates</p>
						<p>Community Support</p>
						<p>Downloadable Files</p>
					</div>
					<!-- 비즈니스 카드 배경 장식 (사선 반투명 빗살무늬) -->
					<BusinessDecoBg />
				</div>
			</div>

			<!-- Enterprise price -->
			<div class="w-full max-w-[300px] px-4">
				<div
					class="relative z-10 mb-10 overflow-hidden rounded-xl bg-white px-7 py-10 text-center shadow-card sm:px-9"
				>
					<span class="mb-4 block text-lg font-medium uppercase text-body-color"> Enterprise </span>
					<h2 class="mb-4 text-4xl font-semibold text-primary xl:text-[42px]">
						<sup class="text-xl font-medium">$</sup>
						395
						<span class="block text-base font-medium text-body-color"> per Month </span>
					</h2>
					<p class="mb-9 text-sm font-medium text-body-color">
						Lorem Ipsum simply dummy text of the printing.
					</p>
					<div class="mb-10">
						<a
							href={undefined}
							class="inline-block rounded-full border border-primary bg-primary px-7 py-[14px] text-center text-base font-semibold text-white transition hover:bg-opacity-90"
						>
							Purchase Now
						</a>
					</div>
					<div class="space-y-3 text-base text-body-color">
						<p>Up to 50 User</p>
						<p>All UI components</p>
						<p>Lifetime access</p>
						<p>Free updates</p>
						<p>Community Support</p>
						<p>Downloadable Files</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
