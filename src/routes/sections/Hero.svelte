<script lang="ts">
	import image from '$lib/images/profile.png?enhanced';
</script>

<div class="flex min-h-[90vh]">
	<div class="mx-[6vh] flex w-full flex-row justify-between">
		<div class="my-auto">
			<h1 class="font-mono text-5xl font-black">
				Hi there,<br />my name is Shayan
			</h1>
			<p class="mt-5 max-w-prose">
				I have a passion for creating beautiful and functional designs, both in code and graphics.
				With a background in both development and design, I bring a unique perspective to every
				project I work on.
			</p>
		</div>
		<div class="my-auto">
			<enhanced:img src={image} alt="An alt text" class="my-auto h-fit w-[40vh]" />
		</div>
	</div>
</div>
