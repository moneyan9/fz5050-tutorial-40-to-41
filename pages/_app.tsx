import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';


import { Provider } from 'react-redux';
import { store } from '../store';

export default function MyApp(props: AppProps) {
    const { Component, pageProps } = props;

    React.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement!.removeChild(jssStyles);
        }
    }, []);

    return (
        <React.Fragment>
            <Head>
                <title>My page</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            </Head>

            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </React.Fragment>
    );
}