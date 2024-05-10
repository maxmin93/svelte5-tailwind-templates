<script>
	import { RiSunLine, RiMoonLine } from 'svelte-remixicon';
	import { onMount } from 'svelte';

	let isDark = $state(false);
	onMount(() => {
		isDark = localStorage.getItem('theme') === 'dark';
	});
</script>

<div class="bg-background hero min-h-screen">
	<div class="hero-content">
		<div class="max-w-md">
			<h1 class="text-5xl font-bold">안녕, daisyUI</h1>
			<p class="text-foreground py-6 font-mono">구성 : TailwindCSS + SvelteKit + Bun</p>
			<label class="flex cursor-pointer gap-2">
				<RiSunLine size="20px"></RiSunLine>
				<input
					type="checkbox"
					bind:checked={isDark}
					data-toggle-theme="light,dark"
					class="theme-controller toggle"
				/>
				<RiMoonLine size="20px"></RiMoonLine>
			</label>
		</div>
	</div>
</div>

<div class="flex p-2">
	<div class="size-16 border">size-16</div>
	<div class="size-20 border">size-20</div>
	<div class="size-24 border">size-24</div>
	<div class="size-32 border">size-32</div>
	<div class="size-40 border">size-40</div>
</div>
