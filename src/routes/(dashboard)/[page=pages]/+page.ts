import type { PageLoad } from '../../$types';
import users from '$lib/assets/users.json';

export const load: PageLoad = () => {
	return {
		users,
		orders: []
	};
};
