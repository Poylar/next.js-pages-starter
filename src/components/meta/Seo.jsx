import Head from 'next/head';
import { NextSeo } from 'next-seo';

const Seo = ({ data }) => {
    return <NextSeo title={data.title} />;
};

export default Seo;
