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

import NotFoundPage, { pageQuery } from "./404"

describe("NotFoundPage", () => {
  const mockData = {
    site: {
      siteMetadata: {
        title: "Test Site Title",
      },
    },
  }

  const mockLocation = {
    pathname: "/nonexistent-page",
    search: "",
    hash: "",
    state: null,
    key: "default",
  }

  const mockPageProps = {
    data: mockData,
    location: mockLocation,
  }

  it("renders the 404 page correctly", () => {
    const html = renderToString(
      React.createElement(NotFoundPage, mockPageProps as any)
    )
    expect(html).toMatchSnapshot()
  })

  it("displays the 'Not Found' heading", () => {
    const html = renderToString(
      React.createElement(NotFoundPage, mockPageProps as any)
    )
    expect(html).toContain("Not Found")
  })

  it("displays the 404 message", () => {
    const html = renderToString(
      React.createElement(NotFoundPage, mockPageProps as any)
    )
    expect(html).toContain("You just hit a route that doesn")
  })

  it("renders the layout component with correct title", () => {
    const html = renderToString(
      React.createElement(NotFoundPage, mockPageProps as any)
    )
    expect(html).toContain('data-title="Test Site Title"')
  })

  it("renders the SEO component with 404 title", () => {
    const html = renderToString(
      React.createElement(NotFoundPage, mockPageProps as any)
    )
    expect(html).toContain("404: Not Found")
  })

  it("exports the graphql query", () => {
    expect(pageQuery).toBeDefined()
    expect(typeof pageQuery).toBe("string")
  })
})
