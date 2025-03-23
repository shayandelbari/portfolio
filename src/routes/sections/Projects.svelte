<script lang="ts">
	import ProjectCard from '$lib/components/projectCard.svelte';
	import projects from '$lib/data/projects';
	import Github from '$lib/icons/github.svelte';
</script>

<h1 class="mb-5 text-2xl font-semibold">Projects</h1>

<div class="mt-3 grid w-fit grid-cols-1 items-center gap-4 sm:grid-cols-2 md:grid-cols-3">
	{#each projects as project}
		{#if project.isFirstPage}<ProjectCard {project} />{/if}
	{/each}
</div>
<a href="https://www.github.com/shayandelbari">
	<button class="mt-5 w-full rounded-sm border border-primary bg-primary/60 p-2 hover:bg-primary"
		>For more projects visit my GitHub account
	</button>
</a>
