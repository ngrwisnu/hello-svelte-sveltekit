<script lang="ts">
	import { cn } from '$lib/helpers/utils';
	import type { ClassValue } from 'clsx';

	interface Props {
		value: number;
		class?: ClassValue;
	}

	const { value, class: className }: Props = $props();
</script>

<div class={cn('w-fit rounded-md px-2', className)}>{value}</div>
