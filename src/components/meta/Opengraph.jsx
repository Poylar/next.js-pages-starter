import Head from 'next/head';
import { useRouter } from 'next/router';

import { baseUrl } from '@/utils/baseUrl';

const Opengraph = ({ data, locales }) => {
    const { locale, asPath, basePath, query } = useRouter();
    const { og_title, og_description, og_image, og_image_alt, og_site_name } =
        data;
    return (
        <Head>
            <meta property="og:type" content="website" />
            <meta property="og:title" content={og_title} />
            <meta property="og:description" content={og_description} />
            <meta property="og:url" content={basePath + asPath} />
            <meta
                property="og:image"
                content={baseUrl(og_image?.replace(/^\/+/, ''))}
            />
            <meta property="og:image:alt" content={og_image_alt} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            {locales?.map((item, index) =>
                item === locale ? (
                    <meta property="og:locale" content={item} key={index} />
                ) : (
                    <meta
                        property="og:locale:alternate"
                        content={item}
                        key={index}
                    />
                ),
            )}
        </Head>
    );
};

export default Opengraph;
