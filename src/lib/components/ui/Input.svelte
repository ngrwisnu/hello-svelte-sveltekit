<script lang="ts">
	import { cn } from '$lib/helpers/utils';
	import type { HTMLInputAttributes } from 'svelte/elements';

	interface Props extends HTMLInputAttributes {}

	let { value = $bindable(), class: className = '', ...props }: Props = $props();
</script>

<input
	bind:value
	class={cn('input w-full basis-full border-none focus:outline-slate-300', className)}
	{...props}
/>
