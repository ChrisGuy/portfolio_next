import Link from 'next/link';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const socialLinks = [
	{
		name: 'Facebook',
		link: '#',
		icon: <FaFacebook />,
	},
	{
		name: 'Twitter',
		link: '#',
		icon: <FaTwitter />,
	},
	{
		name: 'LinkedIn',
		link: '#',
		icon: <FaLinkedin />,
	},
];

export const Footer = () => {
	return (
		<footer className='bg-white' aria-labelledby='footer-heading'>
			<h2 id='footer-heading' className='sr-only'>
				Footer
			</h2>

			<div className='px-5 py-12 mx-auto bg-gray-50 max-w-7xl sm:px-6 md:flex md:items-center md:justify-between lg:px-20'>
				<div className='flex justify-center mb-8 space-x-6 md:order-last md:mb-0'>
					{socialLinks.map((social, i) => {
						return (
							<Link key={i} href={social.link}>
								<a className='text-gray-400 hover:text-gray-500'>
									<span className='sr-only'>Facebook</span>
									{social.icon}
								</a>
							</Link>
						);
					})}
				</div>

				<div className='mt-8 md:mt-0 md:order-1'>
					<span className='mt-2 text-sm font-light text-gray-500'>
						Copyright © {new Date().getFullYear()}
					</span>
				</div>
			</div>
		</footer>
	);
};
