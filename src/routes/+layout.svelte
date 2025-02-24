<script lang="ts">
	import Header from '$lib/components/header/Header.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<div class="">
	<Header />
	{@render children()}
</div>
