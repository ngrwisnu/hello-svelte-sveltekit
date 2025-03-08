<script lang="ts">
	import Badge from '$lib/components/ui/Badge.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import Dropdown from '$lib/components/ui/Dropdown.svelte';
	import DropdownButton from '$lib/components/ui/DropdownButton.svelte';
	import DropdownContent from '$lib/components/ui/DropdownContent.svelte';
	import Table from '$lib/components/ui/Table.svelte';
	import WrapperMain from '$lib/components/ui/WrapperMain.svelte';
	import { formatCurrency } from '$lib/helpers/formatCurrency';
	import type { ProductType } from '$lib/types/product';
	import { EllipsisVertical, FileText, PenLine, Plus, Trash } from 'lucide-svelte';

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
			<Table>
				{#snippet header()}
					<th>Name</th>
					<th>Size (gr)</th>
					<th>Stock</th>
					<th>Price</th>
					<th class="min-w-[140px]">Status</th>
					<th></th>
				{/snippet}

				{#if !products.length}
					<tr>
						<td colspan="6" class="text-center">No data found</td>
					</tr>
				{:else}
					{#each products as p (p.id)}
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
							<th class="flex flex-wrap items-center justify-center gap-2">
								<a
									href={`/products/update/${p.id}`}
									class="flex size-9 items-center justify-center hover:cursor-pointer"
								>
									<PenLine size={20} />
								</a>
								<Dropdown>
									<DropdownButton>
										<EllipsisVertical size={20} />
									</DropdownButton>
									<DropdownContent>
										<li>
											<a href={`/products/details/${p.id}`}><FileText size={20} /> Details</a>
										</li>
										<li><button class="text-red-600"><Trash size={20} /> Remove</button></li>
									</DropdownContent>
								</Dropdown>
							</th>
						</tr>
					{/each}
				{/if}
			</Table>
		</div>
	</div>
</WrapperMain>
