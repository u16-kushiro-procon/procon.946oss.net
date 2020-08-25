import Page from "../components/page";
import {
  Jumbotron,
  JumbotronHead,
  JumbotronLead,
  Contact,
  ContactButton,
  Title,
  Text
} from "../styles/pages";

export default () => (
  <Page title="U-16プログラミングコンテスト釧路大会">
    <Jumbotron>
      <JumbotronHead>2020 第8回大会</JumbotronHead>
      <JumbotronLead>
        10月25日 (日) オンライン開催
      </JumbotronLead>
    </Jumbotron>

    <section>
      <Title>2020オンライン開催決定</Title>
      <Text>
        8/31からオンラインでの講習会の開催を予定しています。詳細決定次第更新予定です。
      </Text>
    </section>

    <Contact>
      <ContactButton
        href="https://spectrum.chat/946oss/procon?tab=posts"
        target="_blank"
        backgroundColor="#999"
        size="normal"
      >
        質問はこちら
      </ContactButton>
      <ContactButton
        href="https://m.me/u16.kushiro.procon"
        target="_blank"
        backgroundColor="#999"
        size="normal"
      >
        お問い合わせはこちら
      </ContactButton>
    </Contact>
  </Page>
);
