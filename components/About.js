import Link from 'next/link';

export const About = () => {
	return (
		<section id='about' className='bg-slate-100'>
			<div className='grid gap-10 lg:grid-cols-2 w-5/6 mx-auto'>
				<div className='flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg'>
					<div className='max-w-xl mb-6'>
						<h2 className='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
							Let me tell you <br className='hidden md:block' />a little about{' '}
							<span className='inline-block text-deep-purple-accent-400'>
								me
							</span>
						</h2>
						<p className='text-base text-gray-700 md:text-lg'>
							Sed ut perspiciatis unde omnis iste natus error sit voluptatem
							accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
							quae. explicabo.
						</p>
					</div>
					<div>
						<Link href='#about'>
							<a
								aria-label='About Me'
								title='About'
								className='uppercase inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-700 hover:bg-purple-900 hover:scale-105 focus:shadow-outline focus:outline-none'
							>
								My Projects
							</a>
						</Link>
					</div>
				</div>
				<div className='flex items-center justify-center -mx-4 lg:pl-8'>
					<div className='flex flex-col items-end px-3'>
						<img
							className='object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56'
							src='https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260'
							alt=''
						/>
						<img
							className='object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40'
							src='https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260'
							alt=''
						/>
					</div>
					<div className='px-3'>
						<img
							className='object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80'
							src='https://images.pexels.com/photos/3182739/pexels-photo-3182739.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500'
							alt=''
						/>
					</div>
				</div>
			</div>
		</section>
	);
};
