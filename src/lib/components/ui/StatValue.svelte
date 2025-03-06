<script lang="ts">
	import { cn } from '$lib/helpers/utils';

	interface Props {
		value: number;
		class?: string;
	}

	const { value, class: className }: Props = $props();
</script>

<div class={cn('w-fit rounded-md px-2', className)}>{value}</div>
