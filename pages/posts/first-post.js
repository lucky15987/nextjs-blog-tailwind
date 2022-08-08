import Link from 'next/link';
import Head from 'next/head';

export default function FirstPost() {
    return (
        <>
            <Head>
                <title>First Post</title>
                <script src="https://connect.facebook.net/en_US/sdk.js"/>
            </Head>
            <h1 className='font-bold text-5xl'>First Post</h1>
            <h2>
                <Link href="/">
                    <a className='text-4xl underline'>Back to Home</a>
                </Link>
            </h2>
        </>
    );
}