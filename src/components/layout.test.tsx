import React from "react"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom"
import Layout from "./layout"

// Mock gatsby
jest.mock("gatsby", () => {
  const React = require("react")
  return {
    Link: React.forwardRef(({ to, ...rest }, ref) => (
      <a href={to} ref={ref} {...rest} />
    )),
    __PATH_PREFIX__: "",
  }
})

// Define __PATH_PREFIX__ global for the test environment
beforeAll(() => {
  Object.defineProperty(global, "__PATH_PREFIX__", {
    value: "",
    writable: true,
    configurable: true,
  })
})

// Mock theme-ui
jest.mock("theme-ui", () => {
  const React = require("react")
  return {
    Text: ({ children, ...rest }: any) => <text {...rest}>{children}</text>,
    Flex: ({ children, ...rest }: any) => <div {...rest}>{children}</div>,
    NavLink: ({ children, ...rest }: any) => <a {...rest}>{children}</a>,
    Container: ({ children, ...rest }: any) => <div {...rest}>{children}</div>,
    Message: ({ children, ...rest }: any) => <div {...rest}>{children}</div>,
    Link: ({ children, ...rest }: any) => <a {...rest}>{children}</a>,
  }
})

// Mock Logo component
jest.mock("./Logo", () => {
  const React = require("react")
  return ({ size }: any) => (
    <span data-testid="logo" data-size={size}>
      Logo
    </span>
  )
})

describe("Layout", () => {
  const defaultProps = {
    location: { pathname: "/" },
    title: "Test Title",
    children: <div>Test Content</div>,
  }

  it("renders without crashing", () => {
    const { container } = render(<Layout {...defaultProps} />)
    expect(container).toBeInTheDocument()
  })

  it("renders the Logo component", () => {
    const { getByTestId } = render(<Layout {...defaultProps} />)
    expect(getByTestId("logo")).toBeInTheDocument()
  })

  it("renders navigation links", () => {
    const { getByText } = render(<Layout {...defaultProps} />)
    expect(getByText("プロコンとは？")).toBeInTheDocument()
    expect(getByText("お知らせ")).toBeInTheDocument()
    expect(getByText("スポンサー")).toBeInTheDocument()
    expect(getByText("実行委員")).toBeInTheDocument()
  })

  it("renders children content", () => {
    const { getByText } = render(<Layout {...defaultProps} />)
    expect(getByText("Test Content")).toBeInTheDocument()
  })

  it("renders footer with copyright year", () => {
    const { container } = render(<Layout {...defaultProps} />)
    const currentYear = new Date().getFullYear()
    expect(container.textContent).toContain(`© ${currentYear}`)
    expect(container.textContent).toContain(
      "U-16プログラミングコンテスト釧路大会実行委員会"
    )
  })

  describe("when on root path", () => {
    it("renders with root path styling", () => {
      const props = {
        ...defaultProps,
        location: { pathname: "/" },
      }
      const { container } = render(<Layout {...props} />)
      const header = container.querySelector("header")
      expect(header).toBeInTheDocument()
    })

    it("renders event date text", () => {
      const props = {
        ...defaultProps,
        location: { pathname: "/" },
      }
      const { getByText } = render(<Layout {...props} />)
      expect(
        getByText("2025/11/2 at Digital Station デジラポ")
      ).toBeInTheDocument()
    })

    it("renders Logo without size prop for root", () => {
      const props = {
        ...defaultProps,
        location: { pathname: "/" },
      }
      const { getByTestId } = render(<Layout {...props} />)
      const logo = getByTestId("logo")
      expect(logo.getAttribute("data-size")).toBeNull()
    })
  })

  describe("when not on root path", () => {
    it("renders with non-root path styling", () => {
      const props = {
        ...defaultProps,
        location: { pathname: "/about" },
      }
      const { container } = render(<Layout {...props} />)
      const header = container.querySelector("header")
      expect(header).toBeInTheDocument()
    })

    it("does not render event date text", () => {
      const props = {
        ...defaultProps,
        location: { pathname: "/about" },
      }
      const { queryByText } = render(<Layout {...props} />)
      expect(
        queryByText("2025/11/2 at Digital Station デジラポ")
      ).not.toBeInTheDocument()
    })

    it("renders Logo with mini size for non-root", () => {
      const props = {
        ...defaultProps,
        location: { pathname: "/about" },
      }
      const { getByTestId } = render(<Layout {...props} />)
      const logo = getByTestId("logo")
      expect(logo.getAttribute("data-size")).toBe("mini")
    })
  })
})
