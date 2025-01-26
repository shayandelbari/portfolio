<script lang="ts">
	import ProjectCard from '$lib/components/projectCard.svelte';
	import projects from '$lib/data/projects';
</script>

<h1 class="mt-5 text-2xl font-semibold">Projects</h1>

<div class="mt-3 grid w-fit grid-cols-1 items-center gap-4 sm:grid-cols-2 md:grid-cols-3">
	{#each projects as project}
		{#if project.isFirstPage}<ProjectCard {project} />{/if}
	{/each}
</div>
