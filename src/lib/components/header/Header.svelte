<script lang="ts">
	import { LogOut, Menu } from 'lucide-svelte';
	import Button from '../ui/Button.svelte';

	type Props = {
		sidenavHandler: () => void;
	};

	const { sidenavHandler }: Props = $props();
</script>

<header>
	<div class="navbar bg-base-100 p-4 shadow-sm">
		<div class="flex-none">
			<button
				class="btn btn-square btn-ghost border-none bg-transparent outline-0"
				onclick={sidenavHandler}
			>
				<Menu />
			</button>
		</div>
		<div class="ml-4 flex-1">
			<a href="/" class="text-xl font-semibold"> Dashboard </a>
		</div>
		<div class="flex-none">
			<div class="dropdown dropdown-hover dropdown-end">
				<div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
					<div class="w-10 rounded-full">
						<img
							alt="Tailwind CSS Navbar component"
							src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
						/>
					</div>
				</div>
				<ul class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow">
					<Button class="justify-start text-red-500"><LogOut size={20} /> Logout</Button>
				</ul>
			</div>
		</div>
	</div>
</header>
