/** @jsx jsx */
import * as React from "react"
import { Link as GatsbyLink, graphql } from "gatsby"

import About from "../components/about"
import Staff from "../components/staff"
import Sponsor from "../components/sponsor"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { GatsbyImage } from "gatsby-plugin-image"
import { Heading, jsx, Box, Card, Grid, Text } from "theme-ui"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="2025年大会" />
      <About />

      <Box bg="white" px={[32, null, 48]} py={32} marginY={16}>
        <Heading as="h2">プログラミング講習会のご案内</Heading>
        <p>大変お待たせしました！オフライン講習会のご案内です。</p>
        <p>
          毎週火・水・金曜日は，Digital Station デジラポ
          にて講習会を開催します。
          <ul>
            <li>火曜日 17:30~18:30</li>
            <li>水曜日 17:30~18:30</li>
            <li>金曜日 15:30~18:30</li>
          </ul>
          土日祝は k-Hack または 釧路市民活動センターわっと
          にて，下記スケジュールで講習会を開催します。
          <ul>
            <li>10月5日(日) 9:00 ~ 12:00，k-Hackで開催</li>
            <li>10月11日(土) 9:00 ~ 12:00，わっとで開催(予定)</li>
            <li>10月12日(日) 9:00 ~ 12:00，わっとで開催(予定)</li>
            <li>10月13日(月) 9:00 ~ 12:00，わっとで開催(予定)</li>
            <li>10月25日(土) 9:00 ~ 12:00，k-Hackで開催</li>
            <li>10月26日(日) 9:00 ~ 12:00，k-Hackで開催</li>
          </ul>
        </p>
        <p>
          講習会参加にあたり，事前応募などは必要ありません。どうぞお気軽にご参加ください！
          <br />
          詳しい情報は<a href="/2025-teach/">こちら</a>をご覧ください。
        </p>
      </Box>

      <Heading id="blog" as="h2" paddingTop={32} paddingBottom={16}>
        お知らせ
      </Heading>
      <Grid width={[128, null, 256]} gap={16}>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          const img =
            node.frontmatter.featuredImage?.childImageSharp.gatsbyImageData
          return (
            <Card key={node.fields.slug} sx={{ bg: "white" }}>
              <GatsbyLink to={node.fields.slug}>
                <GatsbyImage image={img} alt="" />
              </GatsbyLink>
              <Text p={16} sx={{ display: "block" }}>
                <GatsbyLink sx={{ color: `primary` }} to={node.fields.slug}>
                  {title}
                </GatsbyLink>
                <br />
                <small>{node.frontmatter.date}</small>
              </Text>
            </Card>
          )
        })}
      </Grid>

      <Sponsor />
      <Staff />
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 6
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY/MM/DD")
            title
            description
            featuredImage {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, width: 480, height: 320)
              }
            }
          }
        }
      }
    }
  }
`
