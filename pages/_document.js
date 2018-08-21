import Document, { Head, Main, NextScript } from "next/document";
import styledNormalize from "styled-normalize";
import styles from "styles/index.less";
import styled, { injectGlobal, ServerStyleSheet } from "styled-components";

injectGlobal`

  ${styledNormalize}

  @font-face {
    font-family: 'Luckiest Guy'; /*a name to be used later*/
    src: url('static/fonts/LuckiestGuy.ttf'); /*URL to font*/
  }

`;

const Body = styled.body`
  background-color: #2b7284;
  height: 100%;
  width: 100%;
`;

//   <style dangerouslySetInnerHTML={{ __html: styles }} />
// <link rel='stylesheet' href='https://unpkg.com/antd@3/dist/antd.min.css' />
export default class CustomDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          <title>Interactive Fortnite Map</title>
          <meta charSet="utf-8" />
          <meta name="google" content="notranslate" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="subject" content="A simple interactive Fortnite Map" />
          <link rel="manifest" href="/static/manifest.json" />
          <link
            rel="shortcut icon"
            type="image/png"
            href="/static/icons/favicon.ico"
          />
          <link
            href="https://api.tiles.mapbox.com/mapbox-gl-js/v0.47.0/mapbox-gl.css"
            rel="stylesheet"
          />
          <style dangerouslySetInnerHTML={{ __html: styles }} />
          {this.props.styleTags}
        </Head>
        <Body>
          <Main />
          <NextScript />
        </Body>
      </html>
    );
  }
}
