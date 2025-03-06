<script lang="ts">
	import Badge from '$lib/components/ui/Badge.svelte';
	import Pagination from '$lib/components/ui/Pagination.svelte';
	import Table from '$lib/components/ui/Table.svelte';
	import WrapperMain from '$lib/components/ui/WrapperMain.svelte';
	import { formatCurrency } from '$lib/helpers/formatCurrency';
	import { formatDate } from '$lib/helpers/formatDate';
	import type { OrderType } from '$lib/types/order';
	import { EllipsisVertical, PenLine } from 'lucide-svelte';

	type Props = {
		orders: {
			data: OrderType[];
			length: number;
		};
	};

	const { orders }: Props = $props();

	const statusMap: Record<OrderType['status'], { style: string; text: string }> = {
		success: {
			style: 'badge-success',
			text: 'success'
		},
		pending: {
			style: 'badge-warning',
			text: 'pending'
		},
		reject: {
			style: 'badge-error',
			text: 'reject'
		},
		pre_order: {
			style: 'badge-primary',
			text: 'pre-order'
		}
	};

	const paymentStatusMap: Record<OrderType['payment_status'], { style: string; text: string }> = {
		settlement: {
			style: 'badge-success',
			text: 'settlement'
		},
		pending: {
			style: 'badge-warning',
			text: 'pending'
		}
	};
</script>

<WrapperMain>
	{#snippet title()}
		<h1>Orders</h1>
	{/snippet}
	<div class="w-full">
		<div class="rounded-box bg-base-100 mt-4 w-full overflow-x-auto">
			<Table>
				{#snippet header()}
					<th>Order ID</th>
					<th>Customer Name</th>
					<th>Order Status</th>
					<th>Payment Status</th>
					<th>Order Date</th>
					<th>Total (Rp)</th>
					<th></th>
				{/snippet}

				{#if !orders.data.length}
					<tr>
						<td colspan="7" class="text-center">No data found</td>
					</tr>
				{:else}
					{#each orders.data as o (o.order_id)}
						<tr>
							<td>{o.order_id}</td>
							<td>{o.customer.username}</td>
							<td>
								<Badge class={statusMap[o.status].style}>{statusMap[o.status].text}</Badge>
							</td>
							<td>
								<Badge class={paymentStatusMap[o.payment_status].style}
									>{paymentStatusMap[o.payment_status].text}</Badge
								>
							</td>
							<td>{formatDate(o.createdAt)}</td>
							<td>{formatCurrency(o.total_price)}</td>
							<th class="flex flex-wrap items-center justify-center gap-2">
								<a
									href={`/orders/update/${o.order_id}`}
									class="flex size-9 items-center justify-center hover:cursor-pointer"
								>
									<PenLine size={20} />
								</a>
								<button class="hover:cursor-pointer">
									<EllipsisVertical size={20} />
								</button>
							</th>
						</tr>
					{/each}
				{/if}
			</Table>
		</div>
	</div>
	<div class="mt-4 flex w-full justify-center sm:justify-end">
		<Pagination length={orders.length} />
	</div>
</WrapperMain>
