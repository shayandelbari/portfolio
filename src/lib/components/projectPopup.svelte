<script lang="ts">
	import type { Project } from '$lib/data/projects';
	import X from '$lib/icons/x.svelte';
	import { fade, scale } from 'svelte/transition';

	let { project, show = $bindable() }: { project: Project; show: boolean } = $props();

	const closePopup = () => {
		show = false;
		document.documentElement.classList.remove('overflow-hidden');
	};
</script>

<svelte:window
	onkeydown={(e) => {
		if (e.key == 'Escape') closePopup();
	}}
/>
<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_static_element_interactions -->
<div
	transition:fade={{ duration: 300 }}
	class="fixed left-0 top-0 z-20 mx-auto my-auto flex h-screen w-screen bg-white/70 dark:bg-black/70"
	onclick={closePopup}
>
	<div transition:scale={{ duration: 300 }} class="flex flex-col overflow-auto">
		<div class="h-1/5"></div>
		<div
			onclick={(e) => {
				e.stopPropagation();
			}}
			class="m-auto flex h-screen w-full flex-col rounded-md bg-white shadow-xl dark:bg-black sm:h-fit sm:w-3/4"
		>
			<div
				class="sticky top-0 flex min-h-[8vh] flex-row items-center justify-between bg-white p-4 dark:bg-black"
			>
				<h1>{project.name}</h1>
				<button onclick={closePopup}><X class="stroke-black dark:stroke-white" /></button>
			</div>
			<img src={project.image.src} alt={project.image.alt} />
			<p>{@html project.description}</p>
		</div>
		<div class="h-1/5"></div>
	</div>
</div>
