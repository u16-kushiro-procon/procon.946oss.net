import React from "react"
import { renderToString } from "react-dom/server"

jest.mock("gatsby", () => {
  const actual = jest.requireActual("gatsby")
  return {
    ...actual,
    graphql: () => "",
    Link: ({ to, children, ...props }: any) =>
      React.createElement("a", { href: to, ...props }, children),
  }
})

jest.mock("../components/layout", () => {
  return function MockLayout({
    children,
    title,
  }: {
    children: React.ReactNode
    title: string
  }) {
    return React.createElement(
      "div",
      { "data-testid": "layout", "data-title": title },
      children
    )
  }
})

jest.mock("../components/seo", () => {
  return function MockSEO({
    title,
    description,
  }: {
    title: string
    description: string
  }) {
    return React.createElement("div", {
      "data-testid": "seo",
      "data-title": title,
      "data-description": description,
    })
  }
})

jest.mock("theme-ui", () => {
  return {
    jsx: jest.fn((elem, props, ...children) => {
      if (typeof elem === "string") {
        return React.createElement(elem, props, ...children)
      }
      return React.createElement(elem, props, ...children)
    }),
    Flex: ({ children, ...props }: any) =>
      React.createElement("div", props, children),
    Heading: ({ as, children, ...props }: any) =>
      React.createElement(as || "h2", props, children),
    NavLink: ({ children, ...props }: any) =>
      React.createElement("a", props, children),
    Box: ({ children, ...props }: any) =>
      React.createElement("div", props, children),
  }
})

import BlogPostTemplate, { pageQuery } from "./blog-post"

describe("BlogPostTemplate", () => {
  const mockData = {
    markdownRemark: {
      frontmatter: {
        title: "Test Post Title",
        date: "2025/01/01",
        description: "Test post description",
      },
      excerpt: "Test excerpt",
      html: "<p>Test HTML content</p>",
    },
    site: {
      siteMetadata: {
        title: "Test Site Title",
      },
    },
  }

  const mockPageContext = {
    previous: null,
    next: null,
  }

  const mockLocation = {
    pathname: "/test-post",
    search: "",
    hash: "",
    state: null,
    key: "default",
  }

  const mockPageProps = {
    data: mockData,
    pageContext: mockPageContext,
    location: mockLocation,
  }

  it("renders without crashing", () => {
    const html = renderToString(
      React.createElement(BlogPostTemplate, mockPageProps as any)
    )
    expect(html).toBeDefined()
  })

  it("renders the SEO component with correct title", () => {
    const html = renderToString(
      React.createElement(BlogPostTemplate, mockPageProps as any)
    )
    expect(html).toContain('data-title="Test Post Title"')
  })

  it("renders the SEO component with post description", () => {
    const html = renderToString(
      React.createElement(BlogPostTemplate, mockPageProps as any)
    )
    expect(html).toContain('data-description="Test post description"')
  })

  it("renders the post title as heading", () => {
    const html = renderToString(
      React.createElement(BlogPostTemplate, mockPageProps as any)
    )
    expect(html).toContain("Test Post Title")
  })

  it("renders the post date", () => {
    const html = renderToString(
      React.createElement(BlogPostTemplate, mockPageProps as any)
    )
    expect(html).toContain("2025/01/01")
  })

  it("renders the post HTML content", () => {
    const html = renderToString(
      React.createElement(BlogPostTemplate, mockPageProps as any)
    )
    expect(html).toContain("<p>Test HTML content</p>")
  })

  it("renders the layout component with site title", () => {
    const html = renderToString(
      React.createElement(BlogPostTemplate, mockPageProps as any)
    )
    expect(html).toContain('data-title="Test Site Title"')
  })

  it("renders without previous navigation when previous is null", () => {
    const html = renderToString(
      React.createElement(BlogPostTemplate, mockPageProps as any)
    )
    expect(html).not.toContain("←")
  })

  it("renders without next navigation when next is null", () => {
    const html = renderToString(
      React.createElement(BlogPostTemplate, mockPageProps as any)
    )
    expect(html).not.toContain("→")
  })

  it("renders with previous navigation when previous exists", () => {
    const propsWithPrevious = {
      ...mockPageProps,
      pageContext: {
        ...mockPageContext,
        previous: {
          fields: {
            slug: "/previous-post",
          },
          frontmatter: {
            title: "Previous Post",
          },
        },
      },
    }
    const html = renderToString(
      React.createElement(BlogPostTemplate, propsWithPrevious as any)
    )
    expect(html).toContain("Previous Post")
    expect(html).toContain("/previous-post")
  })

  it("renders with next navigation when next exists", () => {
    const propsWithNext = {
      ...mockPageProps,
      pageContext: {
        ...mockPageContext,
        next: {
          fields: {
            slug: "/next-post",
          },
          frontmatter: {
            title: "Next Post",
          },
        },
      },
    }
    const html = renderToString(
      React.createElement(BlogPostTemplate, propsWithNext as any)
    )
    expect(html).toContain("Next Post")
    expect(html).toContain("/next-post")
  })

  it("renders with both previous and next navigation", () => {
    const propsWithBoth = {
      ...mockPageProps,
      pageContext: {
        previous: {
          fields: {
            slug: "/previous-post",
          },
          frontmatter: {
            title: "Previous Post",
          },
        },
        next: {
          fields: {
            slug: "/next-post",
          },
          frontmatter: {
            title: "Next Post",
          },
        },
      },
    }
    const html = renderToString(
      React.createElement(BlogPostTemplate, propsWithBoth as any)
    )
    expect(html).toContain("Previous Post")
    expect(html).toContain("Next Post")
  })

  it("uses excerpt as SEO description when frontmatter description is not provided", () => {
    const propsWithoutDescription = {
      ...mockPageProps,
      data: {
        ...mockData,
        markdownRemark: {
          ...mockData.markdownRemark,
          frontmatter: {
            ...mockData.markdownRemark.frontmatter,
            description: null,
          },
        },
      },
    }
    const html = renderToString(
      React.createElement(BlogPostTemplate, propsWithoutDescription as any)
    )
    expect(html).toContain('data-description="Test excerpt"')
  })

  it("exports the graphql query", () => {
    expect(pageQuery).toBeDefined()
    expect(typeof pageQuery).toBe("string")
  })
})
