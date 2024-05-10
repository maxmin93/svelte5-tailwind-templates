<script>
	import { clickOutside } from '$lib/utils/click-outside';
	import LogoImg from '$lib/assets/template1/images/logo/logo.svg';

	/** @type {{
	 *    scrolledFromTop: boolean,
	 *    navController: {
	 *      toggle: () => void,
	 *      open: boolean
	 *    }
	 *  }} */
	let { scrolledFromTop, navController } = $props();

	$effect(() => {
		// $inspect('navController =', navController.open);
		$inspect('scrolledFromTop =', scrolledFromTop);
	});

	/** @param {Event} event */
	function closeNav(event) {
		if (navController.open) {
			navController.toggle();
		}
	}

	const menuItems = [
		{ title: 'About Us', anchor: 'aboutus' },
		{ title: 'Features', anchor: 'features' },
		{ title: 'Pricing', anchor: 'pricing' },
		{ title: 'Support', anchor: 'support' },
	];

	// 이거 안써도 스크롤 되긴 하더라
	/** @param {Event} event */
	function handleAnchorClick(event) {
		event.preventDefault();
		if (event.currentTarget && event.currentTarget instanceof HTMLAnchorElement) {
			const link = event.currentTarget;
			const anchorId = new URL(link.href).hash.replace('#', '');
			const anchor = document.getElementById(anchorId);
			window.scrollTo({
				top: anchor?.offsetTop,
				behavior: 'smooth',
			});
		}
	}
</script>

<header
	class="left-0 top-0 z-50 w-full {scrolledFromTop
		? 'fixed z-50 bg-white bg-opacity-80 shadow-sm backdrop-blur-sm'
		: 'absolute'}"
>
	<div class="container mx-auto">
		<div class="items-conter relative z-40 -mx-4 flex justify-between">
			<div class="w-60 max-w-full px-4">
				<a href={undefined} class="block w-full py-5">
					<img src={LogoImg} alt="logo" class="w-full" />
				</a>
			</div>
			<div class="flex w-full items-center justify-between px-4">
				<div>
					<button
						use:clickOutside
						on:click_outside={closeNav}
						onclick={navController.toggle}
						class="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden {navController.open &&
							'navbarTogglerActive'}"
					>
						<span class="relative my-[6px] block h-[2px] w-[30px] bg-black"></span>
						<span class="relative my-[6px] block h-[2px] w-[30px] bg-black"></span>
						<span class="relative my-[6px] block h-[2px] w-[30px] bg-black"></span>
					</button>
					<nav
						id="navbarCollapse"
						class="absolute right-4 top-full z-40 w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:shadow-none {!navController.open &&
							'hidden'}"
					>
						<ul class="block lg:flex">
							{#each menuItems as item}
								<li>
									<a
										href="#{item.anchor}"
										onclick={handleAnchorClick}
										class="flex py-2 text-base font-medium text-dark hover:text-primary lg:ml-12 lg:inline-flex"
									>
										{item.title}
									</a>
								</li>
							{/each}
						</ul>
					</nav>
				</div>

				<div class="hidden justify-end pr-16 sm:flex lg:pr-0">
					<a
						href={undefined}
						class="rounded-lg bg-black px-7 py-3 text-[18px] font-medium text-white hover:bg-opacity-90"
					>
						Get Started</a
					>
				</div>
			</div>
		</div>
	</div>
</header>
