<script lang="ts">
	import Table from '$lib/components/ui/Table.svelte';
	import WrapperMain from '$lib/components/ui/WrapperMain.svelte';
	import type { ProductType } from '$lib/types/product';

	type Props = {
		products: ProductType[];
	};

	const { products }: Props = $props();
</script>

<WrapperMain>
	{#snippet title()}
		<h1>Products</h1>
	{/snippet}
	<div class="w-full">
		<div class="rounded-box bg-base-100 mt-4 w-full overflow-x-auto">
			<Table data={products}>
				{#snippet header()}
					<th>Name</th>
					<th>Size</th>
					<th>Stock</th>
					<th>Price</th>
					<th>Status</th>
					<th></th>
				{/snippet}

				{#snippet row(d)}{/snippet}

				{#snippet notFound()}
					<td colspan="6" class="text-center">No data found</td>
				{/snippet}
			</Table>
		</div>
	</div>
</WrapperMain>
