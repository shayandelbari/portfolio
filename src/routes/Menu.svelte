<script lang="ts">
	import { onMount } from 'svelte';
	import { ToggleTheme } from '$lib/components';
	import { fade, fly } from 'svelte/transition';
	import { Resume } from '$lib/data';
	import { Bars_3} from '$lib/icons';
	import { Button } from '$lib/components/ui/button';
	import {Socials} from '$lib/components';
	import { Separator } from '$lib/components/ui/separator';

	const menuItems = [
		{ name: 'About', link: '#about' },
		{ name: 'Experience', link: '#experience' },
		{ name: 'Skills', link: '#skills' },
		{ name: 'Projects', link: '#projects' },
		{ name: 'Contact', link: '#contact' }
	];

	const offset = 90; // Offset for scrolling (e.g., fixed header height)
	let showMobileMenu = $state(false);
	let activeItem = $state('');

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
			activeItem = `#${targetId}`;
		} else {
			window.scrollTo({
				top: 0,
				behavior: 'smooth'
			});
			activeItem = '';
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
					activeItem = `#${targetId}`;
				} else if (!entry.isIntersecting) {
					activeItem = '';
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
		class="grid h-auto min-h-[10vh] w-full grid-cols-3 items-center border-b border-border bg-background/70 p-5 shadow-lg shadow-black/5 backdrop-blur-md"
	>
		<a href="/" onclick={handleClick}><strong>Shayan</strong> Delbari</a>
		<div class="flex items-center justify-center space-x-4">
			<ul class="hidden space-x-4 md:flex">
				{#each menuItems as item}
					<li>
						<a
							href={item.link}
							onclick={handleClick}
							class="transition-colors duration-200 hover:text-primary
                {activeItem === item.link ? 'font-bold text-primary' : ''}"
						>
							{item.name}
						</a>
					</li>
				{/each}
			</ul>
		</div>
		<div class="flex flex-row items-center justify-end space-x-4">
			<ToggleTheme />
			<div class="hidden flex-row items-center space-x-4 md:flex">
        <Socials />
				<Button href={Resume} size="sm">Resume</Button>
			</div>
			<Button
				aria-label="Toggle Menu"
				onclick={handleMobileMenu}
        size="icon"
        variant="outline"
				><Bars_3 class="stroke-black dark:stroke-white" /></Button
			>
		</div>
	</nav>
</div>

{#if showMobileMenu}
	<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_static_element_interactions -->
	<div
		transition:fade={{ duration: 100 }}
		class="fixed top-0 z-30 h-screen w-screen bg-background"
		onclick={handleMobileMenu}
	>
		<div
			transition:fly={{ duration: 300, x: 300 }}
			onclick={(e) => {
				e.stopPropagation();
			}}
			class="absolute right-0 flex h-screen w-fit flex-col border-l border-border bg-background"
		>
			<ul class="mt-4 flex flex-col space-y-4 py-2">
				{#each menuItems as item}
					<li class="px-8">
						<a href={item.link} onclick={handleClick} class="hover:text-primary">
							{item.name}
						</a>
					</li>
				{/each}
        <Separator />
				<div class="flex flex-row items-center space-x-4 px-8">
          <Socials />
				</div>
        <Separator />
				<Button href={Resume} class="mx-8">
          Resume
        </Button>
			</ul>
		</div>
	</div>
{/if}
