import Link from "next/link";
import Head from "next/head";
import Layout from '../../components/templates/layout'
export default function FirstPost() {
    return (
        <>
            <Layout>
            <Head>
                <title>First page</title>
            </Head>
            <h1>First Post</h1>
            <h2>
                <Link href="/">
                    <a>Back Home</a>
                </Link>
            </h2>

        </Layout>
        </>
    )
}
