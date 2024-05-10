<script>
</script>

<section
	id="payment"
	class="relative z-20 overflow-hidden bg-white pb-12 pt-20 lg:pb-[90px] lg:pt-[120px]"
>
	<div class="container mx-auto">
		<!-- flex layout -->
		<div class="-mx-4 flex flex-wrap">
			<!-- wrapper with size -->
			<div class="w-full px-4">
				<!-- content -->
				<div class="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
					<span class="mb-2 block text-lg font-semibold text-primary"> Pricing Table </span>
					<h2 class="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
						Our Pricing Plan
					</h2>
					<p class="text-base text-body-color">
						There are many variations of passages of Lorem Ipsum available but the majority have
						suffered alteration in some form.
					</p>
				</div>
			</div>
		</div>

		<!-- flex layout -->
		<div class="-mx-4 flex flex-wrap justify-center">
			<!-- wrapper with size -->
			<div class="w-full px-4 md:w-1/2 lg:w-1/3">
				<!-- content : Personal -->
				<div
					class="relative z-10 mb-10 overflow-hidden rounded-xl border border-primary border-opacity-20 bg-white px-8 py-10 shadow-pricing sm:p-12 lg:px-6 lg:py-10 xl:p-12"
				>
					{@render pricingCard({
						title: 'Personal',
						price: '$59',
						description: 'Perfect for using in a personal website or a client project.',
						features: [
							'1 User',
							'All UI components',
							'Lifetime access',
							'Free updates',
							'Use on 1 (one) project',
							'3 Months support',
						],
						btnStyle: 'base',
					})}

					<!-- Deco for Personal -->
					{@render cardBgDeco()}
				</div>
			</div>

			<!-- wrapper with size -->
			<div class="w-full px-4 md:w-1/2 lg:w-1/3">
				<!-- content : Business -->
				<div
					class="relative z-10 mb-10 overflow-hidden rounded-xl border border-primary border-opacity-20 bg-white px-8 py-10 shadow-pricing sm:p-12 lg:px-6 lg:py-10 xl:p-12"
				>
					{@render pricingCard({
						title: 'Business',
						price: '$199',
						description: 'Perfect for using in a Business website or a client project.',
						features: [
							'5 Users',
							'All UI components',
							'Lifetime access',
							'Free updates',
							'Use on 3 (Three) project',
							'4 Months support',
						],
						btnStyle: 'inverse',
					})}

					<!-- Deco for Business -->
					{@render cardBgDeco()}
				</div>
			</div>

			<!-- wrapper with size -->
			<div class="w-full px-4 md:w-1/2 lg:w-1/3">
				<!-- content : Professional -->
				<div
					class="relative z-10 mb-10 overflow-hidden rounded-xl border border-primary border-opacity-20 bg-white px-8 py-10 shadow-pricing sm:p-12 lg:px-6 lg:py-10 xl:p-12"
				>
					{@render pricingCard({
						title: 'Professional',
						price: '$256',
						description: 'Perfect for using in a Professional website or a client project.',
						features: [
							'Unlimited Users',
							'All UI components',
							'Lifetime access',
							'Free updates',
							'Use on Unlimited project',
							'12 Months support',
						],
						btnStyle: 'base',
					})}

					<!-- Deco for Professional -->
					{@render cardBgDeco()}
				</div>
			</div>
		</div>
	</div>
</section>

{#snippet pricingCard({ title, price, description, features, btnStyle })}
	<span class="mb-4 block text-lg font-semibold text-primary"> {title} </span>
	<h2 class="mb-5 text-[42px] font-bold text-dark">
		{price}
		<span class="text-base font-medium text-body-color"> / year </span>
	</h2>
	<p class="mb-8 border-b border-[#F2F2F2] pb-8 text-base text-body-color">
		{description}
	</p>
	<div class="mb-7">
		{#each features as feature}
			<p class="mb-1 text-base leading-loose text-body-color">{feature}</p>
		{/each}
	</div>
	<a
		href={undefined}
		class="block w-full rounded-md border border-[#D4DEFF] p-4 text-center text-base font-semibold transition hover:border-primary
		{btnStyle === 'base'
			? 'bg-transparent text-primary hover:bg-primary hover:text-white'
			: 'bg-primary text-white hover:bg-opacity-90'}"
	>
		Choose {title}
	</a>
{/snippet}

{#snippet cardBgDeco()}
	<div>
		<span class="absolute right-0 top-7 z-[-1]">
			<svg
				width="77"
				height="172"
				viewBox="0 0 77 172"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<circle cx="86" cy="86" r="86" fill="url(#paint0_linear)" />
				<defs>
					<linearGradient
						id="paint0_linear"
						x1="86"
						y1="0"
						x2="86"
						y2="172"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#3056D3" stop-opacity="0.09" />
						<stop offset="1" stop-color="#C4C4C4" stop-opacity="0" />
					</linearGradient>
				</defs>
			</svg>
		</span>
		<span class="absolute right-4 top-4 z-[-1]">
			<svg
				width="41"
				height="89"
				viewBox="0 0 41 89"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<circle
					cx="38.9138"
					cy="87.4849"
					r="1.42021"
					transform="rotate(180 38.9138 87.4849)"
					fill="#3056D3"
				/>
				<circle
					cx="38.9138"
					cy="74.9871"
					r="1.42021"
					transform="rotate(180 38.9138 74.9871)"
					fill="#3056D3"
				/>
				<circle
					cx="38.9138"
					cy="62.4892"
					r="1.42021"
					transform="rotate(180 38.9138 62.4892)"
					fill="#3056D3"
				/>
				<circle
					cx="38.9138"
					cy="38.3457"
					r="1.42021"
					transform="rotate(180 38.9138 38.3457)"
					fill="#3056D3"
				/>
				<circle
					cx="38.9138"
					cy="13.634"
					r="1.42021"
					transform="rotate(180 38.9138 13.634)"
					fill="#3056D3"
				/>
				<circle
					cx="38.9138"
					cy="50.2754"
					r="1.42021"
					transform="rotate(180 38.9138 50.2754)"
					fill="#3056D3"
				/>
				<circle
					cx="38.9138"
					cy="26.1319"
					r="1.42021"
					transform="rotate(180 38.9138 26.1319)"
					fill="#3056D3"
				/>
				<circle
					cx="38.9138"
					cy="1.42021"
					r="1.42021"
					transform="rotate(180 38.9138 1.42021)"
					fill="#3056D3"
				/>
				<circle
					cx="26.4157"
					cy="87.4849"
					r="1.42021"
					transform="rotate(180 26.4157 87.4849)"
					fill="#3056D3"
				/>
				<circle
					cx="26.4157"
					cy="74.9871"
					r="1.42021"
					transform="rotate(180 26.4157 74.9871)"
					fill="#3056D3"
				/>
				<circle
					cx="26.4157"
					cy="62.4892"
					r="1.42021"
					transform="rotate(180 26.4157 62.4892)"
					fill="#3056D3"
				/>
				<circle
					cx="26.4157"
					cy="38.3457"
					r="1.42021"
					transform="rotate(180 26.4157 38.3457)"
					fill="#3056D3"
				/>
				<circle
					cx="26.4157"
					cy="13.634"
					r="1.42021"
					transform="rotate(180 26.4157 13.634)"
					fill="#3056D3"
				/>
				<circle
					cx="26.4157"
					cy="50.2754"
					r="1.42021"
					transform="rotate(180 26.4157 50.2754)"
					fill="#3056D3"
				/>
				<circle
					cx="26.4157"
					cy="26.1319"
					r="1.42021"
					transform="rotate(180 26.4157 26.1319)"
					fill="#3056D3"
				/>
				<circle
					cx="26.4157"
					cy="1.4202"
					r="1.42021"
					transform="rotate(180 26.4157 1.4202)"
					fill="#3056D3"
				/>
				<circle
					cx="13.9177"
					cy="87.4849"
					r="1.42021"
					transform="rotate(180 13.9177 87.4849)"
					fill="#3056D3"
				/>
				<circle
					cx="13.9177"
					cy="74.9871"
					r="1.42021"
					transform="rotate(180 13.9177 74.9871)"
					fill="#3056D3"
				/>
				<circle
					cx="13.9177"
					cy="62.4892"
					r="1.42021"
					transform="rotate(180 13.9177 62.4892)"
					fill="#3056D3"
				/>
				<circle
					cx="13.9177"
					cy="38.3457"
					r="1.42021"
					transform="rotate(180 13.9177 38.3457)"
					fill="#3056D3"
				/>
				<circle
					cx="13.9177"
					cy="13.634"
					r="1.42021"
					transform="rotate(180 13.9177 13.634)"
					fill="#3056D3"
				/>
				<circle
					cx="13.9177"
					cy="50.2754"
					r="1.42021"
					transform="rotate(180 13.9177 50.2754)"
					fill="#3056D3"
				/>
				<circle
					cx="13.9177"
					cy="26.1319"
					r="1.42021"
					transform="rotate(180 13.9177 26.1319)"
					fill="#3056D3"
				/>
				<circle
					cx="13.9177"
					cy="1.42019"
					r="1.42021"
					transform="rotate(180 13.9177 1.42019)"
					fill="#3056D3"
				/>
				<circle
					cx="1.41963"
					cy="87.4849"
					r="1.42021"
					transform="rotate(180 1.41963 87.4849)"
					fill="#3056D3"
				/>
				<circle
					cx="1.41963"
					cy="74.9871"
					r="1.42021"
					transform="rotate(180 1.41963 74.9871)"
					fill="#3056D3"
				/>
				<circle
					cx="1.41963"
					cy="62.4892"
					r="1.42021"
					transform="rotate(180 1.41963 62.4892)"
					fill="#3056D3"
				/>
				<circle
					cx="1.41963"
					cy="38.3457"
					r="1.42021"
					transform="rotate(180 1.41963 38.3457)"
					fill="#3056D3"
				/>
				<circle
					cx="1.41963"
					cy="13.634"
					r="1.42021"
					transform="rotate(180 1.41963 13.634)"
					fill="#3056D3"
				/>
				<circle
					cx="1.41963"
					cy="50.2754"
					r="1.42021"
					transform="rotate(180 1.41963 50.2754)"
					fill="#3056D3"
				/>
				<circle
					cx="1.41963"
					cy="26.1319"
					r="1.42021"
					transform="rotate(180 1.41963 26.1319)"
					fill="#3056D3"
				/>
				<circle
					cx="1.41963"
					cy="1.4202"
					r="1.42021"
					transform="rotate(180 1.41963 1.4202)"
					fill="#3056D3"
				/>
			</svg>
		</span>
	</div>
{/snippet}
