<script lang="ts">
	import { cn } from '$lib/helpers/utils';
	import type { Snippet } from 'svelte';
	import type { HTMLLabelAttributes } from 'svelte/elements';

	interface Props extends HTMLLabelAttributes {
		children: Snippet;
	}

	let { children, class: className, ...props }: Props = $props();
</script>

<label class={cn(className)} {...props}>{@render children()}</label>
