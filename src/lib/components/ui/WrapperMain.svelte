<script lang="ts">
	const { children } = $props();
</script>

<div id="wrapper-main" class="w-full p-4">{@render children()}</div>

<style>
	#wrapper-main :global(h1) {
		font-size: 2rem;
		font-weight: 600;
	}
</style>
