import React from 'react';
import {AppProps} from 'next/app';
import '../styles/globals.css';

const MyApp = (ctx: AppProps) => {
  const {Component, pageProps} = ctx;
  return <Component {...pageProps} />;
};

export default MyApp;
