<script lang="ts">
	import Pagination from '$lib/components/ui/Pagination.svelte';
	import Table from '$lib/components/ui/Table.svelte';
	import WrapperMain from '$lib/components/ui/WrapperMain.svelte';
	import type { OrderType } from '$lib/types/order';

	type Props = {
		orders: {
			data: OrderType[];
			length: number;
		};
	};

	const { orders }: Props = $props();
</script>

<WrapperMain>
	{#snippet title()}
		<h1>Orders</h1>
	{/snippet}
	<div class="w-full">
		<div class="rounded-box bg-base-100 mt-4 w-full overflow-x-auto">
			<Table data={orders.data}>
				{#snippet header()}
					<th>Order ID</th>
					<th>Customer Name</th>
					<th>Order Status</th>
					<th>Payment Status</th>
					<th>Order Date</th>
					<th>Total (Rp)</th>
					<th></th>
				{/snippet}

				{#snippet row(d)}{/snippet}

				{#snippet notFound()}
					<td colspan="7" class="text-center">No data found</td>
				{/snippet}
			</Table>
		</div>
	</div>
	<div class="mt-4 flex w-full justify-center sm:justify-end">
		<Pagination length={orders.length} />
	</div>
</WrapperMain>
