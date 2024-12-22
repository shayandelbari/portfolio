<script lang="ts">
	import type { Experience } from '$lib/data/experience';
	let { index, length, experience }: { index: number; length: number; experience: Experience } =
		$props();
</script>

<div class="relative flex w-fit flex-row">
	<div
		class="absolute flex h-full w-1 bg-black dark:bg-white
		{index == 0 ? 'rounded-t-full' : index == length - 1 ? 'rounded-b-full' : 'rounded-none'}"
	></div>
	<div class="flex h-fit w-auto flex-col p-4">
		<div class="flex flex-row">
			<span
				class="absolute -start-2 flex h-5 w-5 rounded-full border-4 border-white bg-primary dark:border-black"
			></span>
			<div class="flex font-bold">{experience.company}</div>
		</div>
		<div
			class="mt-2 h-fit w-fit rounded-md bg-black p-1 font-semibold text-white dark:bg-white dark:text-black"
		>
			{experience.position}
		</div>
		<p class="mt-2 max-w-prose">{@html experience.description}</p>
	</div>
</div>
