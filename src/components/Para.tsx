import { cn } from '@/lib/utils';

const Para = ({ className, children }: ParaProps) => {
	return (
		<p
			className={cn(
				'text-sm md:text-base tracking-wider leading-7 [&:not(:first-child)]:mt-3',
				className
			)}>
			{children}
		</p>
	);
};

export default Para;
