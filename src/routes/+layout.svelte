<script lang="ts">
	import '../app.css';
	import { ToTop } from '$lib/components';
	import Menu from './Menu.svelte';

	let { children } = $props();

	// Vercel Web Analytics and Speed Insights
	import { dev } from '$app/environment';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

	injectAnalytics({ mode: dev ? 'development' : 'production' });
	injectSpeedInsights();
</script>

<Menu />

<main>{@render children()}</main>

<ToTop showAt={100} />
