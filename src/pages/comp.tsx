/** @jsx jsx */
import * as React from "react"
import { Link as GatsbyLink, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { GatsbyImage } from "gatsby-plugin-image"
import { Heading, jsx, Box, Grid, Text, Link } from "theme-ui"

const CompPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title="競技部門"
        description="U-16プログラミングコンテスト釧路大会 競技部門のご案内。プログラミング言語 Ruby を使い、CHaserというゲームで対戦します。"
      />

      <Heading as="h1" paddingTop={32} paddingBottom={16}>
        競技部門
      </Heading>

      <Grid columns={[1, null, 2]} gap={32}>
        <Box>
          <p>
            競技部門は、パソコンやプログラミングが好きな16歳以下の学生の皆さんに、IT
            に対する興味を深めてもらい、将来の IT
            エンジニア養成につなぐことを目的とした、これまでの U-16
            プログラミングコンテスト釧路大会の中心となる部門です。プログラミング言語
            Ruby
            を使って、プログラム作法を学び、CHaserというゲームの中で相手のプログラムと対戦します。
          </p>
          <p>
            プログラミングがはじめての方でも、大会前の講習会でイチから学べますので、安心してご参加ください。
          </p>
        </Box>
        <Box>
          <GatsbyImage
            image={data.avatar.childImageSharp.gatsbyImageData}
            alt=""
          />
        </Box>
      </Grid>

      <Heading as="h2" paddingTop={32} paddingBottom={16}>
        講習会・予選について
      </Heading>
      <p>
        競技部門の講習会は、実施概要が確定次第、本ホームページにて公表いたします。
      </p>
      <p>なお、競技部門の予選は実施しません。</p>

      <Heading as="h2" paddingTop={32} paddingBottom={16}>
        競技部門に関する質問等
      </Heading>
      <p>
        競技部門に関するお問い合わせは、メール u16kushiroprocon (AT) gmail.com
        までお願いいたします。メールの際は、(AT)を@に置き換えてください。
      </p>

      <p>
        <GatsbyLink sx={{ color: `primary` }} to="/free">
          自由部門はこちら
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

export default CompPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    avatar: file(absolutePath: { regex: "/about.jpg/" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
  }
`
