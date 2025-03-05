<script lang="ts">
	import { cn } from '$lib/helpers/utils';
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
		class?: string;
	}

	let { children, class: className }: Props = $props();
</script>

<span class={cn('badge', className)}>{@render children()}</span>
