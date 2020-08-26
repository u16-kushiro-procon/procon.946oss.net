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
        10月25日 (日) 13:00〜 オンライン開催
      </JumbotronLead>
    </Jumbotron>

    <section>
      <Title>U-16プログラミングコンテストとは</Title>
      <Text>
        U-16プログラミングコンテストとは、16歳以下(高校1年生まで)を対象としたプログラミングコンテストです。
      </Text>
      <Text>
        CHaser (チェイサー) という対戦型プラットフォーム上で、1 対 1 のプログラム同士の対決を行う「競技部門」と、コンピューターグラフィックスや自作のプログラムなど、自由に作成したデジタル作品を評価する「作品部門」から構成されるコンテストとなります。
      </Text>
    </section>
    
    <section>
      <Title>開催概要</Title>
      <Text>
        開催日時：2020/10/25 13:00～(予定)
      </Text>
      <Text>
        開催場所：オンライン開催 (YouTube Live で観戦できる予定です)
      </Text>
      <Text>
        参加費：無料
      </Text>
      <Text>
        対象：2021年4月1日時点で16歳以下となる方
      </Text>
    </section>
    
    <Contact>
      <ContactButton
        href="https://forms.gle/eYHCLx9uNQPEapycA"
        target="_blank"
        size="x-large"
      >
        参加申し込み
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
