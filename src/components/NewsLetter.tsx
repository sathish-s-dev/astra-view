import React, { useState } from 'react';
import { Subheading } from './Subheading';
import Para from './Para';

export default function Newsletter() {
	return (
		<form className=' py-8 md:py-12 grid md:px-0'>
			<div className='lg:flex flex-col justify-start'>
				<Subheading>Newsletter</Subheading>
				<Para>
					Sign up for our newsletter and get weekly updates. We only send emails
					about our latest products on the market once a week every Friday.
				</Para>
				<div className='mt-8 md:flex justify-start md:gap-4'>
					<input
						type='email'
						placeholder='Your Email'
						className='placeholder-slate-600 dark:text-slate-200 w-full md:w-1/2 p-3 grid place-items-center border rounded-md focus:outline-none dark:placeholder-slate-200'
					/>
					<button className='w-full md:w-auto bg-cyan-600 text-white px-8 py-2 border rounded-md hover:bg-cyan-700 grid place-items-center font-semibold mt-4 md:mt-0 focus:outline-none focus:ring-2 focus:ring-cyan-700 focus:ring-opacity-50'>
						Subscribe
					</button>
				</div>
				<p className='pt-4 text-xs text-slate-600 dark:text-slate-200'>
					Read our{' '}
					<span className='cursor-pointer no-underline hover:underline hover:text-cyan-400'>
						privacy policy
					</span>
				</p>
			</div>
		</form>
	);
}
