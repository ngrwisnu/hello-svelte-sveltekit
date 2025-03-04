<script lang="ts">
	import type { Snippet } from 'svelte';
	import { cn } from '$lib/helpers/utils';

	interface Props {
		data: any[];
		header: Snippet;
		row: Snippet<[any]>;
		notFound: Snippet;
		class?: string;
	}

	let { data, header, row, notFound, class: className = '' }: Props = $props();
</script>

<table class={cn('table', className)}>
	<thead>
		<tr>
			{@render header()}
		</tr>
	</thead>
	<tbody>
		{#if !data.length}
			<tr>
				{@render notFound()}
			</tr>
		{/if}
		{#each data as d (d.id)}
			<tr>
				{@render row(d)}
			</tr>
		{/each}
	</tbody>
</table>
