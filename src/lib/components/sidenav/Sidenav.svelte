<script lang="ts">
	import {
		Archive,
		ChartColumnBig,
		ShoppingCart,
		Ticket,
		UsersRound,
		type Icon as IconType
	} from 'lucide-svelte';

	type MenuItem = {
		id: string;
		text: string;
		link: string;
		icon: typeof IconType;
	};

	type Props = {
		page?: string;
		isClose: boolean;
	};

	const menus: MenuItem[] = [
		{
			id: 'dashboard',
			text: 'Dashboard',
			link: '/dashboard',
			icon: ChartColumnBig
		},
		{
			id: 'products',
			text: 'Products',
			link: '/products',
			icon: Archive
		},
		{
			id: 'coupons',
			text: 'Coupons',
			link: '/coupons',
			icon: Ticket
		},
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

	const { page, isClose }: Props = $props();
</script>

<aside
	class={[
		'bg-base-100 sticky top-0 flex h-screen flex-col transition-all duration-300',
		isClose ? 'w-16' : 'w-64'
	]}
>
	<div class="h-16"></div>
	<div>
		<ul class="menu w-full">
			{#each menus as menu (menu.id)}
				{@const Icon = menu.icon}
				<li class="mb-2">
					<a
						href={menu.link}
						class={[
							'rounded-lg transition-all',
							menu.id === page && 'menu-active',
							isClose && 'tooltip tooltip-right',
							isClose ? 'gap-0' : 'gap-2'
						]}
						data-tip={isClose && menu.text}
					>
						<Icon size={20} />
						<span class={`${isClose ? 'text-[0.1px] opacity-0' : 'opacity-100'} transition-all`}
							>{menu.text}</span
						>
					</a>
				</li>
			{/each}
		</ul>
	</div>
</aside>
