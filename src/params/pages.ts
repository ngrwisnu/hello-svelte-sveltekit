import type { ParamMatcher } from '@sveltejs/kit';

const pages = ['dashboard', 'products', 'coupons', 'orders', 'customers'];

export const match = ((param: string) => {
	return pages.includes(param);
}) satisfies ParamMatcher;
