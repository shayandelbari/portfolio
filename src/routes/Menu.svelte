<script lang="ts">
	import { onMount } from 'svelte';
	import ToggleTheme from '$lib/components/toggleTheme.svelte';
	import Bars_3 from '$lib/icons/bars-3.svelte';
	import { fade, fly } from 'svelte/transition';

	let menuItems = $state([
		{ name: 'About', link: '#about', isActive: false },
		{ name: 'Experience', link: '#experience', isActive: false },
		{ name: 'Skills', link: '#skills', isActive: false },
		{ name: 'Projects', link: '#projects', isActive: false },
		{ name: 'Contact', link: '#contact', isActive: false }
	]);

	const offset = 90; // Offset for scrolling (e.g., fixed header height)
	let showMobileMenu = $state(false);

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
		} else {
			window.scrollTo({
				top: 0,
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

	function handleMobileMenu() {
		showMobileMenu = !showMobileMenu;
		document.documentElement.classList.toggle('overflow-hidden');
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
				<a href="/" onclick={handleClick}><strong>Shayan</strong> Delbari</a>
			</li>
		</ul>
		<div class="flex space-x-4">
			<ToggleTheme />
			<ul class="hidden items-center space-x-4 sm:flex">
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
			<button
				aria-label="Toggle Menu"
				onclick={handleMobileMenu}
				class="flex rounded border border-gray-100 bg-white p-1 dark:border-gray-900 dark:bg-black sm:hidden"
				><Bars_3 class=" stroke-black dark:stroke-white" /></button
			>
		</div>
	</nav>
</div>

{#if showMobileMenu}
	<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_static_element_interactions -->
	<div
		transition:fade={{ duration: 100 }}
		class="fixed top-0 z-30 h-screen w-screen bg-white/50 dark:bg-black/50"
		onclick={handleMobileMenu}
	>
		<div
			transition:fly={{ duration: 300, x: 300 }}
			onclick={(e) => {
				e.stopPropagation();
			}}
			class="absolute right-0 flex h-screen w-fit border-l border-gray-100 bg-white dark:border-gray-900 dark:bg-black"
		>
			<ul class="flex flex-col space-y-2 py-4">
				{#each menuItems as item}
					<li class="px-8 py-1">
						<a href={item.link} onclick={handleClick} class="hover:text-primary">
							{item.name}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
{/if}
