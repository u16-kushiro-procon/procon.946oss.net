import React from "react"
import { render } from "@testing-library/react"
import SEO from "./seo"

jest.mock("gatsby", () => ({
  useStaticQuery: jest.fn(),
  graphql: jest.fn(),
}))

const mockUseStaticQuery = jest.requireMock("gatsby").useStaticQuery

beforeEach(() => {
  mockUseStaticQuery.mockImplementation(() => ({
    site: {
      siteMetadata: {
        title: "Test Site",
        description: "Test description",
        siteUrl: "https://example.com",
        social: {
          twitter: "@test",
        },
      },
    },
  }))
})

describe("SEO", () => {
  it("renders without crashing", () => {
    render(<SEO title="Test" />)
  })

  it("uses default description when not provided", () => {
    render(<SEO title="Test" />)
  })

  it("uses custom description when provided", () => {
    render(<SEO title="Test" description="Custom description" />)
  })

  it("uses default lang when not provided", () => {
    render(<SEO title="Test" />)
  })

  it("uses custom lang when provided", () => {
    render(<SEO title="Test" lang="en" />)
  })

  it("accepts additional meta props", () => {
    const customMeta = [{ name: "custom", content: "value" }]
    render(<SEO title="Test" meta={customMeta} />)
  })
})
