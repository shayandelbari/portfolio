<script lang="ts">
	import type { Project } from '$lib/projects';
	let { project }: { project: Project } = $props();
	let show: boolean = $state(true);

	const togglePopup = () => {
		show = !show;
		document.documentElement.classList.toggle('overflow-hidden');
	};
</script>

<div class="h-auto w-auto rounded-md border-[1px] border-black px-2 py-1 dark:border-white">
	<p>{project.name}</p>
	<p>{@html project.description}</p>
	<button onclick={togglePopup}>show pop up</button>
</div>

<button
	class:hidden={show}
	class="fixed left-0 top-0 z-20 mx-auto my-auto h-screen w-screen bg-white/50 backdrop-blur-md dark:bg-black/50"
	onclick={togglePopup}
>
	the popup
</button>
