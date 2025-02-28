<script lang="ts">
	import { getYear } from '$lib/helpers/getYear';
	import { onMount } from 'svelte';

	let currYear: string;

	onMount(() => {
		currYear = getYear().toString();
	});
</script>

<footer class="mt-auto w-full bg-white p-4">
	<div class="w-full text-sm">
		&copy; 2025<span class={`${currYear === '2025' && 'hidden'}`}>{' '} - {currYear}</span>. Black
		Honey.
	</div>
</footer>
