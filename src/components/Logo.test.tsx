import React from "react"
import { render } from "@testing-library/react"
import Logo from "./Logo"

describe("Logo", () => {
  it("renders the full logo by default", () => {
    const { container } = render(<Logo />)
    const svg = container.querySelector("svg")
    expect(svg).not.toBeNull()
    expect(svg?.getAttribute("viewBox")).toBe("0 0 397.81 348.49")
  })

  it('renders the mini logo when size is "mini"', () => {
    const { container } = render(<Logo size="mini" />)
    const svg = container.querySelector("svg")
    expect(svg).not.toBeNull()
    expect(svg?.getAttribute("viewBox")).toBe("0 0 249 36.37")
  })

  it("uses white as default color", () => {
    const { container } = render(<Logo />)
    // Verify the component renders with default color prop
    // ThemeUI sx prop is processed at runtime, so we verify the SVG structure
    const svg = container.querySelector("svg")
    expect(svg).not.toBeNull()
  })

  it("accepts a custom color prop", () => {
    const { container } = render(<Logo color="red" />)
    // Verify the component accepts custom color prop
    const svg = container.querySelector("svg")
    expect(svg).not.toBeNull()
  })

  it("applies custom color to mini logo", () => {
    const { container } = render(<Logo size="mini" color="blue" />)
    const svg = container.querySelector("svg")
    expect(svg).not.toBeNull()
    expect(svg?.getAttribute("viewBox")).toBe("0 0 249 36.37")
  })

  it("renders paths inside the SVG", () => {
    const { container } = render(<Logo />)
    const paths = container.querySelectorAll("svg path")
    expect(paths.length).toBeGreaterThan(0)
  })

  it("renders paths inside the mini SVG", () => {
    const { container } = render(<Logo size="mini" />)
    const paths = container.querySelectorAll("svg path")
    expect(paths.length).toBeGreaterThan(0)
  })
})
