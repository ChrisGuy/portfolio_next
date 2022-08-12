import Link from 'next/link';
import Image from 'next/image';

import dp from '../public/profile_c.png';

export const Main = () => {
	return (
		<div className='hero mx-auto max-w-xl h-auto max-h-screen md:max-w-full lg:max-w-screen-xl py-14 md:py-36 md:px-24 lg:px-8 lg:h-4xl flex flex-col justify-center'>
			<div className=' mx-auto  w-full p-0'>
				<div className='flex flex-col mb-16 items-center justify-center sm:text-center mb-0 w-full'>
					<Link href='/'>
						<a className=' mb-6 mx-auto inline-flex justify-center'>
							<div className='animate-ping absolute opacity-75 inline-flex items-start justify-start w-24 h-24 rounded-full'>
								<Image src={dp} alt='Christopher Morgan' />
							</div>
							<div className='relative flex items-center justify-center w-36 h-36 rounded-full'>
								<Image src={dp} alt='Christopher Morgan' />
							</div>
						</a>
					</Link>
					<div className='w-full mb-10 md:mx-auto text-center md:mb-12'>
						<h2 className='max-w-2xl mb-6 mt-0 text-center font-sans font-bold leading-none tracking-tight text-gray-900 text-4xl mt-4 mb-6 md:text-7xl md:mx-auto lg:py-6'>
							<span className='relative inline-block text-purple-400'>
								<svg
									viewBox='0 0 52 24'
									fill='currentColor'
									className='absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block'
								>
									<defs>
										<pattern
											id='e77df901-b9d7-4b9b-822e-16b2d410795b'
											x='0'
											y='0'
											width='.135'
											height='.30'
										>
											<circle cx='1' cy='1' r='.7' />
										</pattern>
									</defs>
									<rect
										fill='url(#e77df901-b9d7-4b9b-822e-16b2d410795b)'
										width='52'
										height='24'
									/>
								</svg>
								<span className='text-purple-700'>Hey,</span>
							</span>{' '}
							I&apos;m Chris!
						</h2>
						<p className='text-center text-base text-gray-700 md:text-lg'>
							Frontend developer in React.
						</p>
					</div>
					<div className='text-center'>
						<Link href='#about'>
							<a
								aria-label='About Me'
								title='About'
								className='uppercase inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-700 hover:bg-purple-900 hover:scale-105 focus:shadow-outline focus:outline-none'
							>
								Find out more
							</a>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
