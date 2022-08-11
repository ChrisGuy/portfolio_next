import Head from 'next/head';

// Components
import { Header } from '../components/Header';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Christopher Morgan - Portfolio</title>
				<meta
					name='description'
					content='The web development portfolio of Christopher Morgan'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header />
		</div>
	);
}
