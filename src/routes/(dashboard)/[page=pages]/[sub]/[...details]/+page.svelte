<script lang="ts">
	import CouponCreate from '$lib/pages/CouponCreate.svelte';
	import CouponUpdate from '$lib/pages/CouponUpdate.svelte';
	import ProductCreate from '$lib/pages/ProductCreate.svelte';
	import ProductUpdate from '$lib/pages/ProductUpdate.svelte';
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
				create: ProductCreate,
				update: ProductUpdate
			},
			coupons: {
				create: CouponCreate,
				update: CouponUpdate
			}
		};

		return routesMap[data.page][data.sub];
	});
</script>

<Pages id={detailId} />
