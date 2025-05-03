<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import type { Project } from '$lib/data/projects';
	import ProjectPopup from './projectPopup.svelte';

	let { project, popup = true }: { project: Project; popup?: boolean } = $props();
	let show: boolean = $state(false);

	const openPopup = () => {
		show = true;
		document.documentElement.classList.add('overflow-hidden');
	};
</script>

<div
	class="h-auto w-auto overflow-clip rounded-lg border border-border bg-opacity-40 p-4 drop-shadow-md"
>
	<h3 class="text-center text-2xl font-bold">{project.name}</h3>
	<img
		src={project.thumbnail.src}
		alt={project.thumbnail.alt}
		class="mt-4 overflow-clip rounded-md border border-border drop-shadow-md"
	/>
	<p class="mt-2 text-secondary-foreground">{project.shortDescription}</p>
	<div class="mt-1 flex flex-row space-x-2">
		{#each project.skills as skill}
			<span
				class="select-none rounded-full border border-primary px-2 font-mono text-base text-primary"
				>{skill}</span
			>
		{/each}
	</div>
	<Button onclick={openPopup} class="mt-3 w-full" aria-label="Show popup">Show more</Button>
</div>

{#if show && popup}
	<ProjectPopup {project} bind:show />
{/if}
