<script lang="ts">
	import { cn } from '$lib/helpers/utils';
	import type { ClassValue } from 'clsx';
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
		class?: ClassValue;
	}

	let { children, ...props }: Props = $props();
</script>

<span class={cn('badge', props.class)}>{@render children()}</span>
