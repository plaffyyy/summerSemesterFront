// pages/_app.tsx
import { AppProps } from 'next/app';
import React from 'react';
import '/summerSemesterFront/styles/forInitPage.css';
import '/summerSemesterFront/styles/lab2.css'
import '/summerSemesterFront/styles/abMe.css'
import '/summerSemesterFront/styles/portfol.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
