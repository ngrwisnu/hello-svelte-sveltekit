<script lang="ts">
	import { ShoppingCart, UsersRound, type Icon as IconType } from 'lucide-svelte';

	type MenuItem = {
		id: string;
		text: string;
		link: string;
		icon: typeof IconType;
	};

	const menus: MenuItem[] = [
		{
			id: 'orders',
			text: 'Orders',
			link: '/orders',
			icon: ShoppingCart
		},
		{
			id: 'customers',
			text: 'Customers',
			link: '/customers',
			icon: UsersRound
		}
	];

	const { page } = $props();
</script>

<aside class="bg-base-100 sticky top-0 flex h-screen w-64 flex-col">
	<div class="h-16"></div>
	<div class="p-4">
		<ul class="menu w-full">
			{#each menus as menu (menu.id)}
				{@const Icon = menu.icon}
				<li class="mb-2">
					<a href={menu.link} class={['rounded-lg', menu.id === page && 'menu-active']}>
						<Icon size={20} />
						{menu.text}
					</a>
				</li>
			{/each}
		</ul>
	</div>
</aside>
