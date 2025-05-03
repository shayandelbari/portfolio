<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import type { Project } from '$lib/data/projects';
	import { X } from '$lib/icons';
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
	class="fixed left-0 top-0 z-20 mx-auto my-auto flex h-screen w-screen items-center justify-center bg-background/70"
	onclick={closePopup}
>
	<div transition:scale={{ duration: 300 }} class="overflow-auto">
		<div
			onclick={(e) => {
				e.stopPropagation();
			}}
			class="m-auto h-screen w-screen overflow-clip rounded-md border border-border bg-background shadow-xl sm:h-fit sm:w-fit"
		>
			<div
				class="sticky top-0 flex min-h-[10vh] flex-row items-center justify-between border-b border-border bg-background p-4"
			>
				<h3>{project.name}</h3>
				<Button size="icon" variant="outline" onclick={closePopup}>
					<X class="stroke-black dark:stroke-white" />
				</Button>
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
					<article class="prose prose-neutral dark:prose-invert max-w-prose">
						{@html project.description}
					</article>
				</div>
			</div>
		</div>
	</div>
</div>
