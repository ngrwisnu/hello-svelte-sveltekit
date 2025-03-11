<script>
	import WrapperMain from '$lib/components/ui/WrapperMain.svelte';
	import thumbnail from '$lib/assets/images/default-image.webp';
	import Button from '$lib/components/ui/Button.svelte';
	import Input from '$lib/components/ui/Input.svelte';
	import Select from '$lib/components/ui/Select.svelte';

	const { id } = $props();

	let selectedStatus = $state('out_of_stock');
</script>

<WrapperMain>
	<h2 class="text-2xl font-semibold">Update</h2>
	<h3 class="text-xl font-medium text-slate-600">#{id}</h3>
	<div class="flex w-full justify-end gap-4">
		<Button class="btn-ghost">Cancel</Button>
		<Button class="bg-brand-primary">Save</Button>
	</div>
	<div class="flex flex-col gap-4 md:flex-row">
		<div class="">
			<h4 class="mb-2 text-lg font-medium">Thumbnail</h4>
			<div class="h-[250px] w-[250px] overflow-hidden rounded-xl bg-white">
				<img src={thumbnail} alt="thumbnail" />
			</div>
			<Button class="mt-3 w-full">Change thumbnail</Button>
		</div>
		<div class="basis-full">
			<h4 class="mb-2 text-lg font-medium">General information</h4>
			<div class="border-base-300 bg-base-100 w-full rounded-xl border p-4">
				<div class="mb-4">
					<h6 class="mb-1">Product name</h6>
					<Input value="Product 1" class="bg-slate-100" />
				</div>
				<div class="mb-4">
					<h6 class="mb-1">Size in gr</h6>
					<Input type="number" value="500" disabled class="bg-slate-100" />
				</div>
				<div class="mb-4">
					<h6 class="mb-1">Stock</h6>
					<Input type="number" value="12" class="bg-slate-100" />
				</div>
				<div class="mb-4">
					<h6 class="mb-1">Price</h6>
					<Input type="number" value="30000" class="bg-slate-100" />
				</div>
				<div class="mb-4">
					<h6 class="">Status</h6>
					<div class="mb-1 text-sm text-slate-400">
						Set the product's availability status for customers.
					</div>
					<Select bind:value={selectedStatus}>
						<option value="in_stock">Available</option>
						<option value="out_of_stock">Out Of Stock</option>
					</Select>
				</div>
			</div>
		</div>
	</div>
</WrapperMain>
