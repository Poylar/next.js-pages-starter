import Logo from '@/components/ui/Logo';
import { useGlobalData } from '@/context/GlobalDataContext';

const Header = () => {
    const { globalData } = useGlobalData();

    return (
        <header className="py-8 px-16 flex itesm-center justify-between">
            <Logo />
            <div className="flex gap-2"></div>
        </header>
    );
};

export default Header;
