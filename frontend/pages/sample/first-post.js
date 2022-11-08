import Link from 'next/link' 
import Head from 'next/head'
import Layout from '../../components/layouts'

export default function FirstPost() {
    return (
    <Layout>
        <Head>
            <title>First (test) Post</title>
        </Head>


        <h1>
            This is a test page stored in 'pages/posts/first-post'
        </h1>
        <h6>
            This makes routing so much easier! Thanks NEXT.JS! <br/>
            BTW, it preloads the anything with the <Link href="/"><a>link tag</a></Link> 
        </h6>
        <h1>
            Sample Link to go home below
            Syntax is similar to 'a' tags 
        </h1>

        <h2>
        <Link href="/"><a>Back to home</a></Link>
        </h2>

    </Layout>)
}