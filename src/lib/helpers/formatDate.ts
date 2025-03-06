export const formatDate = (time: number) => {
	const date = new Date(time);

	const options: Intl.DateTimeFormatOptions = {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	};

	return date.toLocaleDateString('id-ID', options);
};
