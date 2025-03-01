<script lang="ts">
	import { generatePagination } from '$lib/helpers/generatePagination';
	import { ChevronLeft, ChevronRight } from 'lucide-svelte';

	interface Props {
		length: number;
	}

	const { length = 1 }: Props = $props();

	let activePage = $state(1);
	let totalPages = $derived(generatePagination(activePage, length));

	const paginationHandler = (id: number) => {
		activePage = id;
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
		class={`join-item btn ${activePage === length && 'btn-disabled'}`}
		onclick={() => chevronHandler('right')}><ChevronRight size={14} /></button
	>
</div>
