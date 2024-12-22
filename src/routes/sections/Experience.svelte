<script lang="ts">
	import ExperienceCard from '$lib/components/experienceCard.svelte';
	import experiences from '$lib/data/experience';
	const length = experiences.length;
</script>

<h1 class="mt-5 text-2xl font-semibold">My Work Experience</h1>
<p class="mt-3">In this page I will be listing my work experiences</p>

<div class=" mx-auto flex w-fit flex-col">
	{#each experiences as experience, index}
		<ExperienceCard {experience} {index} {length} />
	{/each}
</div>
