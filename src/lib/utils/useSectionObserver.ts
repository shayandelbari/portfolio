import { onDestroy, onMount } from 'svelte';

export function useSectionObserver(ids: string[], onChange: (id: string) => void, offset = 0) {
	let observer: IntersectionObserver;

	onMount(() => {
		observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						onChange(entry.target.id);
					}
				}
			},
			{
				rootMargin: `-${offset}px 0px -60% 0px`,
				threshold: 0
			}
		);

		ids.forEach((id) => {
			const el = document.getElementById(id);
			if (el) observer.observe(el);
		});
	});

	onDestroy(() => {
		observer?.disconnect();
	});
}
