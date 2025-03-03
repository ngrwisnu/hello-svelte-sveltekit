<script lang="ts">
	import type { UserType } from '$lib/types/user';
	import { page } from '$app/state';
	import { PenLine, Trash2 } from 'lucide-svelte';
	import WrapperMain from '$lib/components/ui/WrapperMain.svelte';
	import Input from '$lib/components/ui/Input.svelte';
	import Table from '$lib/components/ui/Table.svelte';
	import Pagination from '$lib/components/ui/Pagination.svelte';

	type Props = {
		users: UserType[];
	};

	console.log(page.url);
	console.log(page.url.searchParams.has('name'));
	const { users }: Props = $props();

	let searchText = $state('');
	let selectedUsers = $derived.by(() => {
		return users.filter((user) => user.username.toLowerCase().includes(searchText.toLowerCase()));
	});

	const deleteHandler = (id: string) => {
		alert(`clicked: ${id}`);
	};
</script>

<WrapperMain>
	<h1>Customers</h1>
	<div class="mt-8 flex w-full">
		<Input
			type="text"
			bind:value={searchText}
			class="lg:basis-1/4"
			placeholder="Search by username"
		/>
	</div>
	<div class="w-full overflow-x-hidden">
		<div class="rounded-box bg-base-100 mt-4 w-full">
			<Table data={selectedUsers}>
				{#snippet header()}
					<th>Username</th>
					<th>Email</th>
					<th>Role</th>
					<th></th>
				{/snippet}

				{#snippet row(d)}
					<td>{d.username}</td>
					<td>{d.email}</td>
					<td>{d.role}</td>
					<th class="flex flex-wrap items-center justify-center gap-2">
						<a
							href={`/customers/update/${d.id}`}
							class="flex size-9 items-center justify-center hover:cursor-pointer"
						>
							<PenLine size={20} />
						</a>
						<button
							class="flex size-9 items-center justify-center text-red-500 hover:cursor-pointer"
							onclick={() => deleteHandler(d.id)}
						>
							<Trash2 size={20} />
						</button>
					</th>
				{/snippet}

				{#snippet notFound()}
					<td colspan="4" class="text-center">User doesn't exist</td>
				{/snippet}
			</Table>
		</div>
	</div>
	<div class="mt-4 flex w-full justify-end">
		<Pagination length={92} />
	</div>
</WrapperMain>
