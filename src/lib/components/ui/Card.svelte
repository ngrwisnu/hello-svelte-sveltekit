<script lang="ts">
	import { cn } from '$lib/helpers/utils';
	import type { ClassValue } from 'clsx';
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
		class?: ClassValue;
		[key: string]: any;
	}

	let { children, class: className, ...props }: Props = $props();
</script>

<div class={cn('overflow-hidden rounded-2xl bg-white', className)} {...props}>
	{@render children()}
</div>
