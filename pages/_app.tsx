// pages/_app.tsx
import { AppProps } from "next/app";
import React from "react";
import Head from "next/head";
import "../styles/forInitPage.css";
import "../styles/lab2.css";
import "../styles/abMe.css";
import "../styles/portfol.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="Kostya Zimin" />
        <title>My page</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
