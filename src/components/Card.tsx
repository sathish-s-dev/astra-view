import { ArrowRight, Heart, Share2, Star } from 'lucide-react';
import { Button } from './ui/button';
import Image from 'next/image';
import Link from 'next/link';

export function Card({ title, body }: CardProps) {
	return (
		<div className='max-w-sm w-full min-h-max text-slate-600 dark:text-slate-100 shadow-lg rounded-2xl overflow-clip cursor-pointer group'>
			<div className='flex items-center justify-between w-full'>
				<div className='flex flex-col w-full rounded shadow'>
					<div className='overflow-hidden relative'>
						<Image
							src={'/hero_space.jpg'}
							alt='space'
							width={450}
							height={350}
							className='w-full h-full hover:scale-110 group-hover:scale-110 transition-transform duration-250'
						/>
						<div className='absolute z-[250] top-4 right-4 bg-white p-2 rounded-full'>
							<Star className='text-cyan-400 hover:scale-110 active:scale-95' />
						</div>
					</div>
					<div className='w-full flex gap-4 flex-col dark:border-slate-700/50 p-3 py-4 border-t lg:border-t-0 lg:border-r lg:border-l lg:rounded-r dark:bg-slate-900 bg-slate-100'>
						<h4 className='text-base line-clamp-2 font-semibold'>{title}</h4>
						<p className='text-sm text-slate-500 pl-1 line-clamp-2'>{body}</p>
						<div className='flex  items-center justify-between'>
							<Button className='text-slate-100  bg-cyan-500 hover:bg-cyan-500/90 w-fit'>
								<Link
									href={'/'}
									className='items-center flex justify-center'>
									Read More
									<ArrowRight className='group-hover:translate-x-2 transition-all duration-400 text-slate-100 h-4' />
								</Link>
							</Button>
							<div className='flex gap-5'>
								<div className='flex flex-col items-center gap-1'>
									<Heart className='text-cyan-400' />
									<span className='text-[10px] text-slate-300'>400</span>
								</div>
								<div className='flex flex-col items-center gap-1'>
									<Share2 className='text-cyan-400' />
									<span className='text-[10px] text-slate-300'>10</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
