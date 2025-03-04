<script lang="ts">
	import Table from '$lib/components/ui/Table.svelte';
	import WrapperMain from '$lib/components/ui/WrapperMain.svelte';
	import type { CouponType } from '$lib/types/coupon';
	import { EllipsisVertical, PenLine } from 'lucide-svelte';

	type Props = {
		coupons: CouponType[];
	};

	const { coupons }: Props = $props();

	const actionHandler = () => {
		alert('clicked');
	};
</script>

<WrapperMain>
	{#snippet title()}
		<h1>Coupons</h1>
	{/snippet}
	<div class="w-full">
		<div class="rounded-box bg-base-100 mt-4 w-full overflow-x-auto">
			<Table data={coupons}>
				{#snippet header()}
					<th>Code</th>
					<th>Name</th>
					<th>Type</th>
					<th>Amount</th>
					<th>Status</th>
					<th></th>
				{/snippet}

				{#snippet row(d)}
					<td>{d.code}</td>
					<td>{d.name}</td>
					<td>{d.discount_type}</td>
					<td>{d.discount_amount}</td>
					<td>
						{#if d.status === 'active'}
							<div class="badge badge-success">active</div>
						{:else if d.status === 'expired'}
							<div class="badge badge-neutral">expired</div>
						{:else}
							<div class="badge badge-error">inactive</div>
						{/if}
					</td>
					<th class="flex flex-wrap items-center justify-center gap-2">
						<a
							href={`/coupons/update/${d.id}`}
							class="flex size-9 items-center justify-center hover:cursor-pointer"
						>
							<PenLine size={20} />
						</a>
						<button class="hover:cursor-pointer" onclick={actionHandler}>
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
