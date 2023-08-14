import { useEffect } from 'react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { useGlobalData } from '@/context/GlobalData';

const Layout = ({ children, globalProps }) => {
    const { changeGlobalData } = useGlobalData();

    useEffect(() => {
        changeGlobalData(globalProps);
    });
    return (
        <div>
            <Header globalProps={globalProps} />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
