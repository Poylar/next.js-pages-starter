import { getGlobalData, getPageData } from '@/api/api';
import Layout from '@/components/Layout';
import Opengraph from '@/components/meta/Opengraph';
import Seo from '@/components/meta/Seo';
import RenderBlock from '@/components/RenderBlock';

const Page = ({ data, locales, globalProps }) => {
    return (
        <Layout globalProps={globalProps}>
            <Seo data={data.seo} />
            {data.blocks.map((block, index) => (
                <RenderBlock
                    key={index}
                    data={block.values}
                    type={block.chunk}
                />
            ))}
        </Layout>
    );
};

export async function getStaticProps({ locale, locales }) {
    const data = await getPageData(locale, 'home');
    const globalProps = await getGlobalData(locale);

    return {
        props: {
            data,
            globalProps,
            locales,
        },
        revalidate: 1,
    };
}

export default Page;
