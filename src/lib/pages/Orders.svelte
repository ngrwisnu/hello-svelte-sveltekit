<script lang="ts">
	import Badge from '$lib/components/ui/Badge.svelte';
	import Dropdown from '$lib/components/ui/Dropdown.svelte';
	import DropdownButton from '$lib/components/ui/DropdownButton.svelte';
	import DropdownContent from '$lib/components/ui/DropdownContent.svelte';
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
		FileText,
		PenLine,
		Trash,
		X
	} from 'lucide-svelte';

	type Props = {
		orders: {
			data: OrderType[];
		};
	};

	const { orders }: Props = $props();
	let dataLength = $derived(orders.data.length);
	let overview = $derived.by(() => {
		const summary: {
			stat: OrderType['status'];
			val: number;
		}[] = [
			{ stat: 'success', val: 0 },
			{ stat: 'pending', val: 0 },
			{ stat: 'pre_order', val: 0 },
			{ stat: 'reject', val: 0 }
		];

		for (let i of orders.data) {
			summary.forEach((item) => item.stat === i.status && item.val++);
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
		{#each overview as sum}
			<Stat
				class={[
					sum.stat === 'success' && 'bg-green-200',
					sum.stat === 'pending' && 'bg-orange-200',
					sum.stat === 'pre_order' && 'bg-indigo-200',
					sum.stat === 'reject' && 'bg-rose-200'
				]}
			>
				{#snippet title()}
					<StatTitle title={`Order ${sum.stat === 'pre_order' ? 'pre-order' : sum.stat}`} />
				{/snippet}

				{#snippet value()}
					<StatValue
						value={sum.val}
						class={[
							sum.stat === 'success' && 'bg-green-300',
							sum.stat === 'pending' && 'bg-orange-300',
							sum.stat === 'pre_order' && 'bg-indigo-300',
							sum.stat === 'reject' && 'bg-rose-300'
						]}
					/>
				{/snippet}

				{#snippet icon()}
					<StatIcon
						icon={(sum.stat === 'success' && CheckCheck) ||
							(sum.stat === 'pending' && ClockArrowDown) ||
							(sum.stat === 'pre_order' && ClipboardList) ||
							X}
						class={[
							sum.stat === 'success' && 'bg-green-300',
							sum.stat === 'pending' && 'bg-orange-300',
							sum.stat === 'pre_order' && 'bg-indigo-300',
							sum.stat === 'reject' && 'bg-rose-300'
						]}
					/>
				{/snippet}
			</Stat>
		{/each}
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
							<td class="flex flex-wrap items-center justify-center gap-2">
								<a
									href={`/orders/update/${o.order_id}`}
									class="flex size-9 items-center justify-center hover:cursor-pointer"
								>
									<PenLine size={20} />
								</a>
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
