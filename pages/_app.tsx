// pages/_app.tsx
import { AppProps } from 'next/app';
import Header from '../components/Header'
import Footer from '../components/Footer';
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
