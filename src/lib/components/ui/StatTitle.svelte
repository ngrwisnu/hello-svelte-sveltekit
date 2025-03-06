<script lang="ts">
	import { cn } from '$lib/helpers/utils';

	interface Props {
		title: string;
		class?: string;
	}

	const { title, class: className }: Props = $props();
</script>

<div class={cn(className)}>{title}</div>
