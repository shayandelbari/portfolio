<script>
	import Github from '$lib/icons/github.svelte';
	import Linkedin from '$lib/icons/linkedin.svelte';
	import Email from '$lib/icons/email.svelte';
	import Resume from '$lib/data/Resume.pdf';
</script>

<div
	class="w-full rounded border border-gray-100 bg-gray-100/50 p-6 dark:border-gray-900 dark:bg-gray-900/50"
>
	<h1 class="text-3xl font-black">Contact me</h1>
	<div class="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
		<p>
			If you have any interesting idea for a project and want to collaborate feel free to email me
		</p>
		<div>
			<h3 class="font-mono">Download my resume</h3>
			<a
				href={Resume}
				class="mt-1 flex w-fit rounded bg-primary/70 px-2 py-1 text-white hover:bg-primary"
				>Resume</a
			>
		</div>
		<div>
			<h3>My socials</h3>
			<div class="mt-1 flex flex-row space-x-4">
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
		</div>
	</div>
</div>
