<script>
	import { clickOutside } from '$lib/utils/click-outside';

	/** @type {{
	 *    value: string,
	 *    description: string,
	 *    handler: {
	 *      open: boolean,
	 *      toggle: (val?: boolean) => void,
	 *    },
	 *    svgIcon: import('svelte').Snippet,
	 *  }}
	 */
	let { value, description, handler, svgIcon } = $props();
</script>

<div class="w-full px-4 md:w-1/2 lg:w-1/3 2xl:w-full">
	<div
		class="relative mb-8 flex items-center rounded-[10px] bg-base-200 px-6 py-10 shadow-sm sm:px-10 md:px-6 xl:px-10"
	>
		<div
			class="mr-4 flex h-[50px] w-full max-w-[50px] items-center justify-center rounded-full bg-primary-content text-primary sm:mr-6 sm:h-[60px] sm:max-w-[60px] md:mr-4 md:h-[50px] md:max-w-[50px] xl:mr-6 xl:h-[60px] xl:max-w-[60px]"
		>
			{@render svgIcon()}
		</div>
		<div>
			<p class="text-2xl font-bold text-primary xl:text-[28px] xl:leading-[35px]">
				{value}
			</p>
			<p class="mt-1 text-base text-base-content">{description}</p>
		</div>

		<div class="absolute right-5 top-5">
			<div class="relative">
				<!-- dropDown 버튼 -->
				<button onclick={() => handler.toggle(true)} class="">
					{@render threeDotIcon()}
				</button>

				{#if handler.open}
					<div
						use:clickOutside
						on:click_outside={() => handler.toggle(false)}
						class="absolute right-0 top-full z-40 w-[150px] space-y-1 rounded bg-base-100 p-2 shadow-card"
					>
						<button class="w-full rounded px-3 py-1.5 text-left text-sm hover:bg-base-200">
							Edit
						</button>
						<button class="w-full rounded px-3 py-1.5 text-left text-sm hover:bg-base-200">
							Delete
						</button>
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>

{#snippet threeDotIcon()}
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		class="fill-current"
	>
		<path
			d="M5 14C6.10457 14 7 13.1046 7 12C7 10.8954 6.10457 10 5 10C3.89543 10 3 10.8954 3 12C3 13.1046 3.89543 14 5 14Z"
		/>
		<path
			d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
		/>
		<path
			d="M19 14C20.1046 14 21 13.1046 21 12C21 10.8954 20.1046 10 19 10C17.8954 10 17 10.8954 17 12C17 13.1046 17.8954 14 19 14Z"
		/>
	</svg>
{/snippet}
