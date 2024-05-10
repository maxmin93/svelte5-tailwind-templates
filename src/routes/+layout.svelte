<script lang="ts">
	import '../app.pcss';
	import { themeChange } from 'theme-change';
	import { onMount } from 'svelte';
	import TwIndicator from '$lib/utils/tw-indicator.svelte';

	onMount(() => {
		themeChange(false);
	});
</script>

<slot />
<TwIndicator />
