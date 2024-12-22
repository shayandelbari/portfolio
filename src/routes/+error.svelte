<script>
	import { page } from '$app/state';
</script>

<div class="flex h-[90vh] w-screen flex-col items-center justify-center">
	<h1 class="m-3 text-8xl font-thin text-gray-600">{page.status}</h1>
	<p>{page.error?.message}</p>
</div>
