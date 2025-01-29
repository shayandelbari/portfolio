<script>
	import { page } from '$app/state';
</script>

<div class="flex h-[90vh] w-screen flex-col items-center justify-center">
	<h1 class="m-3 text-8xl font-thin text-text-secondary">{page.status}</h1>
	<p>{page.error?.message}</p>
	<a href="/" class="fixed bottom-4 text-primary">Go to Home Page</a>
</div>
