<script lang="ts">
	import { cn } from '$lib/helpers/utils';
	import type { Snippet } from 'svelte';

	interface Props {
		title: Snippet;
		value: Snippet;
		icon?: Snippet;
		class?: string;
	}

	const { title, value, icon, class: className }: Props = $props();
</script>

<div class={cn('stat basis-full rounded-2xl sm:max-w-60', className)}>
	<div class="stat-figure">
		{@render icon?.()}
	</div>
	<div class="stat-value">{@render value()}</div>
	<div class="stat-title">{@render title()}</div>
</div>
