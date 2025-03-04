<script lang="ts">
	const { title, children } = $props();
</script>

<div id="wrapper-main" class="w-full p-4">
	<div class="mb-8 w-full">
		{@render title()}
	</div>

	{@render children()}
</div>

<style>
	#wrapper-main :global(h1) {
		font-size: 2rem;
		font-weight: 600;
	}
</style>
