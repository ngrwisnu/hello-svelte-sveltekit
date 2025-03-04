<script>
	import WrapperMain from '$lib/components/ui/WrapperMain.svelte';
</script>

<WrapperMain>
	{#snippet title()}
		<h1>Welcome Back</h1>
		<p class="text-slate-500">Here's an overview of the store</p>
	{/snippet}

	<p></p>
</WrapperMain>
