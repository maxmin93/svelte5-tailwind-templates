<script>
	import { clickOutside } from '$lib/utils/click-outside';
	import LogoSvg from '$lib/assets/template2/images/logo/logo.svg';
	import LogoWhiteSvg from '$lib/assets/template2/images/logo/logo-white.svg';

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
		{ title: 'Home', anchor: '' },
		{ title: 'Payment', anchor: 'payment' },
		{ title: 'Biz Video', anchor: 'bizvideo' },
		{ title: 'Features', anchor: 'features' },
	];
</script>

<header
	class="left-0 top-0 z-50 w-full {scrolledFromTop
		? 'fixed z-50 bg-white bg-opacity-80 shadow-sm backdrop-blur-sm dark:bg-dark'
		: 'absolute'}"
>
	<div class="container mx-auto">
		<div class="relative -mx-4 flex items-center justify-between">
			<!-- logo icon -->
			<div class="w-60 max-w-full px-4">
				<a href={undefined} class="block w-full py-5">
					<img src={LogoSvg} alt="logo" class="w-full dark:hidden" />
					<img src={LogoWhiteSvg} alt="logo" class="hidden w-full dark:block" />
				</a>
			</div>

			<div class="flex w-full items-center justify-between px-4">
				<!-- Hamburger Menu -->
				<div>
					<button
						use:clickOutside
						on:click_outside={closeNav}
						onclick={navController.toggle}
						class="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden {navController.open &&
							'navbarTogglerActive'}"
					>
						<span class="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"
						></span>
						<span class="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"
						></span>
						<span class="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"
						></span>
					</button>
					<!-- Pulldown menu -->
					<nav
						id="navbarCollapse"
						class="absolute right-4 top-full z-40 w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow transition-all lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:shadow-none dark:bg-dark lg:dark:bg-transparent {!navController.open &&
							'hidden'}"
					>
						<ul class="block lg:flex">
							{#each menuItems as item}
								<li>
									<a
										href="#{item.anchor}"
										class="flex py-2 text-base font-medium text-dark hover:text-primary lg:ml-12 lg:inline-flex dark:text-white"
									>
										{item.title}
									</a>
								</li>
							{/each}
						</ul>
					</nav>
				</div>

				<!-- Auth Menu -->
				<div class="hidden justify-end pr-16 text-base font-medium sm:flex lg:pr-0">
					<a href={undefined} class="px-7 py-3 text-dark hover:text-primary dark:text-white">
						Login
					</a>
					<a
						href={undefined}
						class="rounded-lg bg-primary px-7 py-3 text-white hover:bg-opacity-90 dark:text-white"
					>
						Sign Up
					</a>
				</div>
			</div>
		</div>
	</div>
</header>
