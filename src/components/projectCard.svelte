<script lang="ts">
	import type { Project } from '$lib/projects';

	let { project }: { project: Project } = $props();
	let show: boolean = $state(false);

	const togglePopup = () => {
		show = !show;
		if (show) {
			document.documentElement.classList.add('overflow-hidden');
		} else {
			document.documentElement.classList.remove('overflow-hidden');
		}
	};

	const onkeydown = (e: KeyboardEvent) => {
		if (e.key == 'Escape') {
			show = false;
			document.documentElement.classList.remove('overflow-hidden');
		}
	};
</script>

<div class="h-auto w-auto rounded-md border-[1px] border-black px-2 py-1 dark:border-white">
	<p>{project.name}</p>
	<p>{@html project.description}</p>
	<button onclick={togglePopup}>show pop up</button>
</div>

<svelte:window {onkeydown} />
<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_static_element_interactions -->
<div
	class:hidden={!show}
	class:fade-in={show}
	class:fade-out={!show}
	class="fixed left-0 top-0 z-20 mx-auto my-auto flex h-screen w-screen bg-white/70 dark:bg-black/70"
	onclick={togglePopup}
>
	<div
		class:zoom-in={show}
		class:zoom-out={!show}
		onclick={(e) => {
			e.stopPropagation();
		}}
		class="m-auto flex h-3/4 w-3/4 flex-col overflow-auto rounded-md bg-white shadow-xl dark:bg-black"
	>
		<div class="sticky top-0 flex h-fit flex-row justify-between bg-white p-4 dark:bg-black">
			<h1>{project.name}</h1>
			<button onclick={togglePopup}>&times;</button>
		</div>
		<img src={project.image.src} alt={project.image.alt} />
		{project.description}
	</div>
</div>

<style>
	/* Fade-in and fade-out animations */
	.fade-in {
		animation: fade-in 0.3s ease-out forwards;
	}

	.fade-out {
		animation: fade-out 0.3s ease-in forwards;
	}

	@keyframes fade-in {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes fade-out {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}

	/* Zoom-in and zoom-out animations */
	.zoom-in {
		animation: zoom-in 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
	}

	.zoom-out {
		animation: zoom-out 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
	}

	@keyframes zoom-in {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}

	@keyframes zoom-out {
		from {
			transform: scale(1);
		}
		to {
			transform: scale(0.95);
		}
	}
</style>
