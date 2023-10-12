import Header from '@/components/Header';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
	title: 'blog pro | admin',
	description: 'Generated by create next app',
};

export default function StudioLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={''}>
				<div
					className={cn('mx-auto flex flex-col w-full min-h-screen relative')}>
					{children}
				</div>
			</body>
		</html>
	);
}