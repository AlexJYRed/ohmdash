import { AppProps } from 'next/app';
import useAuth from './hooks/auth';
import RootLayout from './layout';
import React from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [isAuthenticated, user] = useAuth();

  if (!isAuthenticated) {
    return <div>Loading authentication status...</div>;
  }

  // Pass user information and control functions down to RootLayout via props or context
  return (
    <RootLayout user={user}>
      <Component {...pageProps} />
    </RootLayout>
  );
}

export default MyApp;
