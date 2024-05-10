<script>
	import LogoImg from '$lib/assets/template1/images/logo/logo.svg';
	import FacebookIcon from '$lib/assets/template1/icons/facebook-icon.svelte';
	import InstagramIcon from '$lib/assets/template1/icons/instagram-icon.svelte';
	import TweeterIcon from '$lib/assets/template1/icons/tweeter-icon.svelte';
</script>

<footer class="relative z-10 bg-white pb-10 pt-20 lg:pb-20 lg:pt-[120px]">
	<div class="container mx-auto">
		<div class="-mx-4 flex flex-wrap">
			<!-- Title -->
			<div class="w-full px-4 sm:w-2/3 lg:w-1/4">
				<div class="mb-10 w-full">
					<a href={undefined} class="mb-6 inline-block max-w-[160px]">
						<img src={LogoImg} alt="logo" class="max-w-full" />
					</a>
					<p class="mb-7 text-base text-body-color">
						Lorem ipsum dolor amet consectetur adipiscing elit do eiusmod tempor incididunt ut
						labore et dolore.
					</p>
					<div class="-mx-3 flex items-center">
						{#each [FacebookIcon, TweeterIcon, InstagramIcon] as iconTemplate}
							<a href={undefined} class="px-3 text-[#CDCED6] hover:text-primary">
								<svelte:component this={iconTemplate} />
							</a>
						{/each}
						<a href={undefined} class="px-3 text-[#CDCED6] hover:text-primary">
							<svg width="18" height="18" viewBox="0 0 18 18" class="fill-current">
								<path
									d="M16.7821 0.947388H1.84847C1.14272 0.947388 0.578125 1.49747 0.578125 2.18508V16.7623C0.578125 17.4224 1.14272 18 1.84847 18H16.7257C17.4314 18 17.996 17.4499 17.996 16.7623V2.15757C18.0525 1.49747 17.4879 0.947388 16.7821 0.947388ZM5.7442 15.4421H3.17528V7.32837H5.7442V15.4421ZM4.44563 6.2007C3.59873 6.2007 2.94944 5.5406 2.94944 4.74297C2.94944 3.94535 3.62696 3.28525 4.44563 3.28525C5.26429 3.28525 5.94181 3.94535 5.94181 4.74297C5.94181 5.5406 5.32075 6.2007 4.44563 6.2007ZM15.4835 15.4421H12.9146V11.509C12.9146 10.5739 12.8864 9.33618 11.5596 9.33618C10.2045 9.33618 10.0069 10.3813 10.0069 11.4265V15.4421H7.438V7.32837H9.95046V8.45605H9.9787C10.3457 7.79594 11.1644 7.13584 12.4347 7.13584C15.0601 7.13584 15.54 8.7861 15.54 11.0414V15.4421H15.4835Z"
								/>
							</svg>
						</a>
					</div>
				</div>
			</div>

			<!-- Company -->
			<div class="w-full px-4 sm:w-1/2 lg:w-3/12">
				<div class="mb-10 w-full">
					<h4 class="mb-9 text-lg font-semibold text-dark">Company</h4>
					<ul>
						{#each ['About company', 'Company services', 'Job opportunities', 'Creative people', 'Contact us'] as subtitle}
							<li>
								<a
									href={undefined}
									class="mb-2 inline-block text-base leading-loose text-body-color hover:text-primary"
								>
									{subtitle}
								</a>
							</li>
						{/each}
					</ul>
				</div>
			</div>

			<!--  -->
			<div class="w-full px-4 sm:w-1/2 lg:w-3/12">
				<div class="mb-10 w-full">
					<h4 class="mb-9 text-lg font-semibold text-dark">Customer</h4>
					<ul>
						{#each ['Client support', 'Latest news', 'Company story', 'Pricing packages', 'Who we are'] as subtitle}
							<li>
								<a
									href={undefined}
									class="mb-2 inline-block text-base leading-loose text-body-color hover:text-primary"
								>
									{subtitle}
								</a>
							</li>
						{/each}
					</ul>
				</div>
			</div>

			<!--  -->
			<div class="w-full px-4 sm:w-1/2 lg:w-3/12">
				<div class="mb-10 w-full">
					<h4 class="mb-9 text-lg font-semibold text-dark">Subscribe To Newsletter</h4>
					<p class="mb-5 text-base text-body-color">
						Enter your email address for receiving valuable newsletters.
					</p>
					<form class="relative mb-5 w-full overflow-hidden rounded">
						<input
							type="email"
							placeholder="Your Email"
							class="h-12 w-full rounded border px-5 text-sm text-body-color outline-none focus:border-primary focus-visible:shadow-none"
						/>
						<button
							type="submit"
							class="absolute right-0 top-0 flex h-full w-12 items-center justify-center bg-primary text-white hover:bg-dark"
						>
							<svg width="18" height="13" viewBox="0 0 18 13" class="fill-current">
								<path
									d="M16.3052 0H1.69481C0.75974 0 0 0.799055 0 1.78251V11.2175C0 12.2009 0.75974 13 1.69481 13H16.3052C17.2403 13 18 12.2009 18 11.2175V1.78251C18 0.799055 17.2403 0 16.3052 0ZM16.3052 1.07565C16.4513 1.07565 16.5682 1.10638 16.6851 1.19858L9.40909 5.83924C9.1461 5.99291 8.8539 5.99291 8.59091 5.83924L1.31494 1.19858C1.43182 1.13712 1.5487 1.07565 1.69481 1.07565H16.3052ZM16.3052 11.8936H1.69481C1.34416 11.8936 1.02273 11.5863 1.02273 11.1868V2.27423L8.03572 6.76123C8.32792 6.94563 8.64935 7.03782 8.97078 7.03782C9.29221 7.03782 9.61364 6.94563 9.90584 6.76123L16.9188 2.27423V11.1868C16.9773 11.5863 16.6558 11.8936 16.3052 11.8936Z"
								/>
							</svg>
						</button>
					</form>
					<p class="text-base text-body-color">&copy; 2025 TailGrids</p>
				</div>
			</div>
		</div>
	</div>
</footer>
