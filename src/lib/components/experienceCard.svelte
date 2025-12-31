<script lang="ts">
	import type { Experience } from '$lib/data/experience';

	let { index, length, experience }: { index: number; length: number; experience: Experience } =
		$props();
</script>

<div class="relative flex w-fit flex-row">
	<div
		class="bg-foreground absolute flex h-full w-1
		{length == 1
			? 'rounded-full'
			: index == 0
				? 'rounded-t-full'
				: index == length - 1
					? 'rounded-b-full'
					: 'rounded-none'}"
	></div>
	<div class="flex h-fit w-auto flex-col p-4">
		<div class="flex flex-row">
			<span
				class="border-background bg-primary absolute -start-2 flex h-5 w-5 rounded-full border-4"
			></span>
			<div class="flex font-bold">{experience.position}</div>
		</div>
		<div class="mt-2 flex w-full flex-row items-center justify-between">
			<div class="bg-foreground text-background h-fit w-fit rounded-md px-2 py-1 font-semibold">
				{experience.company}
			</div>
			<div>{experience.start} - {experience.end}</div>
		</div>
		<article class="prose prose-gray prose-li:text-foreground/80 dark:prose-invert mt-2">
			{@html experience.description}
		</article>
	</div>
</div>
