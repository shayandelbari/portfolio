<script lang="ts">
	import { Top } from '$lib/icons';

	let { showAt }: { showAt: number } = $props();

	const gotoTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	let scrollHeight: number = $state(0);
	const showButton = $derived(scrollHeight > showAt);
</script>

<svelte:window bind:scrollY={scrollHeight} />

<button
	onclick={gotoTop}
	aria-label="Scroll to top"
	class="bg-foreground fixed right-5 bottom-5 h-fit w-fit rounded-full p-2 duration-300"
	class:translate-x-0={showButton}
	class:translate-x-16={!showButton}
>
	<Top class="stroke-background" />
</button>
