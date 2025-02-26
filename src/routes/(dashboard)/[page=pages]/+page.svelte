<script lang="ts">
	import Customers from '$lib/pages/Customers.svelte';
	import Dashboard from '$lib/pages/Dashboard.svelte';
	import Orders from '$lib/pages/Orders.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	let PageComp = $derived.by(() => {
		switch (data.page) {
			case 'customers':
				return Customers;
			case 'orders':
				return Orders;
			default:
				return Dashboard;
		}
	});
</script>

<PageComp />
