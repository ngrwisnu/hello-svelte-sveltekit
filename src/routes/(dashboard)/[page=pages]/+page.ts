import type { PageLoad } from '../../$types';
import users from '$lib/assets/users.json';
import coupons from '$lib/assets/coupons.json';
import products from '$lib/assets/products.json';

export const load: PageLoad = () => {
	return {
		users,
		orders: [],
		products,
		coupons
	};
};
