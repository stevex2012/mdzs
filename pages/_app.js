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
        return <Container>
            <Head>
                <link href="../static/css/base.css" rel="stylesheet" />
            </Head>
            {/* <TopNav /> */}
            <Nav />
            <Component {...pageProps} />
            <FloatMenu />
            <Footer />
        </Container>
    }
}