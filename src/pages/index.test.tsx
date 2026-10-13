import React from "react"
import { renderToString } from "react-dom/server"

jest.mock("gatsby", () => {
  const actual = jest.requireActual("gatsby")
  return {
    ...actual,
    graphql: () => "",
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
  return function MockSEO({ title }: { title: string }) {
    return React.createElement("title", { "data-testid": "seo" }, title)
  }
})

jest.mock("../components/about", () => {
  return function MockAbout() {
    return React.createElement("div", { "data-testid": "about" }, "About")
  }
})

jest.mock("../components/sponsor", () => {
  return function MockSponsor() {
    return React.createElement("div", { "data-testid": "sponsor" }, "Sponsor")
  }
})

jest.mock("../components/staff", () => {
  return function MockStaff() {
    return React.createElement("div", { "data-testid": "staff" }, "Staff")
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
    Box: ({ children, ...props }: any) =>
      React.createElement("div", props, children),
    Heading: ({ as, children, ...props }: any) =>
      React.createElement(as || "h2", props, children),
    Text: ({ children, ...props }: any) =>
      React.createElement("span", props, children),
    Card: ({ children, ...props }: any) =>
      React.createElement("div", props, children),
    Grid: ({ children, ...props }: any) =>
      React.createElement("div", props, children),
  }
})

jest.mock("gatsby-plugin-image", () => {
  return {
    GatsbyImage: ({ image, alt }: any) =>
      React.createElement("img", { src: image, alt }),
  }
})

import BlogIndex, { pageQuery } from "./index"

describe("BlogIndex", () => {
  const mockData = {
    site: {
      siteMetadata: {
        title: "Test Site Title",
      },
    },
    allMarkdownRemark: {
      edges: [
        {
          node: {
            frontmatter: {
              title: "Test Post",
              date: "2025/01/01",
              featuredImage: {
                childImageSharp: {
                  gatsbyImageData: "test-image-data",
                },
              },
            },
            fields: {
              slug: "/test-post",
            },
          },
        },
      ],
    },
  }

  const mockPageProps = {
    data: mockData,
    location: {
      pathname: "/",
      search: "",
      hash: "",
      state: null,
      key: "default",
    },
  }

  it("renders the page with SEO title", () => {
    const html = renderToString(
      React.createElement(BlogIndex, mockPageProps as any)
    )
    expect(html).toContain("2025年大会")
  })

  it("renders the layout component with correct title", () => {
    const html = renderToString(
      React.createElement(BlogIndex, mockPageProps as any)
    )
    expect(html).toContain('data-title="Test Site Title"')
  })

  it("renders the about component", () => {
    const html = renderToString(
      React.createElement(BlogIndex, mockPageProps as any)
    )
    expect(html).toContain('data-testid="about"')
  })

  it("renders the sponsor component", () => {
    const html = renderToString(
      React.createElement(BlogIndex, mockPageProps as any)
    )
    expect(html).toContain('data-testid="sponsor"')
  })

  it("renders the staff component", () => {
    const html = renderToString(
      React.createElement(BlogIndex, mockPageProps as any)
    )
    expect(html).toContain('data-testid="staff"')
  })

  it("renders blog posts", () => {
    const html = renderToString(
      React.createElement(BlogIndex, mockPageProps as any)
    )
    expect(html).toContain("Test Post")
    expect(html).toContain("/test-post")
  })

  it("exports the graphql query", () => {
    expect(pageQuery).toBeDefined()
    expect(typeof pageQuery).toBe("string")
  })
})
