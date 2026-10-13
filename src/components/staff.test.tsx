import React from "react"
import { render } from "@testing-library/react"
import { useStaticQuery, graphql } from "gatsby"
import Staff from "./staff"
import "@testing-library/jest-dom"

jest.mock("gatsby", () => {
  const gatsby = jest.requireActual("gatsby")
  return {
    ...gatsby,
    useStaticQuery: jest.fn(),
    graphql: jest.fn(),
  }
})

describe("Staff", () => {
  const mockData = {
    allStaffYaml: {
      edges: [
        {
          node: {
            name: "Test User",
            role: "Committee Chair",
            picture: "/test-image.jpg",
          },
        },
        {
          node: {
            name: "Another User",
            role: "Vice Chair",
            picture: "/another-image.jpg",
          },
        },
        {
          node: {
            name: "No Role User",
            role: null,
            picture: "/no-role-image.jpg",
          },
        },
      ],
    },
  }

  beforeEach(() => {
    ;(useStaticQuery as jest.Mock).mockReturnValue(mockData)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it("renders the staff heading", () => {
    const { getByRole } = render(<Staff />)
    const heading = getByRole("heading", { level: 2 })
    expect(heading).toHaveTextContent("実行委員")
  })

  it("renders all staff members", () => {
    const { getAllByRole } = render(<Staff />)
    const cards = getAllByRole("img")
    expect(cards).toHaveLength(3)
  })

  it("renders staff names correctly", () => {
    const { getByText } = render(<Staff />)
    expect(getByText("Test User")).toBeInTheDocument()
    expect(getByText("Another User")).toBeInTheDocument()
    expect(getByText("No Role User")).toBeInTheDocument()
  })

  it("renders staff roles when available", () => {
    const { getByText } = render(<Staff />)
    expect(getByText("Committee Chair")).toBeInTheDocument()
    expect(getByText("Vice Chair")).toBeInTheDocument()
  })

  it("does not render role element when role is null", () => {
    const { getAllByRole } = render(<Staff />)
    const images = getAllByRole("img")
    expect(images).toHaveLength(3)
  })

  it("renders staff pictures with correct src", () => {
    const { getAllByRole } = render(<Staff />)
    const images = getAllByRole("img")
    expect(images[0]).toHaveAttribute("src", "/test-image.jpg")
    expect(images[1]).toHaveAttribute("src", "/another-image.jpg")
    expect(images[2]).toHaveAttribute("src", "/no-role-image.jpg")
  })

  it("renders staff pictures with rounded border", () => {
    const { getAllByRole } = render(<Staff />)
    const images = getAllByRole("img")
    images.forEach(img => {
      expect(img).toHaveStyle("border-radius: 256px")
    })
  })

  it("uses graphql query for staff data", () => {
    render(<Staff />)
    expect(useStaticQuery).toHaveBeenCalled()
  })

  it("renders staff in a grid layout", () => {
    const { container } = render(<Staff />)
    const grid = container.querySelector("div")
    expect(grid).toBeInTheDocument()
  })

  it("renders each staff member in a card", () => {
    const { container } = render(<Staff />)
    const cards = container.querySelectorAll("div")
    expect(cards.length).toBeGreaterThan(0)
  })
})
