<script lang="ts">
	import type { UserType } from '$lib/types/user';
	import { PenLine, Search } from 'lucide-svelte';
	import WrapperMain from '$lib/components/ui/WrapperMain.svelte';
	import Input from '$lib/components/ui/Input.svelte';
	import Table from '$lib/components/ui/Table.svelte';
	import Pagination from '$lib/components/ui/Pagination.svelte';

	type Props = {
		users: {
			data: UserType[];
		};
	};

	const { users }: Props = $props();
	let dataLength = $derived(users.data.length);

	let searchText = $state('');
	let selectedUsers = $derived.by(() => {
		return users.data.filter((user) =>
			user.username.toLowerCase().includes(searchText.toLowerCase())
		);
	});
</script>

<WrapperMain>
	{#snippet title()}
		<h1>Customers</h1>
	{/snippet}
	<div class="flex w-full">
		<div class="input-wrapper relative w-full lg:basis-1/4">
			<Search class="absolute top-2.5 left-4 z-1 text-slate-500" size={20} />
			<Input type="text" bind:value={searchText} class="pl-12" placeholder="Search by username" />
		</div>
	</div>
	<div class="w-full">
		<div class="rounded-box bg-base-100 mt-4 w-full overflow-x-auto">
			<Table>
				{#snippet header()}
					<th>Username</th>
					<th>Email</th>
					<th>Role</th>
					<th></th>
				{/snippet}

				{#if !selectedUsers.length}
					<tr>
						<td colspan="4" class="text-center">User doesn't exist</td>
					</tr>
				{:else}
					{#each selectedUsers as u (u.id)}
						<tr>
							<td>{u.username}</td>
							<td>{u.email}</td>
							<td>{u.role}</td>
							<td class="flex flex-wrap items-center justify-center gap-2">
								<a
									href={`/customers/update/${u.id}`}
									class="flex size-9 items-center justify-center hover:cursor-pointer"
								>
									<PenLine size={20} />
								</a>
							</td>
						</tr>
					{/each}
				{/if}
			</Table>
		</div>
	</div>
	<div class="mt-4 flex w-full justify-center sm:justify-end">
		<Pagination length={dataLength} />
	</div>
</WrapperMain>
