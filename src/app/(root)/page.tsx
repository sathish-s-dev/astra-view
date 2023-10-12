import { Card } from '@/components/Card';
import Hero from '@/components/Hero';
import Newsletter from '@/components/NewsLetter';
import { Subheading } from '@/components/Subheading';
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, Star } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
	return (
		<main className='flex-1 px-4'>
			<Hero />

			{/* <Subheading>Join the Cosmic Community:</Subheading>
			<Para>
				Discover the wonders of the cosmos with us. Explore the latest in space
				discoveries, missions, and technology. Join our cosmic community and
				embark on an interstellar adventure with captivating articles and
				stunning visuals.
			</Para> */}
			<CardSection heading={'Latest Posts'} />
			<CardSection heading={'Favorite Posts'} />
			<CardSection heading={'Special Posts'} />
			<Newsletter />
		</main>
	);
}

function CardSection({ heading }: CardSectionProps) {
	return (
		<div>
			<Subheading className='mb-4'>{heading}</Subheading>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
				<Card
					title='Discover the wonders of the cosmos with us. Explore the latest in space discoveries.'
					body='Discover the wonders of the cosmos with us. Explore the latest in
							space discoveries, missions, and technology. Join our cosmic
							community and embark on an interstellar adventure with captivating
							articles and stunning visuals.'
				/>
				<Card
					title='Discover the wonders of the cosmos with us. Explore the latest in space discoveries.'
					body='Discover the wonders of the cosmos with us. Explore the latest in
							space discoveries, missions, and technology. Join our cosmic
							community and embark on an interstellar adventure with captivating
							articles and stunning visuals.'
				/>
				<Card
					title='Discover the wonders of the cosmos with us. Explore the latest in space discoveries.'
					body='Discover the wonders of the cosmos with us. Explore the latest in
							space discoveries, missions, and technology. Join our cosmic
							community and embark on an interstellar adventure with captivating
							articles and stunning visuals.'
				/>
				<Card
					title='Discover the wonders of the cosmos with us. Explore the latest in space discoveries.'
					body='Discover the wonders of the cosmos with us. Explore the latest in
							space discoveries, missions, and technology. Join our cosmic
							community and embark on an interstellar adventure with captivating
							articles and stunning visuals.'
				/>
				<Card
					title='Discover the wonders of the cosmos with us. Explore the latest in space discoveries.'
					body='Discover the wonders of the cosmos with us. Explore the latest in
							space discoveries, missions, and technology. Join our cosmic
							community and embark on an interstellar adventure with captivating
							articles and stunning visuals.'
				/>
			</div>
		</div>
	);
}
