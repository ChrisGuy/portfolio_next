import Head from 'next/head';

// Components
import { Header } from '../components/Header';
import { Main } from '../components/Main';

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
			<header className='w-screen h-screen'>
				<Header />
				<Main />
			</header>
		</div>
	);
}
