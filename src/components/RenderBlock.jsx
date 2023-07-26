import Sections from '@/components/sections';

const RenderBlock = ({ id, type, data }) => {
    const Component = Sections[type];

    if (!Component) return null;
    return <Component data={data} id={id} />;
};

export default RenderBlock;
