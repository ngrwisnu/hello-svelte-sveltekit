<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
	import Table from '$lib/components/ui/Table.svelte';
	import WrapperMain from '$lib/components/ui/WrapperMain.svelte';
	import { formatCurrency } from '$lib/helpers/formatCurrency';
	import type { ProductType } from '$lib/types/product';
	import { EllipsisVertical, PenLine, Plus } from 'lucide-svelte';

	type Props = {
		products: ProductType[];
	};

	const { products }: Props = $props();
</script>

<WrapperMain>
	{#snippet title()}
		<h1>Products</h1>
	{/snippet}
	<div class="flex w-full">
		<Button class="bg-brand-secondary text-base-100 ml-auto"><Plus size={20} /> Add product</Button>
	</div>
	<div class="w-full">
		<div class="rounded-box bg-base-100 mt-4 w-full overflow-x-auto">
			<Table data={products} class="min-w-[700px]">
				{#snippet header()}
					<th>Name</th>
					<th>Size (gr)</th>
					<th>Stock</th>
					<th>Price</th>
					<th>Status</th>
					<th></th>
				{/snippet}

				{#snippet row(d)}
					<td>{d.name}</td>
					<td>{d.size}</td>
					<td>{d.stock}</td>
					<td>{formatCurrency(d.price)}</td>
					<td>
						{#if d.status === 'in_stock'}
							<div class="badge badge-xs md:badge-md badge-success">In Stock</div>
						{:else}
							<div class="badge badge-xs md:badge-md badge-error">Out Of Stock</div>
						{/if}
					</td>
					<th class="flex flex-wrap items-center justify-center gap-2">
						<a
							href={`/products/update/${d.id}`}
							class="flex size-9 items-center justify-center hover:cursor-pointer"
						>
							<PenLine size={20} />
						</a>
						<button class="hover:cursor-pointer">
							<EllipsisVertical size={20} />
						</button>
					</th>
				{/snippet}

				{#snippet notFound()}
					<td colspan="6" class="text-center">No data found</td>
				{/snippet}
			</Table>
		</div>
	</div>
</WrapperMain>
