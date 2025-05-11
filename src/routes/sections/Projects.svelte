<script lang="ts">
	import { ProjectCard } from '$lib/components';
	import { Button } from '$lib/components/ui/button';
	import projects from '$lib/data/projects';
</script>

<h1 class="mb-5 text-3xl font-semibold">Projects</h1>

<div class="mt-3 grid w-fit grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
	{#each projects as project}
		{#if project.firstPage}
			<ProjectCard {project} />
		{/if}
	{/each}
</div>
<Button
	href="https://github.com/shayandelbari?tab=repositories&q=topic:portfolio"
	target="_blank"
	class="mt-5 w-full"
>
	For more projects visit my GitHub account
</Button>
