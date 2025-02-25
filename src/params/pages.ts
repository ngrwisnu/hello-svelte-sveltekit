import type { ParamMatcher } from '@sveltejs/kit';

const pages = ['', 'orders', 'customers'];

export const match = ((param: string) => {
	return pages.includes(param);
}) satisfies ParamMatcher;
