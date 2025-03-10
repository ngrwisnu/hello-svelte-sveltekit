<script>
	import WrapperMain from '$lib/components/ui/WrapperMain.svelte';

	const { id } = $props();
</script>

<WrapperMain>
	{#snippet title()}
		<h2 class="text-2xl font-semibold">Details</h2>
		<h5 class="text-xl font-medium text-slate-600">#{id}</h5>
	{/snippet}
	<p>#{id}</p>
</WrapperMain>
