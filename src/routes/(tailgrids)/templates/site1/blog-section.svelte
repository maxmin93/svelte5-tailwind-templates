<script>
	import BlogBgDeco from '$lib/assets/template1/icons/blog-bg-deco.svelte';
	import CalendarIcon from '$lib/assets/template1/icons/calendar-icon.svelte';
	import CommentIcon from '$lib/assets/template1/icons/comment-icon.svelte';
	import NewsletterBgDeco from '$lib/assets/template1/icons/newsletter-bg-deco.svelte';
	import Blog4Img1 from '$lib/assets/template1/images/blogs/blog-04/image-01.jpg';
	import Blog4Img2 from '$lib/assets/template1/images/blogs/blog-04/image-02.jpg';
</script>

<section class="bg-[#F7F8FA] pb-10 pt-20 lg:pb-20 lg:pt-[120px]">
	<div class="container mx-auto">
		<div class="-mx-4 flex flex-wrap justify-center">
			<div class="relative w-full px-4">
				<div class="mb-[60px] max-w-[510px] lg:mb-20">
					<span class="mb-2 block text-lg font-semibold text-primary"> Latest News </span>
					<h2 class="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
						Recent Blog Articles
					</h2>
					<p class="text-base text-body-color">
						There are many variations of passages of Lorem Ipsum available but the majority have
						suffered alteration in some form.
					</p>
				</div>
				<div class="absolute right-4 top-0 z-[-1]">
					<BlogBgDeco />
				</div>
			</div>
		</div>

		<!-- Blog Group -->
		<div class="-mx-4 flex flex-wrap">
			<!-- Blog #1 -->
			<div class="w-full px-4 md:w-1/2 lg:w-1/3">
				<div class="mx-auto mb-10 max-w-[370px]">
					<div class="mb-8 overflow-hidden rounded">
						<img src={Blog4Img1} alt="image" class="w-full" />
					</div>
					<div>
						<span class="mb-3 inline-block text-base font-semibold text-primary"> Management </span>
						<h3>
							<a
								href={undefined}
								class="mb-5 inline-block text-xl font-semibold text-dark hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
							>
								Meet AutoManage, the best AI management tools
							</a>
						</h3>
						<div class="flex items-center">
							<p class="mr-8 flex items-center text-sm font-medium text-body-color">
								<span class="mr-3">
									<CalendarIcon />
								</span>
								26 Feb 2023
							</p>
							<p class="flex items-center text-sm font-medium text-body-color">
								<span class="mr-3">
									<CommentIcon />
								</span>05
							</p>
						</div>
					</div>
				</div>
			</div>
			<!-- Blog #2 -->
			<div class="w-full px-4 md:w-1/2 lg:w-1/3">
				<div class="mx-auto mb-10 max-w-[370px]">
					<div class="mb-8 overflow-hidden rounded">
						<img src={Blog4Img2} alt="image" class="w-full" />
					</div>
					<div>
						<span class="mb-3 inline-block text-base font-semibold text-primary">
							Graphic Design
						</span>
						<h3>
							<a
								href={undefined}
								class="mb-5 inline-block text-xl font-semibold text-dark hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
							>
								50+ best way to learn graphics design in 30 days
							</a>
						</h3>
						<div class="flex items-center">
							<p class="mr-8 flex items-center text-sm font-medium text-body-color">
								<span class="mr-3">
									<CalendarIcon />
								</span>
								01 Apr 2023
							</p>
							<p class="flex items-center text-sm font-medium text-body-color">
								<span class="mr-3">
									<CommentIcon />
								</span>10
							</p>
						</div>
					</div>
				</div>
			</div>
			<!-- Blog #3 -->
			<div class="w-full px-4 md:w-1/2 lg:w-1/3">
				<div
					class="relative mx-auto mb-10 max-w-[370px] overflow-hidden rounded bg-primary px-11 py-[60px] text-center lg:px-8"
				>
					<h3 class="mb-2 text-2xl font-semibold text-white">Join our newsletter!</h3>
					<p class="mb-8 text-base text-white">
						Enter your email to receive our latest newsletter.
					</p>
					<form action="">
						<input
							type="email"
							placeholder="Your email address"
							class="mb-4 w-full rounded border border-transparent bg-white bg-opacity-20 p-3 text-center text-sm font-medium text-white placeholder-white placeholder-opacity-60 outline-none focus:border-white focus-visible:shadow-none"
						/>
						<input
							type="submit"
							value="Subscribe Now"
							class="mb-6 w-full cursor-pointer rounded bg-[#13C296] p-3 text-center text-sm font-medium text-white transition hover:bg-opacity-90"
						/>
					</form>
					<p class="text-sm font-medium text-white">Don't worry, we don't spam</p>
					<div>
						<NewsletterBgDeco />
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
