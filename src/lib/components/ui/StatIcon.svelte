<script lang="ts">
	import { cn } from '$lib/helpers/utils';
	import type { ClassValue } from 'clsx';
	import { type Icon as IconType } from 'lucide-svelte';

	interface Props {
		icon: typeof IconType;
		class?: ClassValue;
	}

	const { icon, class: className }: Props = $props();
</script>

<div class={cn('rounded-full p-1.5', className)}>
	{#if icon}
		{@const Icon = icon}
		<Icon size={20} />
	{/if}
</div>
