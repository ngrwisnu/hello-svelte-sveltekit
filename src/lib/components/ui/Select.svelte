<script lang="ts">
	import { cn } from '$lib/helpers/utils';
	import type { Snippet } from 'svelte';
	import type { HTMLSelectAttributes } from 'svelte/elements';

	interface Props extends HTMLSelectAttributes {
		children: Snippet;
	}

	let { children, value = $bindable(), class: className = '', ...props }: Props = $props();
</script>

<select
	bind:value
	class={cn('select border-none bg-slate-100 focus:outline-slate-300', className)}
	{...props}
>
	{@render children()}
</select>
