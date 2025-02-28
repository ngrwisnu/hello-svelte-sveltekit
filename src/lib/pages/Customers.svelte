<script lang="ts">
	import type { UserType } from '$lib/types/user';
	import { EllipsisVertical } from 'lucide-svelte';
	import WrapperMain from '$lib/components/ui/WrapperMain.svelte';
	import Input from '$lib/components/ui/Input.svelte';

	type Props = {
		users: UserType[];
	};

	const { users }: Props = $props();

	let searchText = $state('');
	let selectedUsers = $derived.by(() => {
		return users.filter((user) => user.username.toLowerCase().includes(searchText.toLowerCase()));
	});

	const actionHandler = (id: string) => {
		alert(`clicked: ${id}`);
	};
</script>

<WrapperMain>
	<h1>Customers</h1>
	<div class="mt-8 flex w-full">
		<Input type="text" bind:value={searchText} class="lg:basis-1/4" placeholder="Search username" />
	</div>
	<div class="w-full overflow-x-hidden">
		<div class="rounded-box bg-base-100 mt-4 w-full">
			<table class="table">
				<thead>
					<tr>
						<th>Username</th>
						<th>Email</th>
						<th>Role</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{#if !selectedUsers.length}
						<tr><td colspan="4" class="text-center">User doesn't exist</td></tr>
					{/if}
					{#each selectedUsers as user (user.id)}
						<tr>
							<td>{user.username}</td>
							<td>{user.email}</td>
							<td>{user.role}</td>
							<th>
								<button class="size-9 hover:cursor-pointer" onclick={() => actionHandler(user.id)}>
									<EllipsisVertical size={20} />
								</button>
							</th>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
</WrapperMain>
