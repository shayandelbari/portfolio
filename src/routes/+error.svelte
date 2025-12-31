<script>
	import { page } from '$app/state';
	import { Button } from '$lib/components/ui/button';
</script>

<div class="flex h-[90vh] w-screen flex-col items-center justify-center">
	<h1 class="text-secondary-foreground m-3 text-8xl font-thin">{page.status}</h1>
	<p>{page.error?.message}</p>
	<Button href="/" class="text-primary fixed bottom-4">Go to Home Page</Button>
</div>
