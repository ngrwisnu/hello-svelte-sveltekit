import type { AddressType } from './address';
import type { CouponType } from './coupon';
import type { ProductType } from './product';
import type { UserType } from './user';

export type OrderType = {
	order_id: string;
	customer: Partial<UserType>;
	status: 'success' | 'pending' | 'pre_order' | 'reject';
	payment_status: 'settlement' | 'pending';
	payment_type: 'cash' | 'bank_transfer';
	createdAt: number;
	total_price: number;
	tracking_number?: string;
	items: (Partial<ProductType> & {
		order_number: number;
	})[];
	address: Partial<AddressType>;
	discount?: Partial<CouponType>;
};
