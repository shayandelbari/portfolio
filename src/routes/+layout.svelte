<script lang="ts">
	import '../app.css';
	import ToTop from '$lib/components/toTop.svelte';
	import Menu from './Menu.svelte';

	let { children } = $props();
</script>

<Menu />

<main>{@render children()}</main>

<ToTop showAt={100} />
