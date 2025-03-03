<script lang="ts">
	import { generatePagination } from '$lib/helpers/generatePagination';
	import { ChevronLeft, ChevronRight } from 'lucide-svelte';

	interface Props {
		length: number;
		size?: number;
	}

	const { length = 1, size = 10 }: Props = $props();

	let activePage = $state(1);
	let paginationLen = $derived(Math.ceil(length / size));
	let totalPages = $derived(generatePagination(activePage, paginationLen));

	const paginationHandler = (id: number) => {
		if (isNaN(id)) {
			return;
		} else {
			activePage = id;
		}
	};

	const chevronHandler = (direction: 'left' | 'right') => {
		activePage =
			direction === 'left' ? Math.max(activePage - 1, 1) : Math.min(activePage + 1, length);
	};
</script>

<div class="join">
	<button
		class={`join-item btn ${activePage === 1 && 'btn-disabled'}`}
		onclick={() => chevronHandler('left')}><ChevronLeft size={14} /></button
	>
	{#each totalPages as page}
		<button
			class={`join-item btn ${activePage.toString() === page && 'btn-active'}`}
			onclick={() => paginationHandler(+page)}>{page}</button
		>
	{/each}
	<button
		class={`join-item btn ${activePage === paginationLen && 'btn-disabled'}`}
		onclick={() => chevronHandler('right')}><ChevronRight size={14} /></button
	>
</div>
