<script>
	// import '$lib/assets/site3/css/tailwind.css';
	import { onMount } from 'svelte';

	// 사이드 메뉴
	const sidebarController = (() => {
		/** @type {boolean} */
		let isOpen = $state(false);
		return {
			/** @param {boolean=} value */
			toggle: (value = undefined) => {
				if (value === undefined) {
					isOpen = !isOpen;
				} else {
					isOpen = value;
				}
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
		$inspect('sidebar:', sidebarController.open);
		// 사용자 스크롤에 의해 scrollY 가 변경되어야 갱신된다
		scrolledFromTop = y >= 50 ? true : false;
	});

	// Theme
	let isDark = $state(false);

	onMount(() => {
		isDark = localStorage.getItem('theme') === 'dark';

		//** DEBUG: 새로고침 이후 아래부분 작성 내용을 즉시 확인
		window.scrollTo({
			top: document.body.scrollHeight,
			behavior: 'instant',
		});

		$inspect(data);
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

	import SidebarSection from './sidebar-section.svelte';
	import HeaderSection from './header-section.svelte';
	import SalesSection from './sales-section.svelte';
</script>

<svelte:window bind:scrollY={y} />

<section class="relative flex min-h-screen w-full items-start bg-base-100">
	<!-- 사이드바 위치 고정 -->
	<div
		class="{sidebarController.open
			? 'translate-x-0'
			: '-translate-x-full'} absolute left-0 top-0 z-40 flex min-h-screen w-full max-w-[90px] flex-col justify-between bg-base-200 shadow-md duration-200 xl:translate-x-0"
	>
		<!-- || Sidebar menu Start -->
		<SidebarSection />
		<!-- || Sidebar menu End -->
	</div>

	<!-- Sidebar outside click -->
	<div
		onclick={() => {
			sidebarController.toggle();
		}}
		class="{sidebarController.open
			? 'translate-x-0'
			: '-translate-x-full'} fixed left-0 top-0 z-30 h-screen w-full bg-neutral bg-opacity-80 xl:hidden"
	></div>

	<!-- Body Area -->
	<div class="w-full xl:pl-[90px]">
		<!-- || Header Menu Section Start -->
		<HeaderSection {sidebarController} />
		<!-- || Header Menu Section End -->

		<!-- Content Area -->
		<div class="p-[30px]">
			<SalesSection />
		</div>
	</div>
</section>

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
