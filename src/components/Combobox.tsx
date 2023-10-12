'use client';

import * as React from 'react';
import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
} from '@/components/ui/command';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import { Globe } from 'lucide-react';

const languages = [
	{
		value: 'english',
		label: 'English',
	},
	{
		value: 'french',
		label: 'French',
	},
];

export function Combobox() {
	const [open, setOpen] = React.useState(false);
	const [value, setValue] = React.useState(languages[0].value);
	console.log(value);

	return (
		<Popover
			open={open}
			onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant='outline'
					role='combobox'
					aria-expanded={open}
					className='w-[150px] justify-start gap-2 opacity-70'>
					<Globe
						className='h-4 w-4'
						strokeWidth={1}
					/>
					{value
						? languages.find((language) => language.value === value)?.label
						: 'Select language...'}
					<CaretSortIcon className='h-4 w-4 shrink-0 opacity-50 ml-auto' />
				</Button>
			</PopoverTrigger>
			<PopoverContent className='w-[200px] p-0 '>
				<Command>
					<CommandInput
						placeholder='Search language...'
						className='h-9 '
					/>
					<CommandEmpty>No language found.</CommandEmpty>
					<CommandGroup>
						{languages.map((language) => (
							<CommandItem
								key={language.value}
								onSelect={(currentValue) => {
									setValue(currentValue === value ? '' : currentValue);
									setOpen(false);
								}}>
								{language.label}
								<CheckIcon
									className={cn(
										'ml-auto h-4 w-4',
										value === language.value ? 'opacity-100' : 'opacity-0'
									)}
								/>
							</CommandItem>
						))}
					</CommandGroup>
				</Command>
			</PopoverContent>
		</Popover>
	);
}
