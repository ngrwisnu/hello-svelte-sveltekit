<script>
	import { cn } from '$lib/helpers/utils';

	let { children, ...props } = $props();
</script>

<div class={cn('mb-4', props.class)}>
	{@render children()}
</div>
