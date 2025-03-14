<script lang="ts">
	import { cn } from '$lib/helpers/utils';
	import type { ClassValue } from 'clsx';
	import type { Snippet } from 'svelte';

	interface Props {
		title: Snippet;
		value: Snippet;
		icon?: Snippet;
		class?: ClassValue;
	}

	const { title, value, icon, ...props }: Props = $props();
</script>

<div class={cn('stat basis-full rounded-2xl sm:max-w-60', props.class)}>
	<div class="stat-figure">
		{@render icon?.()}
	</div>
	<div class="stat-value">{@render value()}</div>
	<div class="stat-title">{@render title()}</div>
</div>
