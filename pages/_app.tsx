// pages/_app.tsx
import { AppProps } from 'next/app';
import React from 'react';
import '../styles/forInitPage.css';
import '../styles/lab2.css'
import '../styles/abMe.css'
import '../styles/portfol.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
