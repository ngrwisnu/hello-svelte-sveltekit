export const getExpiredTime = (expired: number) => {
	const curr = new Date().getTime();

	if (curr > expired) {
		return 'expired';
	}

	const options: Intl.DateTimeFormatOptions = {
		month: 'numeric',
		year: 'numeric',
		day: '2-digit'
	};

	return new Date(expired).toLocaleString('id-ID', options);
};
