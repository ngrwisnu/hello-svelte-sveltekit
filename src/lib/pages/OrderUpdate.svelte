<script>
	import WrapperMain from '$lib/components/ui/WrapperMain.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import { CalendarDays } from 'lucide-svelte';
	import Badge from '$lib/components/ui/Badge.svelte';
	import Card from '$lib/components/ui/Card.svelte';
	import CardHeader from '$lib/components/ui/CardHeader.svelte';
	import CardContent from '$lib/components/ui/CardContent.svelte';
	import CardFooter from '$lib/components/ui/CardFooter.svelte';
	import Input from '$lib/components/ui/Input.svelte';

	const { id } = $props();
</script>

<WrapperMain>
	<div class="flex justify-between gap-8">
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
		<div class="">
			<Button class="border-none bg-[#00BAFE] text-white hover:opacity-90">Mark as done</Button>
		</div>
	</div>
	<div class="mt-8 flex flex-col gap-6 md:flex-row">
		<Card id="shipping-address" class="h-fit max-w-[500px] min-w-[250px] md:order-2">
			<CardHeader class="border-b border-slate-200">
				<h4 class="text-lg font-medium">Customer</h4>
			</CardHeader>
			<CardContent>
				<h6 class="mb-1.5 font-medium">Delivery address</h6>
				<div class="">John Doe</div>
				<div class="">+12 123123123</div>
				<div class="mt-1">123 Main St, Apt 4B</div>
				<div class="">New York</div>
				<div class="">NY</div>
			</CardContent>
		</Card>
		<div class="flex-1 space-y-6 md:order-1">
			<Card id="items-summary" class="w-full">
				<CardHeader class="flex items-center gap-4 border-b border-slate-200">
					<h4 class=" text-lg font-medium">Items</h4>
				</CardHeader>
			</Card>
			<Card id="delivery-status" class="w-full">
				<CardHeader class="flex items-center gap-4 border-b border-slate-200">
					<h4 class=" text-lg font-medium">Delivery Status</h4>
					<div>
						<Badge class="badge-warning"
							><div aria-label="warning" class="status bg-orange-500"></div>
							pending</Badge
						>
					</div>
				</CardHeader>
				<CardContent>
					<div class="mb-2 flex w-full items-center justify-between">
						<div>Tracking number</div>
						<Input placeholder="Set tracking number" class="max-w-1/2 bg-slate-100" />
					</div>
				</CardContent>
				<CardFooter class="flex">
					<Button class="btn-outline ml-auto">Save change</Button>
				</CardFooter>
			</Card>
			<Card id="payment-summary" class="w-full">
				<CardHeader class="flex items-center gap-4 border-b border-slate-200">
					<h4 class=" text-lg font-medium">Payment Summary</h4>
					<div>
						<Badge class="badge-success"
							><div aria-label="success" class="status bg-green-500"></div>
							settlement</Badge
						>
					</div>
				</CardHeader>
				<CardContent>
					<div class="mb-2 flex w-full justify-between">
						<span>Subtotal</span>
						<span class="font-medium">$9.00</span>
					</div>
					<div class="mb-2 flex w-full justify-between">
						<span>Delivery</span>
						<span class="font-medium">$0.00</span>
					</div>
				</CardContent>
				<CardFooter class="bg-slate-100">
					<div class="mb-2 flex w-full justify-between">
						<span>Paid by Customer</span>
						<span class="font-medium">$9.00</span>
					</div>
				</CardFooter>
			</Card>
		</div>
	</div>
</WrapperMain>
