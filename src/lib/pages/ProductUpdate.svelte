<script>
	import WrapperMain from '$lib/components/ui/WrapperMain.svelte';
	import thumbnail from '$lib/assets/images/default-image.webp';
	import Button from '$lib/components/ui/Button.svelte';
	import Input from '$lib/components/ui/Input.svelte';
	import Select from '$lib/components/ui/Select.svelte';
	import FormItem from '$lib/components/ui/FormItem.svelte';
	import Label from '$lib/components/ui/Label.svelte';

	const { id } = $props();

	let selectedStatus = $state('out_of_stock');
</script>

<WrapperMain>
	<h2 class="text-2xl font-semibold">Update</h2>
	<h3 class="text-xl font-medium text-slate-600">#{id}</h3>
	<div class="flex w-full justify-end gap-4">
		<a href="/products" class="btn btn-ghost">Cancel</a>
		<Button class="bg-brand-primary hover:opacity-90">Save</Button>
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
				<FormItem>
					<Label for="name">Product name</Label>
					<Input id="name" value="Product 1" class="bg-slate-100" />
				</FormItem>
				<FormItem>
					<Label for="size">Size in gr</Label>
					<Input id="size" type="number" min="1" value="500" disabled class="bg-slate-100" />
				</FormItem>
				<FormItem>
					<Label for="stock">Stock</Label>
					<Input id="stock" type="number" min="0" value="12" class="bg-slate-100" />
				</FormItem>
				<FormItem>
					<Label for="price">Price</Label>
					<Input id="price" type="number" min="0" value="30000" class="bg-slate-100" />
				</FormItem>
				<FormItem>
					<Label for="status">Status</Label>
					<div class="mb-1 text-sm text-slate-400">
						Set the product's availability status for customers.
					</div>
					<Select id="status" bind:value={selectedStatus}>
						<option value="in_stock">Available</option>
						<option value="out_of_stock">Out Of Stock</option>
					</Select>
				</FormItem>
			</div>
		</div>
	</div>
</WrapperMain>
