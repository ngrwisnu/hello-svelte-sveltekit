<script lang="ts">
	import { cn } from '$lib/helpers/utils';

	const { children, ...props } = $props();
</script>

<div class={cn('dropdown dropdown-end', props.class)}>
	{@render children()}
</div>
