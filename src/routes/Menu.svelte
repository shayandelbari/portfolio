<script lang="ts">
	import { onMount } from 'svelte';
	import ToggleTheme from '$lib/components/toggleTheme.svelte';

	let menuItems = [
		{ name: 'About', link: '#about', isActive: false },
		{ name: 'Experience', link: '#experience', isActive: false },
		{ name: 'Skills', link: '#skills', isActive: false },
		{ name: 'Projects', link: '#projects', isActive: false },
		{ name: 'Contact', link: '#contact', isActive: false }
	];

	const offset = 70; // Offset for scrolling (e.g., fixed header height)

	function handleClick(event: MouseEvent): void {
		event.preventDefault(); // Prevent default link behavior

		const targetId = (event.currentTarget as HTMLAnchorElement).getAttribute('href')?.substring(1);
		const targetElement = document.getElementById(targetId!);

		if (targetElement) {
			const targetPosition = targetElement.offsetTop;
			const scrollPosition = targetPosition - offset; // Adjust scroll position by the offset

			window.scrollTo({
				top: scrollPosition,
				behavior: 'smooth'
			});
		}
	}

	function observeSections(): void {
		const observerOptions = {
			root: null, // Use the viewport as the root
			rootMargin: `-${offset}px 0px 0px 0px`, // Account for the header height
			threshold: 0.9 // Consider section active when 90% of it is in view
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				const targetId = entry.target.id;
				if (entry.isIntersecting) {
					// Set active state for the matching menu item
					menuItems = menuItems.map((item) => ({
						...item,
						isActive: item.link === `#${targetId}`
					}));
				}
			});
		}, observerOptions);

		// Observe all sections referenced by menu items
		menuItems.forEach(({ link }) => {
			const sectionId = link.substring(1); // Remove the '#' to get the section ID
			const section = document.getElementById(sectionId);
			if (section) {
				observer.observe(section);
			}
		});
	}

	onMount(() => {
		observeSections();
	});
</script>

<div class="sticky top-0 z-10">
	<nav
		class="flex h-auto min-h-[10vh] w-full flex-row items-center justify-between border-b border-b-gray-100 bg-white/70 p-5 bg-blend-lighten shadow-lg shadow-black/5 backdrop-blur-md dark:border-b-gray-900 dark:bg-black/70 dark:bg-blend-darken"
	>
		<ul>
			<li>
				<a href="/"><strong>Shayan</strong> Delbari</a>
			</li>
		</ul>
		<ul class="flex items-center space-x-4">
			<ToggleTheme />
			{#each menuItems as item}
				<li>
					<a
						href={item.link}
						onclick={handleClick}
						class="transition-colors duration-200 hover:text-primary
						{item.isActive ? 'font-bold text-primary' : ''}"
					>
						{item.name}
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</div>
