<script lang="ts">
	import SkillCard from '../../components/skillCard.svelte';
	import skills from '$lib/skills';
</script>

<h1 class="mt-5 text-2xl font-semibold">Skills</h1>
<p class="mt-3">In this page I will be listing my skills</p>

<div class="flex w-full space-x-3">
	{#each skills as skill}
		<SkillCard {skill} />
	{/each}
</div>
