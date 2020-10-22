/** @jsx jsx */
import React from "react"
import { Link as GatsbyLink, graphql } from "gatsby"

import About from "../components/about"
import Staff from "../components/staff"
import Sponsor from "../components/sponsor"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Image from "gatsby-image"
import { Heading, jsx, Box, Card, Grid, Text } from "theme-ui"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="2020年大会" />
      <About />

      <Box bg="white" px={[32, null, 48]} py={32} marginY={16}>
        <Heading as="h2">プログラミングって難しくない？</Heading>
        <p>
          プログラミングを一度も経験したことのない人でも全く問題ありません！
          <br />
          「事前講習会」にご参加ください。
        </p>
        <p sx={{ fontWeight: "bold" }}>
          2020年大会は新型コロナウイルス感染症対策のため、申込者に個別でオンラインでの講習を予定しております。
          <br />
          詳しくは、申し込み後の案内をご確認ください。
        </p>
      </Box>

      <Heading id="blog" as="h2" paddingTop={32} paddingBottom={16}>
        お知らせ
      </Heading>
      <Grid width={[128, null, 256]} gap={16}>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          const img = node.frontmatter.featuredImage?.childImageSharp.fluid
          return (
            <Card key={node.fields.slug} sx={{ bg: "white" }}>
              <GatsbyLink to={node.fields.slug}>
                <Image fluid={img} />
              </GatsbyLink>
              <Text p={16}>
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
                fluid(maxWidth: 480, maxHeight: 320) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
