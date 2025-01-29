<script lang="ts">
	import About from './sections/About.svelte';
	import Contact from './sections/Contact.svelte';
	import Experience from './sections/Experience.svelte';
	import Hero from './sections/Hero.svelte';
	import Projects from './sections/Projects.svelte';
	import Skills from './sections/Skills.svelte';
</script>

<svelte:head>
	<title>Shayan Delbari Portfolio</title>
	<meta name="description" content="This website is Shayan Delbari's portfolio" />
</svelte:head>

<section id="hero" class="">
	<Hero />
</section>

<section id="about" class="mt-20 lg:mt-40">
	<About />
</section>

<section id="experience" class="mt-20 lg:mt-40">
	<Experience />
</section>

<section id="skills" class="mt-20 lg:mt-40">
	<Skills />
</section>

<section id="projects" class="mt-20 lg:mt-40">
	<Projects />
</section>

<section id="contact" class="mt-20 lg:mt-40">
	<Contact />
</section>

<style>
	section {
		@apply px-5 md:px-20 lg:px-40;
	}
</style>
