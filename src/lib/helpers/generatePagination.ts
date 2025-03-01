export const generatePagination = (current: number, total: number, size: number = 10): string[] => {
	total = Math.ceil(total / size);

	if (total <= 7) {
		return Array.from({ length: total }, (_, i) => `${i + 1}`);
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const pages: Array<any> = [1];

	let midArr = current > total - 3 ? total - 3 : current < 4 ? 4 : current;

	for (let i = midArr - 2; i <= midArr + 2; i++) {
		pages.push(i);

		if (current > 4 && current <= total - 3) {
			midArr = current;
		}
	}

	if (pages[1] - 1 !== 1) {
		pages[1] = '...';
	}

	if (pages[5] + 1 !== total) {
		pages[5] = '...';
	}

	pages.push(total);

	return pages.map((page) => page.toString());
};
