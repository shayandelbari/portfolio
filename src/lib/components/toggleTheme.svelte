<script lang="ts">
	import Moon from '$lib/icons/moon.svelte';
	import Sun from '$lib/icons/sun.svelte';

	let dark: boolean = $state(true);

	const toggleTheme = () => {
		document.documentElement.classList.toggle('dark');
		dark = !dark;
	};
</script>

<button
	aria-label="Toggle theme"
	onclick={toggleTheme}
	class="h-fit w-fit rounded border border-black/30 p-1 hover:border-black hover:shadow-md dark:border-white/30 dark:shadow-white/20 dark:hover:border-white"
>
	{#if dark}
		<Sun class="stroke-white" />
	{:else}
		<Moon class="stroke-black" />
	{/if}
</button>
