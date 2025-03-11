<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		title?: Snippet;
		children: Snippet;
	}

	const { title, children }: Props = $props();
</script>

<div id="wrapper-main" class="w-full p-4">
	{#if title}
		<div class="mb-8 w-full">
			{@render title?.()}
		</div>
	{/if}

	{@render children()}
</div>

<style>
	#wrapper-main :global(h1) {
		font-size: 2rem;
		font-weight: 600;
	}
</style>
