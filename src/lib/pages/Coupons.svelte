<script lang="ts">
	import Table from '$lib/components/ui/Table.svelte';
	import WrapperMain from '$lib/components/ui/WrapperMain.svelte';
	import type { CouponType } from '$lib/types/coupon';

	type Props = {
		coupons: CouponType[];
	};

	const { coupons }: Props = $props();
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

				{#snippet row(d)}{/snippet}

				{#snippet notFound()}
					<td colspan="6" class="text-center">No data found</td>
				{/snippet}
			</Table>
		</div>
	</div>
</WrapperMain>
