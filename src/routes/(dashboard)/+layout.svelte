<script lang="ts">
	import Header from '$lib/components/header/Header.svelte';
	import Sidenav from '$lib/components/sidenav/Sidenav.svelte';
	import type { LayoutProps } from './$types';

	let { children, data }: LayoutProps = $props();
</script>

<div class="flex">
	<Sidenav page={data.page} />
	<div class="flex-1">
		<Header />
		{@render children()}
	</div>
</div>
