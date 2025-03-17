<script lang="ts">
	import Badge from '$lib/components/ui/Badge.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import Pagination from '$lib/components/ui/Pagination.svelte';
	import Table from '$lib/components/ui/Table.svelte';
	import WrapperMain from '$lib/components/ui/WrapperMain.svelte';
	import { formatCurrency } from '$lib/helpers/formatCurrency';
	import type { ProductType } from '$lib/types/product';
	import { PenLine, Plus, Trash2 } from 'lucide-svelte';

	type Props = {
		products: {
			data: ProductType[];
		};
	};

	const { products }: Props = $props();
	let dataLength = $derived(products.data.length);
</script>

<WrapperMain>
	{#snippet title()}
		<h1>Products</h1>
	{/snippet}
	<div class="flex w-full">
		<a
			href="/products/create"
			class="bg-brand-secondary btn text-base-100 ml-auto border-none hover:opacity-90"
			><Plus size={20} /> Add product</a
		>
	</div>
	<div class="w-full">
		<div class="rounded-box bg-base-100 mt-4 w-full overflow-x-auto">
			<Table>
				{#snippet header()}
					<th>Name</th>
					<th>Size (gr)</th>
					<th>Stock</th>
					<th>Price</th>
					<th class="min-w-[140px]">Status</th>
					<th></th>
				{/snippet}

				{#if !products.data.length}
					<tr>
						<td colspan="6" class="text-center">No data found</td>
					</tr>
				{:else}
					{#each products.data as p (p.id)}
						<tr>
							<td>{p.name}</td>
							<td>{p.size}</td>
							<td>{p.stock}</td>
							<td>{formatCurrency(p.price)}</td>
							<td class="min-w-[140px]">
								{#if p.status === 'in_stock'}
									<Badge class="badge-success">In Stock</Badge>
								{:else}
									<Badge class="badge-error">Out Of Stock</Badge>
								{/if}
							</td>
							<td class="flex flex-wrap items-center justify-center gap-2">
								<a
									href={`/products/update/${p.id}`}
									class="flex size-9 items-center justify-center hover:cursor-pointer"
								>
									<PenLine size={20} />
								</a>
								<button class="btn bg-rose-100 text-red-600 hover:border-rose-200"
									><Trash2 size={20} /></button
								>
							</td>
						</tr>
					{/each}
				{/if}
			</Table>
		</div>
	</div>
	<div class="mt-4 flex w-full justify-center sm:justify-end">
		<Pagination length={dataLength} />
	</div>
</WrapperMain>
