<script lang="ts">
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
	class="h-auto w-auto overflow-clip rounded-lg border border-gray-100 bg-opacity-40 p-4 drop-shadow-md dark:border-gray-900"
>
	<h3 class="text-center text-2xl font-bold">{project.name}</h3>
	<img
		src={project.thumbnail.src}
		alt={project.thumbnail.alt}
		class="mt-4 overflow-clip rounded-md border border-gray-100 drop-shadow-md dark:border-gray-900"
	/>
	<p class="mt-2 text-text-secondary">{@html project.shortDescription}</p>
	<div class="mt-1 flex flex-row space-x-2">
		{#each project.skills as skill}
			<span
				class="select-none rounded-full border border-primary px-2 font-mono text-base text-primary"
				>{skill}</span
			>
		{/each}
	</div>
	<button
		onclick={openPopup}
		aria-label="Show popup"
		class="mt-4 w-full items-center rounded-md border border-primary bg-primary/60 p-2 drop-shadow-md hover:bg-primary"
	>
		Show more
	</button>
</div>

{#if show && popup}
	<ProjectPopup {project} bind:show />
{/if}
