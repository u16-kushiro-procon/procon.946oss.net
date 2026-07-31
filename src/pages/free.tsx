/** @jsx jsx */
import * as React from "react"
import { Link as GatsbyLink, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Heading, jsx, Box, Grid, Card, Text, Link } from "theme-ui"

const FreePage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title="自由部門"
        description="U-16プログラミングコンテスト釧路大会 自由部門（プログラミング部門・デジタルコンテンツ部門）のご案内。"
      />

      <Heading as="h1" paddingTop={32} paddingBottom={16}>
        自由部門
      </Heading>

      <Box>
        <p>
          2026年度より、北海道大会で作品部門が創設されることになりました。これに伴い、釧路大会でも作品部門への門出を開くため、釧路大会
          自由部門（プログラミング部門、デジタルコンテンツ部門の2種類）を創設します。
        </p>
        <p>
          北海道大会の作品部門に出場するには、
          <strong>
            必ず各地域大会（釧路地域は釧路大会）いずれかの作品部門に出場する必要があります。
          </strong>
          北海道大会の作品部門へ応募したい方は、釧路大会がファーストステップになりますので、ぜひ応募してみてください。
        </p>
      </Box>

      <Heading as="h2" paddingTop={32} paddingBottom={16}>
        部門紹介
      </Heading>
      <Grid columns={[1, null, 2]} gap={16}>
        <Card sx={{ bg: "white", p: 16, padding: "1.5rem" }}>
          <Heading as="h3" sx={{ fontSize: 3 }}>
            プログラミング部門
          </Heading>
          <p>
            自由な発想で作成したプログラム・アプリケーション作品で審査を行う部門です。ハードウェアが絡んでもよいです。
          </p>

          <Heading as="h4" sx={{ paddingTop: 3, fontSize: 2 }}>
            審査基準
          </Heading>
          <p>
            <span style={{ fontWeight: "bold" }}>技術力、独自性、完成度</span>
            の3観点で審査します。
          </p>

          <Heading as="h4" sx={{ paddingTop: 3, fontSize: 2 }}>
            提出物
          </Heading>
          <p>
            大会1週間前を目処に、下記4点をご提出いただきます。応募時は、「どんな作品を作るか」のみでかまいません。
          </p>
          <ul>
            <li>できたもの（ソースコードや、実行ファイル）</li>
            <li>動作している様子を撮った動画や写真</li>
            <li>作品紹介動画（2分程度）</li>
            <li>作品を説明する文章</li>
          </ul>
        </Card>
        <Card sx={{ bg: "white", p: 16, padding: "1.5rem" }}>
          <Heading as="h3" sx={{ fontSize: 3 }}>
            デジタルコンテンツ部門
          </Heading>
          <p>
            コンピューターを用いたCG、アート、動画、音楽など、デジタル技術を活用したコンテンツ作品で審査を行う部門です。
          </p>

          <Heading as="h4" sx={{ paddingTop: 3, fontSize: 2 }}>
            審査基準
          </Heading>
          <p>
            <span style={{ fontWeight: "bold" }}>
              アイデア、コンピューターの活用度、完成度
            </span>
            の3観点で審査します。
          </p>

          <Heading as="h4" sx={{ paddingTop: 3, fontSize: 2 }}>
            提出物
          </Heading>
          <p>
            大会1週間前を目処に、下記4点をご提出いただきます。応募時は、「どんな作品を作るか」のみでかまいません。
          </p>
          <ul>
            <li>できたもの（動画、画像、3Dモデルなど）</li>
            <li>作品紹介動画（2分程度）</li>
            <li>作品を説明する文章</li>
          </ul>
        </Card>
      </Grid>

      <Heading as="h2" paddingTop={32} paddingBottom={16}>
        講習会・予選について
      </Heading>
      <p>
        自由部門については、講習会を実施しません。また、自由部門にかかわる予選も実施しません。
      </p>

      <Heading as="h2" paddingTop={32} paddingBottom={16}>
        自由部門に関する質問等
      </Heading>
      <p>
        自由部門に関するお問い合わせは、メール u16kushiroprocon (AT) gmail.com
        までお願いいたします。メールの際は、(AT)を@に置き換えてください。
      </p>
      <p>
        <GatsbyLink sx={{ color: `primary` }} to="/comp">
          競技部門はこちら
        </GatsbyLink>
      </p>
      <p>
        <GatsbyLink sx={{ color: `primary` }} to="/">
          トップページへ戻る
        </GatsbyLink>
      </p>
    </Layout>
  )
}

export default FreePage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
