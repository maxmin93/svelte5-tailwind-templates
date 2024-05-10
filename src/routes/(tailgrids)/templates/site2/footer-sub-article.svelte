<script>
	/** @type {{
	 * 		children: import('svelte').Snippet
	 * 	}}
	 */
	let { children } = $props();
</script>

<div class="w-full px-4 sm:w-1/2 lg:w-3/12 2xl:w-2/12">
	<div class="mb-10 w-full">
		{@render children()}
	</div>
</div>
