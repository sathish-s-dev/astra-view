import { cn } from '@/lib/utils';
import React from 'react';

export const Subheading = ({ children, className }: SubheadingProps) => {
	return (
		<h3
			className={cn(
				'scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight transition-colors first:mt-0 md:text-xl text-cyan-800 dark:text-cyan-100',
				className
			)}>
			{children}
		</h3>
	);
};

