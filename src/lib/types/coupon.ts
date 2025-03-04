export type CouponType = {
	id: string;
	code: string;
	name: string;
	discount_type: string;
	discount_amount: number;
	limit: number;
	expired: number;
	status: string;
	image?: string;
	createdAt: number;
};
