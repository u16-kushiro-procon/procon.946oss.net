/** @jsx jsx */
import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { jsx, Flex, Heading, NavLink, Box } from "theme-ui"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article sx={{ bg: "white", p: 32, wordBreak: "break-all" }}>
        <header>
          <Heading as="h1">{post.frontmatter.title}</Heading>
          <p>{post.frontmatter.date}</p>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>

      <Flex as="nav" sx={{ paddingY: 16 }}>
        {previous && (
          <NavLink
            to={previous.fields.slug}
            rel="prev"
            as={Link}
            sx={{ flex: "1 1 auto" }}
          >
            ← {previous.frontmatter.title}
          </NavLink>
        )}
        {next && (
          <NavLink
            to={next.fields.slug}
            rel="next"
            as={Link}
            sx={{ flex: "1 1 auto", textAlign: "right" }}
          >
            {next.frontmatter.title} →
          </NavLink>
        )}
      </Flex>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "YYYY/MM/DD")
        description
      }
    }
  }
`
