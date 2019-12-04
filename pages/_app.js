import App, { Container } from 'next/app'
import React from 'react';
import Head from 'next/head'
import { TopNav,Nav, Footer, FloatMenu } from '../components';
export default class MyApp extends App {
    static async getInitialProps({ Component, router, ctx }) {
        let pageProps = {}

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return { pageProps }
    }

    render() {
        const { Component, pageProps } = this.props
        return <React.Fragment>
            <Head>
                <link href="../static/css/base.css" rel="stylesheet" />
                <link href="../static/bitbug_favicon.ico" rel="shortcut icon"/>
            </Head>
            {/* <TopNav /> */}
            <Nav />
            <Component {...pageProps} />
            <FloatMenu />
            <Footer />
        </React.Fragment>
    }
}