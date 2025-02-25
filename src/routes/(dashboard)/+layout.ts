import type { LayoutLoad } from './$types';

export const load: LayoutLoad = ({ params }) => {
	return {
		page: params.page
	};
};

export const ssr = false;
