import Link from 'next/link';
import Image from 'next/future/image';

export const ProjectCard = ({ image, tags, title, excerpt, link, date }) => {
	return (
		<div className='grid grid-rows-[minmax(auto, 1fr) 1fr] overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm relative hover:cursor-pointer hover:scale-105 transition-all duration-200'>
			<Image
				src={image}
				className='object-cover w-full h-64'
				width='100'
				height='100'
				alt=''
			/>
			<div className='p-5 border border-t-0'>
				<p className='mb-3 text-xs font-semibold tracking-wide uppercase'>
					<span className='text-gray-600'>{new Date(date).toDateString()}</span>
				</p>
				<Link href='/'>
					<a
						aria-label='Category'
						title='Visit the East'
						className='inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700'
					>
						{title}
					</a>
				</Link>
				<p className='mb-2 text-sm py-2 font-light text-gray-500'>{excerpt}</p>
				<div className='flex gap-1'>
					{tags.map((tag, i) => {
						return (
							<div
								key={i}
								className='mt-2 mb-5 uppercase text-xs bg-blue-100 rounded-full text-center px-2 py-1'
							>
								{tag}
							</div>
						);
					})}
				</div>
				<Link href={link}>
					<a
						aria-label=''
						className='inline-flex items-center font-semibold transition-colors duration-200 border border-purple-400 rounded-full text-purple-400 hover:text-purple-800 hover:border-purple-800 px-3 py-1'
					>
						Learn more
					</a>
				</Link>
			</div>
		</div>
	);
};
