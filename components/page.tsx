import Head from "next/head";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { FacebookProvider, Page, CustomChat } from "react-facebook";

// #cf121b
// #58090d
// #870e13
// #b61119
// #7d7d7d
// #979797

const GlobalStyle = createGlobalStyle`
  ${reset}

  html {
    font-family: Avenir, Yu Gothic Medium, 游ゴシック Medium, YuGothic, 游ゴシック体, sans-serif;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
  }
`;

const Header = styled.header`
  background-color: #cf121b;
  color: #fff;

  h1 {
    font-size: x-large;
    font-weight: bold;
    padding: 1rem;

    @media screen and (max-width: 699px) {
      font-size: large;
    }
  }
`;

const Pad = styled.div`
  padding: 1rem;
`;

const Footer = styled.footer`
  padding: 1rem;
  border-top: 3px solid #cf121b;
  color: #999;
`;

export default ({ title, children }) => {
  return (
    <>
      <GlobalStyle />

      <Head>
        <meta name="theme-color" content="#cf121b" />
        <title>{title}</title>
      </Head>

      <Header>
        <h1>U-16 プログラミングコンテスト 釧路大会</h1>
      </Header>

      <FacebookProvider
        appId="457121605076660"
        language="ja_JP"
        chatSupport={true}
      >
        <>
          {children}
          <Pad>
            <Page
              href="https://www.facebook.com/u16.kushiro.procon"
              width={280}
              hideCover={false}
            />
          </Pad>
          <CustomChat
            pageId="104577466864466"
            themeColor="#cf121b"
            loggedInGreeting="こんにちは、何か質問があれば気軽にどうぞ！"
            loggedOutGreeting="こんにちは、何か質問があれば気軽にどうぞ！"
          />
        </>
      </FacebookProvider>

      <Footer>
        Copyright &copy; 2019 U-16 プログラミングコンテスト釧路大会 実行委員会,
        All rights reserved.
      </Footer>
    </>
  );
};
