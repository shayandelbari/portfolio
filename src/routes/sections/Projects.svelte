<script lang="ts">
	import ProjectCard from '../../components/projectCard.svelte';
	import projects from '$lib/projects';
</script>

<h1 class="mt-5 text-2xl font-semibold">Projects</h1>
<p class="mt-3">In this page I will be listing my projects</p>

<div class="mx-auto mt-3 grid w-fit grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
	{#each projects as project}
		<ProjectCard {project} />
	{/each}
</div>
