<script>
	/** @type {{
	 *    children: import('svelte').Snippet,
	 *    class?: string,
	 *  }} */
	let { children, ...restProps } = $props();
	let userClasses = restProps.class ?? '';
	delete restProps['class'];
</script>

<li class="splide__slide {userClasses}" {...restProps}>
	{#if children}
		{@render children()}
	{/if}
</li>
