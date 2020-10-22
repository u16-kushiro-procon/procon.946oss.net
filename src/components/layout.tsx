import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Text, Flex, NavLink, Container, Message, Link } from "theme-ui"
import Logo from "./Logo"

const Layout = ({ location, title, children }) => {
  const isRoot = location.pathname === `${__PATH_PREFIX__}/`

  return (
    <>
      <header
        style={{
          background: isRoot
            ? "url(/header-bg-code.png) no-repeat right/50%, linear-gradient(to left top, #214da8, #0b9ba8)"
            : "linear-gradient(to left top, #214da8, #0b9ba8)",
        }}
      >
        <Container py={isRoot ? 48 : 16}>
          <GatsbyLink to="/">
            {isRoot ? (
              <span style={{ color: "#fff" }}>
                <Logo />
              </span>
            ) : (
              <Logo size="mini" />
            )}
          </GatsbyLink>
          {isRoot && (
            <Text
              sx={{
                color: "white",
                fontSize: [1, 3, 4],
                marginTop: [0, null, 16],
                mx: [32, null, 0],
              }}
            >
              2020/10/25 13:00- オンライン開催
            </Text>
          )}
        </Container>
      </header>
      <Container px={[16, null, 0]}>
        <Flex as="nav" sx={{ flexWrap: "wrap", paddingY: 16 }}>
          <NavLink href="/#about" sx={{ flex: "1 1 auto" }}>
            プロコンとは？
          </NavLink>
          <NavLink href="/#blog" sx={{ flex: "1 1 auto" }}>
            お知らせ
          </NavLink>
          <NavLink href="/#sponsor" sx={{ flex: "1 1 auto" }}>
            スポンサー
          </NavLink>
          <NavLink href="/#staff" sx={{ flex: "1 1 auto" }}>
            実行委員
          </NavLink>
          {/* 
          <NavLink href="/#about" sx={{ flex: "1 1 auto" }}>
            応募する
          </NavLink>
          */}
        </Flex>
      </Container>
      <main
        style={{
          backgroundColor: "#f0fafb",
          paddingBottom: 16,
          paddingTop: 16,
        }}
      >
        <Container px={[16, null, 0]}>
          <Message marginBottom={16}>
            <Link as={GatsbyLink} to="/2020-hello">
              [開催決定！] 2020年大会の開催についてはこちらをご覧ください
            </Link>
          </Message>
          {children}
        </Container>
      </main>
      <footer
        style={{
          background: "linear-gradient(to top, #214da8, #0b9ba8)",
        }}
      >
        <Container sx={{ color: "white", py: 32, px: [16, null, 0] }}>
          © {new Date().getFullYear()}
          {` `}
          U-16プログラミングコンテスト釧路大会実行委員会
        </Container>
      </footer>
    </>
  )
}

export default Layout
