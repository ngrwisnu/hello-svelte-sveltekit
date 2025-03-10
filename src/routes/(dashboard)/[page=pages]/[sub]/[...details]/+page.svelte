<script lang="ts">
	import ProductDetails from '$lib/pages/ProductDetails.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	let detailId = $derived(data.details.split('/')[0]);
	let Pages = $derived.by(() => {
		const routesMap: {
			[key: string]: {
				[key: string]: any;
			};
		} = {
			products: {
				details: ProductDetails
			}
		};

		return routesMap[data.page][data.sub];
	});
</script>

<Pages id={detailId} />
