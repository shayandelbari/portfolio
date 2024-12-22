<script lang="ts">
	import type { Skill } from '$lib/skills';
	let { skill }: { skill: Skill } = $props();
</script>

<div
	class="h-auto w-auto select-none rounded-md border-[1px] border-black px-2 py-1 font-mono dark:border-white"
>
	{skill.name}
</div>
