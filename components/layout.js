import Head from 'next/head'
import Navbar from './navbar'

const SITE_TITLE = 'shoppr'

export default function Layout({ children, home }) {
  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='description'
          content='shoppr'
        />
        <meta name='og:title' content={SITE_TITLE} />
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Shoppr</title>
      </Head>
      <Navbar />
      <main>{children}</main>
    </>
  )
};
