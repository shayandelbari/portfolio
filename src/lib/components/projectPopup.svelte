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
	class="fixed left-0 top-0 z-20 mx-auto my-auto flex h-screen w-screen items-center justify-center bg-white/70 dark:bg-black/70"
	onclick={closePopup}
>
	<div transition:scale={{ duration: 300 }} class="overflow-auto">
		<div
			onclick={(e) => {
				e.stopPropagation();
			}}
			class="m-auto h-screen w-screen overflow-clip rounded-md border border-gray-100 bg-white shadow-xl dark:border-gray-900 dark:bg-black sm:h-fit sm:w-fit"
		>
			<div
				class="sticky top-0 flex min-h-[10vh] flex-row items-center justify-between border-b border-gray-100 bg-white p-4 dark:border-gray-900 dark:bg-black"
			>
				<h3>{project.name}</h3>
				<button onclick={closePopup}><X class="stroke-black dark:stroke-white" /></button>
			</div>
			<div class="w-fit lg:flex lg:flex-row lg:items-center">
				<div class="p-4">
					<img
						src={project.image.src}
						alt={project.image.alt}
						class="h-[80vh] w-full object-cover"
					/>
				</div>
				<div class="items-center p-4">
					<article class="prose prose-neutral max-w-prose dark:prose-invert">
						{@html project.description}
					</article>
				</div>
			</div>
		</div>
	</div>
</div>
