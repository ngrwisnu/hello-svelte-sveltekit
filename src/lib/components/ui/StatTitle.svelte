<script lang="ts">
	import { cn } from '$lib/helpers/utils';
	import type { ClassValue } from 'clsx';

	interface Props {
		title: string;
		class?: ClassValue;
	}

	const { title, class: className }: Props = $props();
</script>

<div class={cn(className)}>{title}</div>
