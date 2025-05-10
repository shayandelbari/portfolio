<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import type { Project } from '$lib/data/projects';
	import { Github, X, Website } from '$lib/icons';
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
	class="fixed left-0 top-0 z-20 flex h-screen w-screen items-center justify-center bg-background/70 backdrop-blur"
	onclick={closePopup}
>
	<div
		transition:scale={{ duration: 300 }}
		onclick={(e) => e.stopPropagation()}
		class="flex h-full w-full max-w-6xl flex-col overflow-clip rounded-lg border border-border bg-background shadow-xl sm:h-4/5 sm:w-[90%]"
	>
		<div
			class="sticky top-0 z-10 flex h-[10%] flex-row items-center justify-between border-b border-border bg-background p-6"
		>
			<h3 class="text-2xl font-bold">{project.name}</h3>
			<Button size="icon" variant="outline" onclick={closePopup}>
				<X class="stroke-black dark:stroke-white" />
			</Button>
		</div>

		<div class="flex h-[90%] flex-col divide-y lg:flex-row lg:divide-x lg:divide-y-0">
			<div class="w-full p-6 lg:w-1/3">
				<!-- Left side panel - fixed 1/3 width -->
				<div class="space-y-6">
					<p class="prose prose-neutral max-w-none dark:prose-invert">
						{project.shortDescription}
					</p>
					<div class="flex gap-4 pt-2">
						<Button size="icon" variant="outline" href={project.url} target="_blank">
							<Github class="fill-black dark:fill-white" />
						</Button>
						{#if project.website}
							<Button size="icon" variant="outline" href={project.website} target="_blank">
								<Website class="stroke-black dark:stroke-white" />
							</Button>
						{/if}
					</div>
				</div>
			</div>
			<div class="w-full overflow-y-auto p-6 lg:w-2/3">
				<!-- Right side panel - 2/3 width with overflow -->
				<article class="prose prose-neutral max-w-none dark:prose-invert">
					{@html project.description}
				</article>
			</div>
		</div>
	</div>
</div>
