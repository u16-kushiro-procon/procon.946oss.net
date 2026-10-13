import React from "react"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom"
import Sponsor from "./sponsor"

jest.mock("gatsby", () => {
  const gatsby = jest.requireActual("gatsby")
  return {
    ...gatsby,
    useStaticQuery: jest.fn(),
    graphql: jest.fn(),
  }
})

describe("Sponsor", () => {
  const mockSponsors = [
    { name: "Sponsor A" },
    { name: "Sponsor B" },
    { name: "Sponsor C" },
  ]

  beforeEach(() => {
    jest.clearAllMocks()
    ;(require("gatsby").useStaticQuery as jest.Mock).mockReturnValue({
      site: {
        siteMetadata: {
          sponsors: mockSponsors,
        },
      },
    })
  })

  it("renders without crashing", () => {
    const { container } = render(<Sponsor />)
    expect(container).toBeInTheDocument()
  })

  it("renders the heading with correct text", () => {
    const { getByText } = render(<Sponsor />)
    const heading = getByText("後援・協賛")
    expect(heading).toBeInTheDocument()
  })

  it("renders the subtitle (順不同)", () => {
    const { getByText } = render(<Sponsor />)
    const subtitle = getByText("(順不同)")
    expect(subtitle).toBeInTheDocument()
  })

  it("renders all sponsors from the query", () => {
    const { getByText } = render(<Sponsor />)
    mockSponsors.forEach(sponsor => {
      expect(getByText(sponsor.name)).toBeInTheDocument()
    })
  })

  it("renders the footer text", () => {
    const { container } = render(<Sponsor />)
    expect(container.textContent).toContain(
      "U-16プログラミングコンテスト釧路大会"
    )
    expect(container.textContent).toContain("皆様のご協賛")
    expect(container.textContent).toContain(
      "実行委員会一同、心より感謝申し上げます。"
    )
  })

  it("renders sponsors in a grid", () => {
    const { container } = render(<Sponsor />)
    const grid = container.querySelector(".css-oncl7u-Box")
    expect(grid).toBeInTheDocument()
  })

  it("renders each sponsor in a Card component", () => {
    const { container } = render(<Sponsor />)
    const cards = container.querySelectorAll(".css-1peva9n-Box")
    expect(cards).toHaveLength(mockSponsors.length)
  })

  it("uses the sponsor name as the key for each card", () => {
    const { getAllByText } = render(<Sponsor />)
    mockSponsors.forEach(sponsor => {
      expect(getAllByText(sponsor.name)).toHaveLength(1)
    })
  })

  it("renders the heading with id sponsor", () => {
    const { container } = render(<Sponsor />)
    const heading = container.querySelector("#sponsor")
    expect(heading).toBeInTheDocument()
  })
})
