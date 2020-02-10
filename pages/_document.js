import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  setGoogleTags() {
    return {
      __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('js', new Date()); gtag('config', 'UA-158065200-1');`
    };
  }

  render() {
    return (
      <Html className='no-js' lang='en'>
        <Head>
          <script
            async
            src='https://www.googletagmanager.com/gtag/js?id=UA-158065200-1'
          />
          {/* We call the function above to inject the contents of the script tag */}
          <script dangerouslySetInnerHTML={this.setGoogleTags()} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
