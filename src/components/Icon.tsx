import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

interface IconProps extends React.HTMLAttributes<HTMLElement> {}

const Icon = ({ className }: IconProps) => {
	return (
		<Link href='/'>
			<h1
				className={cn(
					'text-2xl font-bold dark:text-white uppercase',
					className
				)}>
				Astro <span className='text-brand-400'>Spectra</span>
			</h1>
		</Link>
	);
};

export default Icon;
