<script lang="ts">
	import { cn } from '$lib/helpers/utils';

	let { value = $bindable(), class: className, ...props } = $props();
</script>

<input
	bind:value
	class={cn('input w-full basis-full border-none focus:outline-slate-300', className)}
	{...props}
/>
