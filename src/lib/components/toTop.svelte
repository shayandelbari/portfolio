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
	class="fixed bottom-5 right-5 h-fit w-fit rounded-full bg-black p-2 duration-300 dark:bg-white"
	class:translate-x-0={showButton}
	class:translate-x-16={!showButton}
>
	<Top class="stroke-white dark:stroke-black" />
</button>
