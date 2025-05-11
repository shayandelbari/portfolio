<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Badge } from '$lib/components/ui/badge';
	import type { Project } from '$lib/data/projects';
	import ProjectPopup from './projectPopup.svelte';
	import * as Card from '$lib/components/ui/card';

	let { project, popup = true }: { project: Project; popup?: boolean } = $props();
	let show: boolean = $state(false);

	const openPopup = () => {
		show = true;
		document.documentElement.classList.add('overflow-hidden');
	};
</script>

<Card.Root class="flex h-full flex-col">
	<Card.Header class="flex-row items-center justify-between gap-1">
		<Card.Title>{project.name}</Card.Title>
		<Badge variant="outline">{project.language}</Badge>
	</Card.Header>
	<Card.Content class="flex-grow">
		{#if project.thumbnail}
			<img src={project.thumbnail.src} alt={project.thumbnail.alt} class="mb-4 rounded-md" />
		{/if}
		<Card.Description class="line-clamp-3">{project.shortDescription}</Card.Description>
	</Card.Content>
	<Card.Footer class="mt-auto pt-4">
		<Button onclick={openPopup} class="w-full" aria-label="Show popup">Show more</Button>
	</Card.Footer>
</Card.Root>

{#if show && popup}
	<ProjectPopup {project} bind:show />
{/if}
