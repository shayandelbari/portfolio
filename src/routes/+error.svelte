<script>
	import { page } from '$app/state';
	import { Button } from '$lib/components/ui/button';
</script>

<div class="flex h-[90vh] w-screen flex-col items-center justify-center">
	<h1 class="m-3 text-8xl font-thin text-secondary-foreground">{page.status}</h1>
	<p>{page.error?.message}</p>
	<Button href="/" class="fixed bottom-4 text-primary">Go to Home Page</Button>
</div>
