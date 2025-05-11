<script lang="ts">
  import { Sun, Moon } from '$lib/icons';
  import { Button } from '$lib/components/ui/button';

	let dark: boolean = $state(true);

	const toggleTheme = () => {
		document.documentElement.classList.toggle('dark');
		dark = !dark;
	};
</script>

<Button
	aria-label="Toggle theme"
	onclick={toggleTheme}
  size="icon"
  variant="outline"
>
	{#if dark}
		<Sun class="stroke-white" />
	{:else}
		<Moon class="stroke-black" />
	{/if}
</Button>
