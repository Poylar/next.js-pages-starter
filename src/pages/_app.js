import '@/styles/globals.css';
import { GlobalDataProvider } from '@/context/GlobalData';

export default function App({ Component, pageProps }) {
    return (
        <GlobalDataProvider>
            <Component {...pageProps} />
        </GlobalDataProvider>
    );
}
