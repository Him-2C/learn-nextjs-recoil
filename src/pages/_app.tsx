import React from 'react';
import {AppProps} from 'next/app';
import {RecoilRoot} from 'recoil';

import '../styles/globals.css';

const MyApp = (ctx: AppProps) => {
  const {Component, pageProps} = ctx;
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
};

export default MyApp;
