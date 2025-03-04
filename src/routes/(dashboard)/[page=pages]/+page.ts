import type { PageLoad } from '../../$types';
import users from '$lib/assets/users.json';
import coupons from '$lib/assets/coupons.json';

export const load: PageLoad = () => {
	return {
		users,
		orders: [],
		products: [],
		coupons
	};
};
