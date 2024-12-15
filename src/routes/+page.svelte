<script lang="ts">
	import About from './sections/About.svelte';
	import Contact from './sections/Contact.svelte';
	import Experience from './sections/Experience.svelte';
	import Hero from './sections/Hero.svelte';
	import Projects from './sections/Projects.svelte';
	import Skills from './sections/Skills.svelte';
</script>

<main>
	<section id="hero">
		<Hero />
	</section>

	<section id="about" class="px-5">
		<About />
	</section>

	<section id="experience" class="px-5">
		<Experience />
	</section>

	<section id="skills" class="px-5">
		<Skills />
	</section>

	<section id="projects" class="px-5">
		<Projects />
	</section>

	<section id="contact" class="px-5">
		<Contact />
	</section>
</main>
