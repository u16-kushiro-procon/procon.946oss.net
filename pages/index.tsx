import Page from "../components/page";
import {
  Jumbotron,
  JumbotronHead,
  JumbotronLead,
  Contact,
  ContactButton,
  Text
} from "../styles/pages";

export default () => (
  <Page title="U-16プログラミングコンテスト釧路大会">
    <Jumbotron>
      <JumbotronHead>第7回大会開催決定！</JumbotronHead>
      <JumbotronLead>
        10月12日 (土) 釧路市生涯学習センター まなぼっと
      </JumbotronLead>
    </Jumbotron>

    <Text>
      ただいま事前講習会などの調整中ですので、いましばらくお待ちください！
    </Text>

    <Contact>
      <ContactButton
        href="https://spectrum.chat/946oss/procon?tab=posts"
        target="_blank"
      >
        質問はこちら
      </ContactButton>
      <ContactButton
        href="https://m.me/u16.kushiro.procon"
        target="_blank"
        backgroundColor="#999"
      >
        お問い合わせはこちら
      </ContactButton>
    </Contact>
  </Page>
);
