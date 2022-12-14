import Link from 'next/link';

import { ProjectCard } from './ProjectCard';

const mockProjects = [
	{
		title: 'React Project',
		excerpt:
			'Sed ut perspiciatis unde omnis iste natus error sit sed quia consequuntur magni voluptatem doloremque.',
		image:
			'https://images.pexels.com/photos/2408666/pexels-photo-2408666.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500',
		date: '2022-01-01T00:00:00',
		tags: ['React', 'Javascript', 'HTML', 'css'],
		link: '/',
	},
	{
		title: 'React Project',
		excerpt:
			'Sed ut perspiciatis unde omnis iste natus error sit sed quia consequuntur magni voluptatem doloremque.',
		image:
			'https://images.pexels.com/photos/2408666/pexels-photo-2408666.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500',
		date: '2022-01-01T00:00:00',
		tags: ['React', 'Javascript', 'HTML', 'css'],
		link: '/',
	},
	{
		title: 'React Project',
		excerpt:
			'Sed ut perspiciatis unde omnis iste natus error sit sed quia consequuntur magni voluptatem doloremque.',
		image:
			'https://images.pexels.com/photos/2408666/pexels-photo-2408666.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500',
		date: '2022-01-01T00:00:00',
		tags: ['React', 'Javascript', 'HTML', 'css'],
		link: '/',
	},
];

export const Projects = () => {
	return (
		<section className=''>
			<div className='grid gap-8 lg:grid-cols-3 max-w-sm mx-auto lg:max-w-full relative'>
				{(mockProjects.length > 3
					? mockProjects.slice(0, 3)
					: mockProjects
				).map((project, i) => {
					return (
						<ProjectCard
							key={i}
							image={project.image}
							tags={project.tags}
							title={project.title}
							excerpt={project.excerpt}
							link={project.link}
							date={project.date}
						/>
					);
				})}
			</div>
			<div className='text-right w-full py-5'>
				<Link href='#'>
					<a
						aria-label='Projects'
						title='more projects'
						className='my-3 uppercase inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-700 hover:bg-purple-900 hover:scale-105 focus:shadow-outline focus:outline-none'
					>
						See More
					</a>
				</Link>
			</div>
		</section>
	);
};
