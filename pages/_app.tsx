import { AppProps } from 'next/app';
import '../styles/fonts/fonts.css';
import '../styles/global.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
