import '@/styles/globals.css';
import { GlobalDataProvider } from '@/context/GlobalDataContext';

export default function App({ Component, pageProps }) {
    return (
        <GlobalDataProvider>
            <Component {...pageProps} />
        </GlobalDataProvider>
    );
}
