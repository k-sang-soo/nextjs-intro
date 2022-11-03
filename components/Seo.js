import Head from 'next/head';

export default function Seo({ title }) {
    // title element received an array with more than 1 element as children 에러 수정
    return (
        <Head>
            <title>{`${title} | Next Movies`}</title>
        </Head>
    );
}
