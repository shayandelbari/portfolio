<script lang="ts">
	import { Socials, ToggleTheme } from '$lib/components';
	import { Button } from '$lib/components/ui/button';
	import { Separator } from '$lib/components/ui/separator';
	import { Resume } from '$lib/data';
	import { Bars_3 } from '$lib/icons';
	import { scrollToSection } from '$lib/utils/scrollToSection';
	import { useSectionObserver } from '$lib/utils/useSectionObserver';
	import { fade, fly } from 'svelte/transition';

	export const menuItems = [
		{ name: 'About', id: 'about' },
		{ name: 'Experience', id: 'experience' },
		{ name: 'Skills', id: 'skills' },
		{ name: 'Projects', id: 'projects' },
		{ name: 'Contact', id: 'contact' }
	];

	const offset = 90;
	let activeId = $state('');
	let showMobileMenu = $state(false);

	useSectionObserver(
		menuItems.map((i) => i.id),
		(id) => (activeId = id),
		offset
	);

	function handleClick(id: string) {
		scrollToSection(id, offset);
		activeId = id;
		if (showMobileMenu) toggleMobileMenu();
	}

	function toggleMobileMenu() {
		showMobileMenu = !showMobileMenu;
		document.documentElement.classList.toggle('overflow-hidden');
	}
</script>

<div class="sticky top-0 z-10">
	<nav
		class="border-border bg-background/70 grid h-auto min-h-[10vh] w-full grid-cols-3 items-center border-b p-5 shadow-lg shadow-black/5 backdrop-blur-md"
	>
		<a
			href="/"
			onclick={(e) => {
				e.preventDefault();
				window.scrollTo({ top: 0, behavior: 'smooth' });
				activeId = '';
				if (showMobileMenu) toggleMobileMenu();
			}}
		>
			<strong>Shayan</strong> Delbari
		</a>
		<div class="flex items-center justify-center space-x-4">
			<ul class="hidden space-x-4 lg:flex">
				{#each menuItems as item}
					<li>
						<a
							href={item.id}
							onclick={(e) => {
								e.preventDefault();
								handleClick(item.id);
							}}
							class="hover:text-primary transition-colors duration-200
                			{activeId === item.id ? 'text-primary font-bold' : ''}"
						>
							{item.name}
						</a>
					</li>
				{/each}
			</ul>
		</div>
		<div class="flex flex-row items-center justify-end space-x-4">
			<ToggleTheme />
			<div class="hidden flex-row items-center space-x-4 lg:flex">
				<Socials />
				<Button href={Resume} size="sm">Resume</Button>
			</div>
			<Button
				aria-label="Toggle Menu"
				class="flex lg:hidden"
				onclick={toggleMobileMenu}
				size="icon"
				variant="outline"
			>
				<Bars_3 class="stroke-black dark:stroke-white" />
			</Button>
		</div>
	</nav>
</div>

{#if showMobileMenu}
	<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_static_element_interactions -->
	<div
		transition:fade={{ duration: 100 }}
		class="bg-background fixed top-0 z-30 h-screen w-screen"
		onclick={toggleMobileMenu}
	>
		<div
			transition:fly={{ duration: 300, x: 300 }}
			onclick={(e) => {
				e.stopPropagation();
			}}
			class="border-border bg-background absolute right-0 flex h-screen w-fit flex-col border-l"
		>
			<ul class="mt-4 flex flex-col space-y-4 py-2">
				{#each menuItems as item}
					<li class="px-8">
						<a
							href={item.id}
							onclick={(e) => {
								e.preventDefault();
								handleClick(item.id);
							}}
							class="hover:text-primary"
						>
							{item.name}
						</a>
					</li>
				{/each}
				<Separator />
				<div class="flex flex-row items-center space-x-4 px-8">
					<Socials />
				</div>
				<Separator />
				<Button href={Resume} class="mx-8">Resume</Button>
			</ul>
		</div>
	</div>
{/if}
