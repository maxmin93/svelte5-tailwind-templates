<script>
	/** @type {{
	 *    children: import('svelte').Snippet,
	 *    class?: string,
	 *  }} */
	let { children, ...restProps } = $props();
	let userClasses = restProps.class ?? '';
	delete restProps['class'];
</script>

<div class="splide__track {userClasses}" {...restProps}>
	<ul class="splide__list">
		{#if children}
			{@render children()}
		{/if}
	</ul>
</div>
