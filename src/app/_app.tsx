import { AppProps } from 'next/app';
import useAuth from './hooks/auth';

function MyApp({ Component, pageProps }: AppProps) {
  const isAuthenticated = useAuth();

  if (!isAuthenticated) {
    return <div>Loading...</div>;
  }

  return <Component {...pageProps} />;
}

export default MyApp;