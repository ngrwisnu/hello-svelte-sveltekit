<script lang="ts">
	import Footer from '$lib/components/footer/Footer.svelte';
	import Header from '$lib/components/header/Header.svelte';
	import Sidenav from '$lib/components/sidenav/Sidenav.svelte';
	import type { LayoutProps } from './$types';

	let { children, data }: LayoutProps = $props();
	let isClose = $state(false);

	const sidenavHandler = () => {
		isClose = !isClose;
	};
</script>

<div class="bg-brand-background flex">
	<Sidenav page={data.page} {isClose} />
	<div class="w-full flex-1">
		<Header {sidenavHandler} />
		<main class="min-h-svh w-full">
			{@render children()}
		</main>
		<Footer />
	</div>
</div>
