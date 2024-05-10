<script>
	import ArrowDownIcon from '$lib/assets/template2/icons/arrow-down-icon.svelte';

	let collaps = $state({
		openFaq1: false,
		openFaq2: false,
		openFaq3: false,
		openFaq4: false,
		openFaq5: false,
		openFaq6: false,
	});
</script>

<section
	id="features"
	class="relative z-20 overflow-hidden bg-white pb-12 pt-20 lg:pb-[90px] lg:pt-[120px]"
>
	<div class="container mx-auto">
		<!-- wrapper -->
		<div class="-mx-4 flex flex-wrap">
			<div class="w-full px-4">
				<!-- content -->
				<div class="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
					<span class="mb-2 block text-lg font-semibold text-primary"> FAQ </span>
					<h2 class="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
						Any Questions? Look Here
					</h2>
					<p class="text-base text-body-color">
						There are many variations of passages of Lorem Ipsum available but the majority have
						suffered alteration in some form.
					</p>
				</div>
			</div>
		</div>

		<!-- wrapper -->
		<div class="-mx-4 flex flex-wrap">
			<!-- lg: Left side -->
			<div class="w-full px-4 lg:w-1/2">
				<!-- FAQ #1 -->
				{@render faqCard({
					title: 'FAQ1: How long we deliver your first blog post?',
					content:
						'It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available.',
					onclick: () => {
						collaps.openFaq1 = !collaps.openFaq1;
					},
					isOpen: collaps.openFaq1,
				})}
				<!-- FAQ #2 -->
				{@render faqCard({
					title: 'FAQ2: How long we deliver your first blog post?',
					content:
						'It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available.',
					onclick: () => {
						collaps.openFaq2 = !collaps.openFaq2;
					},
					isOpen: collaps.openFaq2,
				})}
				<!-- FAQ #3 -->
				{@render faqCard({
					title: 'FAQ3: How long we deliver your first blog post?',
					content:
						'It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available.',
					onclick: () => {
						collaps.openFaq3 = !collaps.openFaq3;
					},
					isOpen: collaps.openFaq3,
				})}
			</div>

			<!-- lg: Right side -->
			<div class="w-full px-4 lg:w-1/2">
				<!-- FAQ #4 -->
				{@render faqCard({
					title: 'FAQ4: How long we deliver your first blog post?',
					content:
						'It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available.',
					onclick: () => {
						collaps.openFaq4 = !collaps.openFaq4;
					},
					isOpen: collaps.openFaq4,
				})}
				<!-- FAQ #5 -->
				{@render faqCard({
					title: 'FAQ5: How long we deliver your first blog post?',
					content:
						'It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available.',
					onclick: () => {
						collaps.openFaq5 = !collaps.openFaq5;
					},
					isOpen: collaps.openFaq5,
				})}
				<!-- FAQ #6 -->
				{@render faqCard({
					title: 'FAQ6: How long we deliver your first blog post?',
					content:
						'It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available.',
					onclick: () => {
						collaps.openFaq6 = !collaps.openFaq6;
					},
					isOpen: collaps.openFaq6,
				})}
			</div>
		</div>
	</div>

	<!-- Bg Deco of FAQ -->
	<div class="absolute bottom-0 right-0 z-[-1]">
		<svg
			width="1440"
			height="886"
			viewBox="0 0 1440 886"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				opacity="0.5"
				d="M193.307 -273.322L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.23 478.513 729.926C225.976 477.316 -165.714 85.6985 -165.714 85.6985L193.307 -273.322Z"
				fill="url(#paint0_linear_1314_168)"
			/>
			<defs>
				<linearGradient
					id="paint0_linear_1314_168"
					x1="1308.65"
					y1="1142.58"
					x2="602.827"
					y2="-418.682"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="#3056D3" stop-opacity="0.36" />
					<stop offset="1" stop-color="#F5F2FD" stop-opacity="0" />
					<stop offset="1" stop-color="#F5F2FD" stop-opacity="0.096144" />
				</linearGradient>
			</defs>
		</svg>
	</div>
</section>

{#snippet faqCard({ title, content, onclick, isOpen })}
	<div
		class="single-faq mb-8 w-full rounded-lg border border-[#F3F4FE] bg-white p-4 sm:p-8 lg:px-6 xl:px-8"
	>
		<button {onclick} class="faq-btn flex w-full text-left">
			<div
				class="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-primary"
			>
				<ArrowDownIcon />
			</div>
			<div class="w-full">
				<h4 class="text-lg font-semibold text-black">{title}</h4>
			</div>
		</button>
		{#if isOpen}
			<div class="faq-content pl-[62px]">
				<p class="py-3 text-base leading-relaxed text-body-color">
					{content}
				</p>
			</div>
		{/if}
	</div>
{/snippet}
