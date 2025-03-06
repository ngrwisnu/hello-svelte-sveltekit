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

<button class={cn('btn', props.class)}>{@render children()}</button>
