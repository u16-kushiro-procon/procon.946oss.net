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
      <JumbotronHead>2019 第7回大会</JumbotronHead>
      <JumbotronLead>
        10月12日 (土) 釧路市生涯学習センター まなぼっと 多目的ホール
      </JumbotronLead>
    </Jumbotron>

    <section>
      <Title>お詫び</Title>
      <Text>
        今年は都合により事前講習会の用意ができませんでした。楽しみにしていてくださったみなさまには大変申し訳ありませんでした。
      </Text>
      <Text>
        開催につきましては、午前中に直前の講習会、午後の時間で対戦というような半ば体験会のような形となります。
      </Text>
      <Text>
        当日は10時ころから直前の講習会を実施し、14時ころより対戦を行う予定です。
      </Text>
      <Text>
        過去に講習会や大会への参加経験があればぜひご参加ください。
        <br />
        また経験が無くてもプログラミングに興味があれば、高専生を中心にサポートいたします。
        <br />
        ご参加お待ちしております。
      </Text>
    </section>

    <Contact>
      <ContactButton
        href="https://forms.gle/dZ2qdH7ntjWDMSdC6"
        target="_blank"
        size="x-large"
      >
        参加申し込みフォーム
      </ContactButton>
    </Contact>

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
