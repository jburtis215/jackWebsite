import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div>
                
            </div>
            <section className={utilStyles.headingMd}>
                <p>Jack Burtis here, learning how to code in a new language</p>
                <p>
                    (This is a sample website - you’ll be building a site like this on{' '}
                    <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
                </p>
            </section>
        </Layout>
    )
}
