<script>
	import ServiceIcon1 from '$lib/assets/template2/icons/service-icon1.svelte';
	import ServiceIcon2 from '$lib/assets/template2/icons/service-icon2.svelte';
	import ServiceIcon3 from '$lib/assets/template2/icons/service-icon3.svelte';
</script>

<section class="pb-12 pt-20 lg:pb-[90px] lg:pt-[120px]">
	<div class="container mx-auto">
		<!-- layout -->
		<div class="-mx-4 flex flex-wrap">
			<!-- wrapper -->
			<div class="w-full px-4">
				<!-- content -->
				<div class="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
					<span class="mb-2 block text-lg font-semibold text-primary"> What we Serve </span>
					<h2 class="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
						Our Best Services
					</h2>
					<p class="text-base text-body-color">
						There are many variations of passages of Lorem Ipsum available but the majority have
						suffered alteration in some form.
					</p>
				</div>
			</div>
		</div>

		<!-- layout -->
		<div class="-mx-4 flex flex-wrap justify-center">
			{@render serviceCard({
				icon: ServiceIcon1,
				title: 'Marketing Solutions',
				description: '마케팅 솔루션을 잘 할 수 있습니다. 두줄을 만들어야 합니다.',
			})}

			{@render serviceCard({
				icon: ServiceIcon2,
				title: 'Business Analytics',
				description: '비즈니스 분석을 더 잘 수행합니다. snippet 으로 찍어냈습니다.',
			})}

			{@render serviceCard({
				icon: ServiceIcon3,
				title: 'UX & UI Design',
				description: 'Lorem Ipsum is simply dummy text of the printing and industry.',
			})}
		</div>
	</div>
</section>

{#snippet serviceCard({ icon, title, description })}
	<!-- wrapper with size -->
	<div class="w-full px-4 sm:w-4/5 md:w-1/2 lg:w-1/3">
		<!-- content -->
		<div
			class="group relative mb-8 rounded-xl border border-[#EFEFEF] bg-white p-10 text-center md:px-8 lg:px-6 lg:py-9 xl:p-10 2xl:p-12"
		>
			<div class="relative z-10 mx-auto mb-10 inline-flex h-11 items-center">
				<span class="absolute -right-3 top-0 z-[-1] h-7 w-7 rounded-full bg-primary opacity-20"
				></span>
				<svelte:component this={icon} />
			</div>
			<h4 class="mb-3 text-xl font-semibold text-dark">{title}</h4>
			<p class="text-body-color">
				{description}
			</p>

			<!-- || hover 할때 아래쪽에 은근한 그림자 강조 -->
			<span
				class="z-1 absolute -bottom-2 left-0 right-0 mx-auto h-12 w-3/4 bg-primary opacity-0 blur-[12px] transition group-hover:opacity-[14%]"
			></span>
		</div>
	</div>
{/snippet}
