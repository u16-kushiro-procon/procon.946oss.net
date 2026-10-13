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

import UsingTypescript, { query } from "./using-typescript"

describe("UsingTypescript", () => {
  const mockData = {
    site: {
      buildTime: "2026-03-17 10:00 AM UTC",
    },
  }

  const mockPageProps = {
    data: mockData,
    path: "/using-typescript",
    location: {
      pathname: "/using-typescript",
      search: "",
      hash: "",
      state: null,
      key: "default",
    },
    uri: "/using-typescript",
    navigate: jest.fn(),
    children: null,
    params: {},
    pageContext: {},
    serverData: null,
    pageResources: {},
  }

  it("renders the page title", () => {
    const html = renderToString(
      React.createElement(UsingTypescript, mockPageProps as any)
    )
    expect(html).toContain("Gatsby supports TypeScript by default!")
  })

  it("renders the SEO component with correct title", () => {
    const html = renderToString(
      React.createElement(UsingTypescript, mockPageProps as any)
    )
    expect(html).toContain("Using TypeScript")
  })

  it("renders the layout component with correct title", () => {
    const html = renderToString(
      React.createElement(UsingTypescript, mockPageProps as any)
    )
    expect(html).toContain('data-title="Using TypeScript"')
  })

  it("displays the current path", () => {
    const html = renderToString(
      React.createElement(UsingTypescript, mockPageProps as any)
    )
    expect(html).toContain("You&#x27;re currently on the page")
    expect(html).toContain("/using-typescript")
    expect(html).toContain("2026-03-17 10:00 AM UTC")
  })

  it("renders a link back to homepage", () => {
    const html = renderToString(
      React.createElement(UsingTypescript, mockPageProps as any)
    )
    expect(html).toContain('href="/')
    expect(html).toContain("Go back to the homepage")
  })

  it("renders documentation link", () => {
    const html = renderToString(
      React.createElement(UsingTypescript, mockPageProps as any)
    )
    expect(html).toContain("documentation about TypeScript")
    expect(html).toContain("https://www.gatsbyjs.org/docs/typescript/")
  })

  it("exports the graphql query", () => {
    expect(query).toBeDefined()
    expect(typeof query).toBe("string")
  })
})
