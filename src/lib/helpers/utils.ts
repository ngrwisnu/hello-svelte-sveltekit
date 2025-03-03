/* eslint-disable @typescript-eslint/no-explicit-any */
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: any[]) {
	return twMerge(inputs);
}
