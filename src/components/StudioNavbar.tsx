import { Undo2 } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const StudioNavbar = (props: any) => {
	return (
		<div>
			<Link
				href={'/'}
				className='text-sm text-brand-400 flex capitalize p-4 gap-2'>
				<Undo2 size={20} />
				go to website
			</Link>
			<>{props.renderDefault()}</>
		</div>
	);
};

export default StudioNavbar;
