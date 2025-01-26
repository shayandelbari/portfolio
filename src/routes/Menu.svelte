<script lang="ts">
	import { onMount } from 'svelte';
	import ToggleTheme from '$lib/components/toggleTheme.svelte';
	import Bars_3 from '$lib/icons/bars-3.svelte';
	import { fade, fly } from 'svelte/transition';
	import Github from '$lib/icons/github.svelte';
	import Resume from '$lib/data/Resume.pdf';
	import Email from '$lib/icons/email.svelte';
	import Linkedin from '$lib/icons/linkedin.svelte';

	let menuItems = $state([
		// { name: 'About', link: '#about', isActive: false },
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
		<a href="/" onclick={handleClick}><strong>Shayan</strong> Delbari</a>
		<div class="flex space-x-4">
			<ul class="hidden items-center space-x-4 md:flex">
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
		</div>
		<div class="flex flex-row items-center space-x-4">
			<ToggleTheme />
			<div class="hidden flex-row items-center space-x-4 md:flex">
				<a href="mailto:shayan.32.delbari@gmail.com"
					><Email class="fill-gray-900 opacity-50 hover:opacity-100 dark:fill-gray-100" /></a
				>
				<a href="https://www.github.com/shayandelbari"
					><Github class="fill-gray-900 opacity-50 hover:opacity-100 dark:fill-gray-100" /></a
				>
				<a href="https://linkedin.com/in/shayandelbari"
					><Linkedin class="fill-gray-900 opacity-50 hover:opacity-100 dark:fill-gray-100" /></a
				>
				<a href={Resume} class="rounded bg-primary/70 px-2 py-1 text-white hover:bg-primary"
					>Resume</a
				>
			</div>
			<button
				aria-label="Toggle Menu"
				onclick={handleMobileMenu}
				class="flex rounded border border-gray-100 bg-white p-1 dark:border-gray-900 dark:bg-black md:hidden"
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
			class="absolute right-0 flex h-screen w-fit flex-col border-l border-gray-100 bg-white dark:border-gray-900 dark:bg-black"
		>
			<ul class="mt-4 flex flex-col space-y-4 py-2">
				{#each menuItems as item}
					<li class="px-8">
						<a href={item.link} onclick={handleClick} class="hover:text-primary">
							{item.name}
						</a>
					</li>
				{/each}
				<hr class="border-t border-gray-900/10 dark:border-gray-100/30" />
				<div class="flex flex-row items-center space-x-4 px-8">
					<a href="mailto:shayan.32.delbari@gmail.com"
						><Email class="fill-gray-900 opacity-50 hover:opacity-100 dark:fill-gray-100" /></a
					>
					<a href="https://www.github.com/shayandelbari"
						><Github class="fill-gray-900 opacity-50 hover:opacity-100 dark:fill-gray-100" /></a
					>
					<a href="https://linkedin.com/in/shayandelbari"
						><Linkedin class="fill-gray-900 opacity-50 hover:opacity-100 dark:fill-gray-100" /></a
					>
				</div>
				<hr class="border-t border-gray-900/10 dark:border-gray-100/30" />
				<a href={Resume} class="mx-8 rounded bg-primary/70 px-2 py-1 text-white hover:bg-primary"
					>Resume</a
				>
			</ul>
		</div>
	</div>
{/if}
