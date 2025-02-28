<script lang="ts">
	import type { Snippet } from 'svelte';
	import { cn } from '$lib/helpers/utils';
	import type { UserType } from '$lib/types/user';

	interface Props {
		data: any[];
		header: Snippet;
		row: Snippet<[UserType]>;
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
