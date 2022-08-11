import Head from 'next/head';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Christopher Morgan - Portfolio</title>
				<meta
					name='description'
					content='The web development portfolio of Christopher Morgan'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
		</div>
	);
}
