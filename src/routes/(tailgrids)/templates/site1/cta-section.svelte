<script>
	import CtaDecoBg from '$lib/assets/template1/icons/cta-deco-bg.svelte';
</script>

<section class="relative z-10 overflow-hidden bg-primary py-20 lg:py-[110px]">
	<div class="container mx-auto">
		<div class="relative overflow-hidden">
			<div class="-mx-4 flex flex-wrap items-stretch">
				<div class="w-full px-4">
					<div class="mx-auto max-w-[570px] text-center">
						<h2 class="mb-6 text-3xl font-semibold leading-snug text-white md:text-[40px]">
							What Are You Looking For?

							<span class="font-light"> Get Started Now </span>
						</h2>
						<p class="mb-8 text-base leading-relaxed text-white md:pr-10">
							There are many variations of passages of Lorem Ipsum but the majority have suffered in
							some form.
						</p>
						<a
							href={undefined}
							class="inline-block rounded bg-[#13C296] px-7 py-3 text-base font-medium text-white transition hover:bg-opacity-90"
						>
							Explore Now
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- CTA Background Decoration -->
	<CtaDecoBg />
</section>
