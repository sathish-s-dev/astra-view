import Image from 'next/image';
import { Subheading } from './Subheading';
import Para from './Para';

const Hero = () => {
	return (
		<div className='flex flex-col md:flex-row py-6 md:py-16 tracking-widest'>
			<div className='flex flex-[1.5] flex-col space-y-2'>
				<h1 className='scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl text-cyan-800 dark:text-cyan-100'>
					Sathish&apos;s Daily Space Blog
				</h1>

				<Subheading>Beyond the Stars: Exploring the Cosmos.</Subheading>
				<Para className='first-letter:text-2xl'>
					Welcome to &quot;Beyond the Stars: Exploring the Cosmos,&quot; a
					captivating journey through the vastness of space and the wonders that
					lie beyond. Our blog is your portal to the universe, where we unravel
					the mysteries of the cosmos, from distant galaxies to our own solar
					system.
				</Para>
				<Para>
					We&apos;re stargazers, astronomers, and cosmic enthusiasts sharing our
					passion for the celestial wonders that fill the night sky. Join us as
					we chart our course through nebulas, galaxies, and exoplanets,
					unveiling the beauty and complexity of the cosmos.
				</Para>
				<Para>
					Through engaging articles, captivating visuals, and thought-provoking
					insights, &quot;AstroSpectra&quot; aims to broaden your cosmic
					horizons. Whether you&apos;re a seasoned astronomer or a newcomer to
					the wonders of space, we invite you to explore the boundless reaches
					of the universe with us and become a part of our celestial expedition.
					Let&apos;s venture into the unknown and witness the grandeur of the
					cosmic tapestry together.
				</Para>
			</div>
			<div className='flex-1 relative flex-col flex justify-center p-6'>
				<Image
					src={'/hero_space.jpg'}
					width={500}
					height={600}
					alt='hero space'
					priority
					className='rounded-2xl w-full h-full'
				/>

				<span className='text-[10px] text-slate-100/10 absolute'>
					Photo by{' '}
					<a href='https://unsplash.com/@aldebarans?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'>
						Aldebaran S
					</a>{' '}
					on{' '}
					<a href='https://unsplash.com/photos/zAm8YFpCCsc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'>
						Unsplash
					</a>
				</span>
			</div>
		</div>
	);
};

export default Hero;
