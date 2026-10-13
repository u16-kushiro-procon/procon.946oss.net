import theme from "./index"

describe("gatsby-plugin-theme-ui", () => {
  describe("theme", () => {
    it("should export a theme object", () => {
      expect(theme).toBeDefined()
      expect(typeof theme).toBe("object")
    })

    it("should include base colors", () => {
      expect(theme.colors).toBeDefined()
      expect(theme.colors).toHaveProperty("background")
      expect(theme.colors).toHaveProperty("muted")
    })

    it("should override text color to #222", () => {
      expect(theme.colors.text).toBe("#222")
    })

    it("should override primary color to #2942a1", () => {
      expect(theme.colors.primary).toBe("#2942a1")
    })

    it("should have correct fontSizes array", () => {
      expect(theme.fontSizes).toEqual([12, 16, 18, 22, 26, 34, 48, 64])
    })

    it("should have sizes with container value of 960", () => {
      expect(theme.sizes).toBeDefined()
      expect(theme.sizes?.container).toBe(960)
    })
  })
})
