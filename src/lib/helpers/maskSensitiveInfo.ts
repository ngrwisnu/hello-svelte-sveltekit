export const maskSensitiveInfo = (text: string, type: 'email' | 'phone') => {
	switch (type) {
		case 'phone':
			return maskPhone(text);
		case 'email':
			return maskEmail(text);
		default:
			break;
	}
};

function maskPhone(phone: string) {
	const last4digit = phone.slice(-4);

	return last4digit.padStart(phone.length, '*');
}

function maskEmail(email: string) {
	const emailName = email.slice(0, email.indexOf('@'));
	const address = email.slice(email.indexOf('@'));
	const first2digit = emailName.slice(0, 2);

	const mask = first2digit.padEnd(emailName.length, '*');

	return `${mask}${address}`;
}
