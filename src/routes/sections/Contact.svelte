<script>
	import { Socials } from '$lib/components';
	import { Button } from '$lib/components/ui/button';
	import { Resume } from '$lib/data';
</script>

<div class="border-border bg-secondary/50 w-full rounded-md border p-6">
	<div class="grid grid-cols-1 items-center gap-4 md:grid-cols-3">
		<h1 class="text-3xl font-semibold">Contact me</h1>
		<div>
			<Button size="sm" href={Resume}>Download my resume</Button>
		</div>
		<div>
			<div class="mt-1 flex flex-row space-x-4">
				<Socials />
			</div>
		</div>
	</div>
	<div class="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-sm text-muted-foreground">
		<a href="tel:+14389302001" class="hover:underline">+1 (438) 930-2001</a>
		<a href="mailto:shayandelbari0@gmail.com" class="hover:underline">shayandelbari0@gmail.com</a>
		<span>Montreal, QC</span>
	</div>
</div>
