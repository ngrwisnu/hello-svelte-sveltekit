<script lang="ts">
	import Header from '$lib/components/header/Header.svelte';
	import Sidenav from '$lib/components/sidenav/Sidenav.svelte';
	import type { LayoutProps } from './$types';

	let { children, data }: LayoutProps = $props();
	let isClose = $state(false);

	const sidenavHandler = () => {
		isClose = !isClose;
	};
</script>

<div class="flex">
	<Sidenav page={data.page} {isClose} />
	<div class="w-full flex-1">
		<Header {sidenavHandler} />
		<main class="w-full p-4">
			{@render children()}
		</main>
	</div>
</div>
