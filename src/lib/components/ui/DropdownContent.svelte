<script lang="ts">
	import { cn } from '$lib/helpers/utils';

	const { children, ...props } = $props();
</script>

<div
	tabindex="0"
	role="button"
	class={cn(
		'dropdown-content menu bg-base-100 rounded-box w-52 p-2 font-normal shadow-sm',
		props.class
	)}
>
	{@render children()}
</div>
