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
	class="border-gray-100 dark:border-gray-900 h-fit w-fit rounded border bg-white p-1 hover:shadow-md dark:bg-black dark:shadow-white/10"
>
	{#if dark}
		<Sun class="stroke-white" />
	{:else}
		<Moon class="stroke-black" />
	{/if}
</button>
