<script lang="ts">
	import { cn } from '$lib/helpers/utils';

	const { children, ...props } = $props();
</script>

<div tabindex="0" role="button" class={cn('btn', props.class)}>
	{@render children()}
</div>
