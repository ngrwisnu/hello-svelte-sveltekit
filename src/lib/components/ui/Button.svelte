<script lang="ts">
	import { cn } from '$lib/helpers/utils';
	import type { ClassValue } from 'clsx';
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
		class?: ClassValue;
		onclick?: () => void;
	}

	let { children, onclick, ...props }: Props = $props();
</script>

<button class={cn('btn', props.class)} {onclick}>{@render children()}</button>
