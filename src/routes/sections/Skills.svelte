<script lang="ts">
	import skills from '$lib/data/skills';
</script>

<h1 class="mb-5 text-3xl font-semibold">Skills</h1>

<div class="flex flex-wrap gap-4">
	{#each skills as skill}
		<span class="h-auto w-auto select-none rounded-md border border-foreground px-2 py-1 font-mono"
			>{skill.name}</span
		>
	{/each}
</div>
