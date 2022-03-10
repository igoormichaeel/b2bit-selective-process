import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import { AuthProvider } from '../contexts/AuthContext';
import { GlobalStyle } from '../styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress
        color="#02274f"
        startPosition={0.3}
        stopDelayMs={200}
        height={5}
      />
      <AuthProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </AuthProvider>
    </>
  );
}

export default MyApp;
