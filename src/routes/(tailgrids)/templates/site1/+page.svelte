<script>
	import { onMount } from 'svelte';
	import TeamSection from './team-section.svelte';
	import AboutSection from './about-section.svelte';
	import ServiceSection from './service-section.svelte';
	import BrandSection from './brand-section.svelte';
	import HeroSection from './hero-section.svelte';
	import NavbarSection from './navbar-section.svelte';
	import TestimonialsSection from './testimonials-section.svelte';
	import PricingSection from './pricing-section.svelte';
	import CtaSection from './cta-section.svelte';
	import ContactSection from './contact-section.svelte';
	import BlogSection from './blog-section.svelte';
	import FooterSection from './footer-section.svelte';

	// Child 의 변경사항이 Parent 로 전달되기 위해서는 Object 형태이어야 한다
	// - scrolledFromTop 처럼 state 변수를 단순 전달하면 안올라온다
	const navController = (() => {
		/** @type {boolean} */
		let isOpen = $state(false);
		return {
			toggle: () => {
				isOpen = !isOpen;
			},
			get open() {
				return isOpen;
			},
		};
	})();

	// Child 로의 변경사항은 실시간으로 전달된다
	/** @type {boolean} */
	let scrolledFromTop = $state(false);

	// window 스크롤 세로 위치
	/** @type {number} */
	let y = $state(0);

	$effect(() => {
		// 사용자 스크롤에 의해 scrollY 가 변경되어야 갱신된다
		scrolledFromTop = y >= 50 ? true : false;
		// $inspect('navController =', navController.open);
	});

	onMount(() => {
		$inspect(data);
		//** DEBUG: 새로고침 이후 아래부분 작성 내용을 즉시 확인
		window.scrollTo({
			top: document.body.scrollHeight,
			behavior: 'instant',
		});
	});

	// Smooth scroll to top
	function scrollToTop() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	}

	// import Team07M1Img from '$lib/assets/template1/images/team/image-07/image-01.png';
	// import Team07M2Img from '$lib/assets/template1/images/team/image-07/image-02.png';
	// import Team07M3Img from '$lib/assets/template1/images/team/image-07/image-03.png';
	// import Team07M4Img from '$lib/assets/template1/images/team/image-07/image-04.png';

	/** @type {{
	 * 		data: import('./$types').PageData
	 * 	}} */
	let { data } = $props();
</script>

<svelte:window bind:scrollY={y} />

<!-- || Navbar Section Start -->
<NavbarSection {scrolledFromTop} {navController} />
<!-- || Navbar Section End -->

<!-- || Hero Section Start -->
<HeroSection />
<!-- || Hero Section End -->

<!-- || Brands Section Start -->
<BrandSection />
<!-- || Brands Section End -->

<!-- || Services Section Start -->
<ServiceSection />
<!-- || Services Section End -->

<!-- || About Section Start -->
<AboutSection />
<!-- || About Section End -->

<!-- || Team Section Start -->
<TeamSection members={data.members ?? []} />
<!-- || Team Section End -->

<!-- || Testimonials Section Start -->
<TestimonialsSection />
<!-- || Testimonials Section End -->

<!-- || Pricing Section Start -->
<PricingSection />
<!-- || Pricing Section End -->

<!-- || Call To Action Section Start -->
<CtaSection />
<!-- || Call To Action Section End -->

<!-- || Contact Section Start -->
<ContactSection />
<!-- || Contact Section End -->

<!-- || Blog Section Start -->
<BlogSection />
<!-- || Blog Section End -->

<!-- || Footer Section Start -->
<FooterSection />
<!-- || Footer Section End -->

<!--
	Tailwind CSS 및 Flexbox를 사용하여 Bootstrap 같은 반응형 열 그리드를 만드는 방법
	https://jasonlbeggs.com/blog/tailwind-css-tips-and-tricks

	- 1. 컨테이너 `container mx-auto`
	- 2. 그리드 래퍼 `-mx-4 flex flex-wrap`
	- 3-1. 그리드 컬럼 `w-full flex flex-col p-4 sm:w-1/2 lg:w-1/3`
	- 3-2. 컬럼 콘텐츠 `flex-1 px-10 py-12 bg-white rounded-lg shadow-lg`
	- 3-3. 카드 콘텐츠 : 실질적인 내용물

	<img src="https://laravelnews.s3.amazonaws.com/images/grid-system-1643380407.png" alt="grid using flex example" width="80%" />
 -->

<!-- Back to top button -->
<button
	onclick={scrollToTop}
	type="button"
	class="{!scrolledFromTop &&
		'hidden'} !fixed bottom-6 end-6 z-30 rounded-full bg-red-600 p-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg"
	id="btn-back-to-top"
>
	<span class="[&>svg]:w-4">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="3"
			stroke="currentColor"
		>
			<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
		</svg>
	</span>
</button>
