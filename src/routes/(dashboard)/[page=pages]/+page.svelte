<script lang="ts">
	import Customers from '$lib/pages/Customers.svelte';
	import Dashboard from '$lib/pages/Dashboard.svelte';
	import Orders from '$lib/pages/Orders.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	let PageComp = $derived.by(() => {
		const pagesMap: {
			[key: string]: any;
		} = {
			customers: Customers,
			orders: Orders,
			default: Dashboard
		};

		return pagesMap[data.page || 'default'];
	});
</script>

<PageComp users={data.users} />
