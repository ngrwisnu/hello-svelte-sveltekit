<script lang="ts">
	import type { Snippet } from 'svelte';
	import { cn } from '$lib/helpers/utils';
	import type { ClassValue } from 'clsx';

	interface Props {
		header: Snippet;
		children: Snippet;
		class?: ClassValue;
	}

	let { header, children, ...props }: Props = $props();
</script>

<table class={cn('table', props.class)}>
	<thead>
		<tr>
			{@render header()}
		</tr>
	</thead>
	<tbody>
		{@render children()}
	</tbody>
</table>
