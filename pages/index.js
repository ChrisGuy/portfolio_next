import Head from 'next/head';

// Components
import { Header } from '../components/Header';
import { Main } from '../components/Main';
import { About } from '../components/About';
import { Projects } from '../components/Projects';
import { Footer } from '../components/Footer';

export default function Home() {
	return (
		<div className=''>
			<Head>
				<title>Christopher Morgan - Portfolio</title>
				<meta
					name='description'
					content='The web development portfolio of Christopher Morgan'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<header className='w-screen h-auto'>
				<Header />
				<Main />
			</header>
			<About />
			<Projects />
			<Footer />
		</div>
	);
}
