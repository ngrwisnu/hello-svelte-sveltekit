<script>
	import WrapperMain from '$lib/components/ui/WrapperMain.svelte';
	import thumbnail from '$lib/assets/images/default-image.webp';
	import Button from '$lib/components/ui/Button.svelte';
	import Input from '$lib/components/ui/Input.svelte';
	import Select from '$lib/components/ui/Select.svelte';
	import FormItem from '$lib/components/ui/FormItem.svelte';
	import Label from '$lib/components/ui/Label.svelte';

	let discountType = $state();
	let expiredDate = $state();
	let selectedStatus = $state('active');
</script>

<WrapperMain>
	{#snippet title()}
		<h2 class="text-2xl font-semibold">Create new coupon</h2>
	{/snippet}
	<div class="flex flex-col gap-4 md:flex-row">
		<div class="">
			<h4 class="mb-2 text-lg font-medium">Thumbnail</h4>
			<div class="h-[250px] w-[250px] overflow-hidden rounded-xl bg-white">
				<img src={thumbnail} alt="thumbnail" />
			</div>
			<Button class="mt-3 w-full">Add thumbnail</Button>
		</div>
		<div class="basis-full">
			<h4 class="mb-2 text-lg font-medium">General information</h4>
			<div class="border-base-300 bg-base-100 w-full rounded-xl border p-4">
				<FormItem>
					<Label for="name">Coupon name</Label>
					<Input
						type="text"
						name="name"
						id="name"
						placeholder="e.g. Free Delivery"
						required
						class="bg-slate-100"
					/>
				</FormItem>
				<FormItem>
					<Label for="code">Coupon code</Label>
					<Input
						type="text"
						name="code"
						id="code"
						placeholder="e.g. FREE24"
						required
						class="bg-slate-100"
					/>
				</FormItem>
				<FormItem>
					<Label for="discount_type">Discount type</Label>
					<Select id="discount_type" bind:value={discountType}>
						<option disabled selected>Select the discount type</option>
						<option value="percentage">Percentage</option>
						<option value="fixed">Fixed</option>
						<option value="free">Free</option>
					</Select>
				</FormItem>
				<FormItem>
					<Label for="discount_amount">Discount amount</Label>
					<Input
						id="discount_amount"
						type="number"
						min="0"
						placeholder=""
						class="bg-slate-100"
						required
					/>
				</FormItem>
				<FormItem>
					<Label for="limit">Limit</Label>
					<div class="mb-1 text-sm text-slate-400">
						Define the total usage limit for this coupon.
					</div>
					<Input id="limit" type="number" min="0" placeholder="10" class="bg-slate-100" />
				</FormItem>
				<FormItem>
					<Label for="expired">Expired Date</Label>
					<Select id="expired" bind:value={expiredDate}>
						<option disabled selected>How long should this coupon be active?</option>
						<option value="1">1 Day</option>
						<option value="5">5 Days</option>
						<option value="7">7 Days</option>
						<option value="14">14 Days</option>
					</Select>
				</FormItem>
				<FormItem>
					<Label for="status">Status</Label>
					<Select id="status" bind:value={selectedStatus}>
						<option value="active">Active</option>
						<option value="in_active">Inactive</option>
					</Select>
				</FormItem>
				<div class="flex w-full justify-end gap-4">
					<a href="/coupons" class="btn btn-ghost">Cancel</a>
					<Button class="bg-brand-primary hover:opacity-90">Add coupon</Button>
				</div>
			</div>
		</div>
	</div>
</WrapperMain>
