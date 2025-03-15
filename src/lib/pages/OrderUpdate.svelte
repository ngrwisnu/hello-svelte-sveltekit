<script>
	import WrapperMain from '$lib/components/ui/WrapperMain.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import { CalendarDays } from 'lucide-svelte';
	import Badge from '$lib/components/ui/Badge.svelte';
	import Card from '$lib/components/ui/Card.svelte';
	import CardContent from '$lib/components/ui/CardContent.svelte';
	import CardFooter from '$lib/components/ui/CardFooter.svelte';
	import Input from '$lib/components/ui/Input.svelte';
	import thumb from '$lib/assets/images/default-image.webp';

	const { id } = $props();
</script>

<WrapperMain>
	<div class="flex flex-col justify-between gap-8 sm:flex-row">
		<div class="flex flex-1 flex-col items-baseline gap-4 md:flex-row">
			<div>
				<h2 class="text-2xl font-semibold">Order</h2>
				<h3 class="text-xl font-medium text-slate-600">#{id}</h3>
			</div>
			<div>
				<div class="flex items-center gap-1 text-slate-500">
					<CalendarDays size={18} /><span class="mt-1 text-sm">24 Jan 2025 at 13.00</span>
				</div>
			</div>
		</div>
		<div>
			<Button class="w-full border-none bg-[#00BAFE] text-white hover:opacity-90 sm:w-fit"
				>Mark as done</Button
			>
		</div>
	</div>
	<div class="mt-8 flex flex-col gap-6 md:flex-row">
		<div class="md:order-2">
			<h4 class="py-2 text-lg font-medium">Customer</h4>
			<Card id="shipping-address" class="h-fit max-w-[500px] min-w-[250px]">
				<CardContent>
					<h6 class="mb-1.5 font-medium">Delivery address</h6>
					<div class="">John Doe</div>
					<div class="">+12 123123123</div>
					<div class="mt-1">123 Main St, Apt 4B</div>
					<div class="">New York</div>
					<div class="">NY</div>
				</CardContent>
			</Card>
		</div>
		<div class="flex-1 space-y-4 md:order-1">
			<div>
				<h4 class="py-2 text-lg font-medium">Items</h4>
				<Card id="items-summary" class="@container w-full">
					<CardContent class="space-y-2">
						<div
							class="grid grid-cols-1 grid-rows-[repeat(5,_fit-content())] gap-2 @sm:grid-cols-3 @sm:grid-rows-[repeat(3,_min-content)] @lg:grid-cols-12 @lg:grid-rows-1"
						>
							<div class="h-auto w-auto max-w-30 min-w-20 @sm:max-lg:row-span-3 @lg:col-span-3">
								<img src={thumb} alt="product thumbnail" />
							</div>
							<div class="font-medium @sm:max-lg:col-start-2 @lg:col-span-3">Black Honey 700gr</div>
							<div class="@sm:max-lg:col-start-2 @lg:col-span-2">Rp 70.000</div>
							<div
								class="text-slate-500 @sm:max-lg:col-start-2 @lg:col-span-2 @lg:justify-self-center"
							>
								x1
							</div>
							<div
								class="font-medium @sm:max-lg:col-end-4 @sm:max-lg:row-start-1 @lg:col-span-2 @lg:col-end-13 @lg:justify-self-end"
							>
								Rp 70.000
							</div>
						</div>
						<div
							class="grid grid-cols-1 grid-rows-[repeat(5,_fit-content())] gap-2 @sm:grid-cols-3 @sm:grid-rows-[repeat(3,_min-content)] @lg:grid-cols-12 @lg:grid-rows-1"
						>
							<div class="h-auto w-auto max-w-30 min-w-20 @sm:max-lg:row-span-3 @lg:col-span-3">
								<img src={thumb} alt="product thumbnail" />
							</div>
							<div class="font-medium @sm:max-lg:col-start-2 @lg:col-span-3">Black Honey 700gr</div>
							<div class="@sm:max-lg:col-start-2 @lg:col-span-2">Rp 70.000</div>
							<div
								class="text-slate-500 @sm:max-lg:col-start-2 @lg:col-span-2 @lg:justify-self-center"
							>
								x1
							</div>
							<div
								class="font-medium @sm:max-lg:col-end-4 @sm:max-lg:row-start-1 @lg:col-span-2 @lg:col-end-13 @lg:justify-self-end"
							>
								Rp 70.000
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
			<div>
				<h4 class="py-2 text-lg font-medium">Delivery Status</h4>
				<Card id="delivery-status" class="w-full">
					<CardContent>
						<div class="mb-2 flex w-full justify-between">
							<div>Status</div>
							<Badge class="badge-warning"
								><div aria-label="warning" class="status bg-orange-500"></div>
								pending</Badge
							>
						</div>
						<div class="mb-2 flex w-full items-center justify-between">
							<div>Tracking number</div>
							<Input placeholder="Set tracking number" class="max-w-1/2 bg-slate-100" />
						</div>
					</CardContent>
					<CardFooter class="flex border-t border-slate-200">
						<Button class="btn-outline ml-auto">Save change</Button>
					</CardFooter>
				</Card>
			</div>
			<div>
				<h4 class="py-2 text-lg font-medium">Payment Summary</h4>
				<Card id="payment-summary" class="w-full">
					<CardContent>
						<div class="mb-2 flex w-full justify-between">
							<div>Status</div>
							<Badge class="badge-success"
								><div aria-label="success" class="status bg-green-500"></div>
								settlement</Badge
							>
						</div>
						<div class="mb-2 flex w-full justify-between">
							<div>Subtotal</div>
							<div class="font-medium">Rp 140.000</div>
						</div>
						<div class="mb-2 flex w-full justify-between">
							<div>Delivery</div>
							<div class="font-medium">Rp 0</div>
						</div>
					</CardContent>
					<CardFooter class="bg-slate-100">
						<div class="mb-2 flex w-full justify-between">
							<div>Paid by Customer</div>
							<div class="font-medium">Rp 140.000</div>
						</div>
					</CardFooter>
				</Card>
			</div>
		</div>
	</div>
</WrapperMain>
