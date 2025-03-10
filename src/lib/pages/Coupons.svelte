<script lang="ts">
	import Badge from '$lib/components/ui/Badge.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import Dropdown from '$lib/components/ui/Dropdown.svelte';
	import DropdownButton from '$lib/components/ui/DropdownButton.svelte';
	import DropdownContent from '$lib/components/ui/DropdownContent.svelte';
	import Pagination from '$lib/components/ui/Pagination.svelte';
	import Table from '$lib/components/ui/Table.svelte';
	import WrapperMain from '$lib/components/ui/WrapperMain.svelte';
	import { getExpiredTime } from '$lib/helpers/getExpiredTime';
	import type { CouponType } from '$lib/types/coupon';
	import { EllipsisVertical, FileText, PenLine, Plus, Trash } from 'lucide-svelte';

	type Props = {
		coupons: {
			data: CouponType[];
		};
	};

	const { coupons }: Props = $props();
	let dataLength = $derived(coupons.data.length);

	const actionHandler = () => {
		alert('clicked');
	};
</script>

<WrapperMain>
	{#snippet title()}
		<h1>Coupons</h1>
	{/snippet}
	<div class="flex w-full">
		<Button class="bg-brand-secondary text-base-100 ml-auto"><Plus size={20} /> Add coupon</Button>
	</div>
	<div class="w-full">
		<div class="rounded-box bg-base-100 mt-4 w-full overflow-x-auto">
			<Table>
				{#snippet header()}
					<th>Code</th>
					<th>Name</th>
					<th>Type</th>
					<th>Amount</th>
					<th>Expired At</th>
					<th>Status</th>
					<th></th>
				{/snippet}

				{#if !coupons.data.length}
					<tr>
						<td colspan="6" class="text-center">No data found</td>
					</tr>
				{:else}
					{#each coupons.data as c (c.id)}
						{@const Exp = getExpiredTime(c.expired)}
						<tr>
							<td>{c.code}</td>
							<td>{c.name}</td>
							<td>{c.discount_type}</td>
							<td>{c.discount_amount}</td>
							<td>
								{#if Exp === 'expired'}
									<Badge class="badge-soft badge-neutral">{Exp}</Badge>
								{:else}
									<Badge class="badge-ghost">{Exp}</Badge>
								{/if}
							</td>
							<td>
								{#if c.status === 'active'}
									<Badge class="badge-success">active</Badge>
								{:else}
									<Badge class="badge-error">inactive</Badge>
								{/if}
							</td>
							<td class="flex flex-wrap items-center justify-center gap-2">
								<a
									href={`/coupons/update/${c.id}`}
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
											<a href={`/coupons/details/${c.id}`}><FileText size={20} /> Details</a>
										</li>
										<li><button class="text-red-600"><Trash size={20} /> Remove</button></li>
									</DropdownContent>
								</Dropdown>
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
