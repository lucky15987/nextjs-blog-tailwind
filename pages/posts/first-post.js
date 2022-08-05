import Link from 'next/link';

export default function FirstPost() {
    return (
        <>
            <h1 className='font-bold text-5xl'>First Post</h1>
            <h2>
                <Link href="/">
                    <a className='text-4xl underline'>Back to Home</a>
                </Link>
            </h2>
        </>
    );
}