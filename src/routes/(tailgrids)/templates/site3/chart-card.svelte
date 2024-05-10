<script>
	/** @type {{
	 *    title: string,
	 *    description: string,
	 *    options: any[],
	 * 		chartfn: (node: HTMLCanvasElement) => {destroy(): void;} | undefined,
	 * 		actions?: {name:string, handler(chart:import('chart.js').Chart):void}[],
	 * 		class?: string,
	 *  }}
	 * */
	let { title, description, options, chartfn, actions, ...restProps } = $props();
	let customClass = restProps.class ?? 'lg:w-1/2 xl:w-7/12 2xl:w-5/12';
	let chart = $state(undefined);

	/**
	 * function handleEmit
	 * @param {CustomEvent} event
	 */
	function handleEmit(event) {
		/** @type { import('chart.js').Chart | undefined } */
		chart = event.detail ?? undefined;
		if (chart) {
			console.log('chart:', chart);
		}
	}
</script>

<div class="w-full px-4 {customClass}">
	<div
		class="border-stroke mb-8 w-full rounded-lg border bg-base-200 px-5 pb-5 pt-[30px] sm:px-[30px]"
	>
		<div class="justify-between sm:flex">
			<div class="mb-4 sm:mb-0">
				<h5 class="text-xl font-semibold">{title}</h5>
				<p class="text-sm">{description}</p>
			</div>
			<div>
				<div class="relative z-20 inline-block rounded-md bg-transparent">
					<select
						class="border-stroke relative z-20 inline-flex appearance-none rounded-md border bg-transparent py-[5px] pl-3 pr-10 text-base outline-none"
					>
						{#each options as option}
							<option value={option.value} class=""> {option.name} </option>
						{/each}
					</select>
					<span class="absolute right-3 top-1/2 z-10 -translate-y-1/2">
						<svg
							width="18"
							height="18"
							viewBox="0 0 18 18"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							class="fill-current"
						>
							<path
								d="M9 12.8249C8.83125 12.8249 8.69062 12.7687 8.55 12.6562L2.08125 6.2999C1.82812 6.04678 1.82812 5.65303 2.08125 5.3999C2.33437 5.14678 2.72812 5.14678 2.98125 5.3999L9 11.278L15.0187 5.34365C15.2719 5.09053 15.6656 5.09053 15.9187 5.34365C16.1719 5.59678 16.1719 5.99053 15.9187 6.24365L9.45 12.5999C9.30937 12.7405 9.16875 12.8249 9 12.8249Z"
							/>
						</svg>
					</span>
				</div>
			</div>
		</div>

		<div class="flex h-[380px] items-center justify-center">
			{#if chartfn !== undefined}
				<canvas class="my-4" on:emit={handleEmit} use:chartfn></canvas>
			{/if}
		</div>
		{#if actions}
			<div class="join mt-6 flex place-content-center gap-2">
				{#each actions as action}
					<button
						class="btn join-item bg-primary-content {!chart && 'btn-disabled'}"
						onclick={() => {
							if (chart) {
								console.log('action clicked:', action.name, !!chart);
								action.handler(chart);
							}
						}}>{action.name}</button
					>
				{/each}
			</div>
		{/if}
	</div>
</div>
