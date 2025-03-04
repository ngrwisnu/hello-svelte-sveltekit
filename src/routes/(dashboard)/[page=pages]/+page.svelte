<script lang="ts">
	import Coupons from '$lib/pages/Coupons.svelte';
	import Customers from '$lib/pages/Customers.svelte';
	import Dashboard from '$lib/pages/Dashboard.svelte';
	import Orders from '$lib/pages/Orders.svelte';
	import Products from '$lib/pages/Products.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	let PageComp = $derived.by(() => {
		const pagesMap: {
			[key: string]: any;
		} = {
			dashboard: Dashboard,
			products: Products,
			coupons: Coupons,
			customers: Customers,
			orders: Orders,
			default: Dashboard
		};

		return pagesMap[data.page || 'default'];
	});
</script>

<PageComp users={data.users} orders={data.orders} products={data.products} coupons={data.coupons} />
