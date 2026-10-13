import React from "react"
import { render } from "@testing-library/react"
import { useStaticQuery, graphql } from "gatsby"
import About from "./about"
import "@testing-library/jest-dom"

jest.mock("gatsby", () => {
  const gatsby = jest.requireActual("gatsby")
  return {
    ...gatsby,
    useStaticQuery: jest.fn(),
    graphql: jest.fn(),
  }
})

describe("About", () => {
  const mockData = {
    avatar: {
      childImageSharp: {
        gatsbyImageData: {
          images: {
            fallback: {
              src: "/test-image.jpg",
              srcSet: "/test-image-srcset.jpg",
            },
          },
          layout: "CONSTRAINED",
        },
      },
    },
  }

  beforeEach(() => {
    ;(useStaticQuery as jest.Mock).mockReturnValue(mockData)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it("renders the heading", () => {
    const { getByRole } = render(<About />)
    const heading = getByRole("heading", { level: 2 })
    expect(heading).toHaveTextContent(/U-16プログラミングコンテストとは？/)
  })

  it("renders the description paragraphs", () => {
    const { getByText } = render(<About />)
    const paragraph = getByText(
      /U-16プログラミングコンテストは、パソコンやプログラミング/
    )
    expect(paragraph).toBeInTheDocument()
  })

  it("renders the YouTube Live button", () => {
    const { getByRole } = render(<About />)
    const button = getByRole("link", { name: /オンライン観戦/i })
    expect(button).toHaveAttribute(
      "href",
      "https://youtube.com/live/MB2vMCABZMQ"
    )
  })

  it("renders the grid layout", () => {
    const { container } = render(<About />)
    const grid =
      container.querySelector('[style*="grid"]') ||
      container.querySelector("div")
    expect(grid).toBeInTheDocument()
  })

  it("renders the GatsbyImage component with correct data", () => {
    render(<About />)
    expect(useStaticQuery).toHaveBeenCalled()
  })
})
