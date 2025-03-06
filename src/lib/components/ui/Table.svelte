<script lang="ts">
	import type { Snippet } from 'svelte';
	import { cn } from '$lib/helpers/utils';

	interface Props {
		header: Snippet;
		children: Snippet;
		class?: string;
	}

	let { header, children, class: className = '' }: Props = $props();
</script>

<table class={cn('table', className)}>
	<thead>
		<tr>
			{@render header()}
		</tr>
	</thead>
	<tbody>
		{@render children()}
	</tbody>
</table>
