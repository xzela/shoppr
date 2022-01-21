import Head from 'next/head'

export default function Header() {
	return (
		<Head>
			<link rel='icon' href='/favicon.ico' />
			<meta
				name='description'
				content='Learn how to build a personal website using Next.js'
			/>
			<meta name='og:title' content='Hello World' />
			<meta name='twitter:card' content='summary_large_image' />
			<title>Some title</title>
		</Head>
	)
};
