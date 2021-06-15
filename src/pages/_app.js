import React from "react";
import App from "next/app";
import Head from "next/head";

// import global styles
import "styles/global.css";

export default class MyApp extends App {
	static async getInitialProps({ Component, router, ctx }) {
		let pageProps = {};

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}
		return { pageProps };
	}

	render() {
		const { Component, pageProps } = this.props;
		return (
			<>
				<Head>
					<title>Blitzleads</title>
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap"
						rel="stylesheet"
					/>

					<meta charSet="utf-8" />
					<meta name="theme-color" content="#000000" />
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1, shrink-to-fit=no"
					/>
					<link rel="shortcut icon" href="/images/favicon.ico" />
				</Head>{" "}
				<Component {...pageProps} />{" "}
			</>
		);
	}
}
