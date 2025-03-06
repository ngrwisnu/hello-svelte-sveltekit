<script lang="ts">
	import Badge from '$lib/components/ui/Badge.svelte';
	import Pagination from '$lib/components/ui/Pagination.svelte';
	import Stat from '$lib/components/ui/Stat.svelte';
	import StatIcon from '$lib/components/ui/StatIcon.svelte';
	import StatTitle from '$lib/components/ui/StatTitle.svelte';
	import StatValue from '$lib/components/ui/StatValue.svelte';
	import Table from '$lib/components/ui/Table.svelte';
	import WrapperMain from '$lib/components/ui/WrapperMain.svelte';
	import { formatCurrency } from '$lib/helpers/formatCurrency';
	import { formatDate } from '$lib/helpers/formatDate';
	import type { OrderType } from '$lib/types/order';
	import {
		CheckCheck,
		ClipboardList,
		ClockArrowDown,
		EllipsisVertical,
		PenLine,
		X
	} from 'lucide-svelte';

	type Props = {
		orders: {
			data: OrderType[];
			length: number;
		};
	};

	const { orders }: Props = $props();
	const overview = $derived.by(() => {
		const summary: Record<OrderType['status'], number> = {
			success: 0,
			pending: 0,
			pre_order: 0,
			reject: 0
		};

		for (let i of orders.data) {
			summary[i.status] = (summary[i.status] ?? 0) + 1;
		}

		return summary;
	});

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
	<div class="flex w-full flex-wrap gap-4">
		<Stat class="bg-green-200">
			{#snippet title()}
				<StatTitle title="Order success" />
			{/snippet}

			{#snippet value()}
				<StatValue value={overview['success']} class="bg-green-300" />
			{/snippet}

			{#snippet icon()}
				<StatIcon icon={CheckCheck} class="bg-green-300" />
			{/snippet}
		</Stat>
		<Stat class="bg-orange-200">
			{#snippet title()}
				<StatTitle title="Order pending" />
			{/snippet}

			{#snippet value()}
				<StatValue value={overview['pending']} class="bg-orange-300" />
			{/snippet}

			{#snippet icon()}
				<StatIcon icon={ClockArrowDown} class="bg-orange-300" />
			{/snippet}
		</Stat>
		<Stat class="bg-indigo-200">
			{#snippet title()}
				<StatTitle title="Order pre-order" />
			{/snippet}

			{#snippet value()}
				<StatValue value={overview['pre_order']} class="bg-indigo-300" />
			{/snippet}

			{#snippet icon()}
				<StatIcon icon={ClipboardList} class="bg-indigo-300" />
			{/snippet}
		</Stat>
		<Stat class="bg-rose-200">
			{#snippet title()}
				<StatTitle title="Order reject" />
			{/snippet}

			{#snippet value()}
				<StatValue value={overview['reject']} class="bg-rose-300" />
			{/snippet}

			{#snippet icon()}
				<StatIcon icon={X} class="bg-rose-300" />
			{/snippet}
		</Stat>
	</div>
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
