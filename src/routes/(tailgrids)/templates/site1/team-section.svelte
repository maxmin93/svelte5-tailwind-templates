<script>
	import FacebookIcon from '$lib/assets/template1/icons/facebook-icon.svelte';
	import InstagramIcon from '$lib/assets/template1/icons/instagram-icon.svelte';
	import ProfileDecoIcon from '$lib/assets/template1/icons/profile-deco-icon.svelte';
	import TweeterIcon from '$lib/assets/template1/icons/tweeter-icon.svelte';

	/** @type {{
	 *    members: {
	 *      imgSrc: string,
	 *      name: string,
	 *      position: string
	 *    }[]
	 *  }} */
	let { members } = $props();
</script>

<section class="overflow-hidden bg-[#F7F8FA] pb-20 pt-20 lg:pb-[120px] lg:pt-[120px]">
	<div class="container mx-auto">
		<!-- Title -->
		<div class="-mx-4 flex flex-wrap">
			<div class="w-full px-4">
				<div class="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
					<span class="mb-2 block text-lg font-semibold text-primary"> Our Team Members </span>
					<h2 class="mb-4 text-3xl font-bold text-black sm:text-4xl md:text-[40px]">
						Our Creative Team
					</h2>
					<p class="text-base text-body-color">
						There are many variations of passages of Lorem Ipsum available but the majority have
						suffered alteration in some form.
					</p>
				</div>
			</div>
		</div>

		<!-- Members -->
		<div class="-mx-4 flex flex-wrap justify-center">
			<!-- Member -->
			{#each members as member}
				<div class="w-full px-4 sm:w-1/2 lg:w-1/4 xl:w-1/4">
					<div class="group mb-8 rounded-md bg-white px-5 pb-10 pt-12 shadow-card">
						<div class="relative z-10 mx-auto mb-5 h-[120px] w-[120px]">
							<img
								src={'/src/lib/assets/template1/images/team' + member.imgSrc}
								alt="team image"
								class="h-[120px] w-[120px] rounded-full"
							/>
							<!-- 초록색 원형 : 사진 하단 왼쪽 -->
							<span
								class="absolute bottom-0 left-0 -z-10 h-10 w-10 rounded-full bg-secondary opacity-0 transition-all group-hover:opacity-100"
							>
							</span>
							<!-- 도트 무늬 배경 : 사진 오른쪽 상단 -->
							<span
								class="absolute right-0 top-0 -z-10 opacity-0 transition-all group-hover:opacity-100"
							>
								<ProfileDecoIcon />
							</span>
						</div>
						<div class="text-center">
							<h4 class="mb-1 text-lg font-semibold leading-tight text-black">{member.name}</h4>
							<p class="mb-5 text-sm font-medium text-body-color">{member.position}</p>
							<div class="flex items-center justify-center">
								<!-- Facebook Icon -->
								<a href="javascript:void(0)" class="mx-3 text-[#CDCED6] hover:text-primary">
									<FacebookIcon />
								</a>
								<!-- Tweeter Icon -->
								<a href="javascript:void(0)" class="mx-3 text-[#CDCED6] hover:text-primary">
									<TweeterIcon />
								</a>
								<!-- Instagram Icon -->
								<a href="javascript:void(0)" class="mx-3 text-[#CDCED6] hover:text-primary">
									<InstagramIcon />
								</a>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
