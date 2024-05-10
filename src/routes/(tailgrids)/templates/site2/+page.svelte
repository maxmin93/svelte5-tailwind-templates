<script>
	// import '$lib/assets/template2/tailwind.css';

	import { onMount } from 'svelte';
	import NavbarSection from './navbar-section.svelte';
	import HeroSection from './hero-section.svelte';
	import ServicesSection from './services-section.svelte';
	import VideoSection from './video-section.svelte';
	import PricingSection from './pricing-section.svelte';
	import TeamSection from './team-section.svelte';
	import FaqSection from './faq-section.svelte';
	import CtaSection from './cta-section.svelte';
	import TestimonialsSection from './testimonials-section.svelte';
	import ContactSection from './contact-section.svelte';
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

<!-- || Services Section Start -->
<ServicesSection />
<!-- || Services Section End -->

<!-- || Video Section Start -->
<VideoSection />
<!-- || Video Section End -->

<!-- || Pricing  Section Start -->
<PricingSection />
<!-- || Pricing  Section End -->

<!-- || Team Section Start -->
<TeamSection />
<!-- || Team Section End -->

<!-- || FAQ Section Start -->
<FaqSection />
<!-- || FAQ Section End -->

<!-- || Call To Action Section Start -->
<CtaSection />
<!-- || Call To Action Section End -->

<!-- || Testimonials Section Start -->
<TestimonialsSection />
<!-- || Testimonials Section End -->

<!-- || Contact Section Start -->
<ContactSection />
<!-- || Contact Section End -->

<!-- || Footer Section Start -->
<FooterSection />
<!-- || Footer Section End -->

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
