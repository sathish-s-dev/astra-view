import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';
import { ModeToggle } from '@/components/ModeToggle';
import { navItems } from '@/constants';
import Icon from './Icon';

const Header = () => {
	return (
		<header className='flex justify-between items-center p-4 w-full sticky top-0 z-10 bg-slate-900/5 backdrop-blur-md'>
			<div>
				<Icon />
			</div>
			<div className='flex items-center md:space-x-24'>
				<nav className='flex items-center space-x-4'>
					{navItems.map((item) => (
						<Link
							href={item.href}
							key={item.name}>
							<Button
								variant={'ghost'}
								size={'sm'}>
								{item.name}
							</Button>
						</Link>
					))}
				</nav>

				<ModeToggle />
			</div>
		</header>
	);
};

export default Header;
