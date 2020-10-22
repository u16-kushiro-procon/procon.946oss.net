import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Heading, Grid, Text, Card } from "theme-ui"

const Sponsor = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            sponsors {
              name
            }
          }
        }
      }
    `
  )

  return (
    <>
      <Heading id="sponsor" as="h2" paddingTop={32} paddingBottom={16}>
        スポンサー
        <Text sx={{ fontSize: 1, fontWeight: "normal" }}>(順不同)</Text>
      </Heading>
      <Grid width={[180, null, 240]} gap={16} my={4}>
        {site.siteMetadata.sponsors.map(({ name }) => (
          <Card key={name}>
            <Text sx={{ fontSize: [2, null, 3], textAlign: "center" }}>
              {name}
            </Text>
          </Card>
        ))}
      </Grid>
      <Text sx={{ fontSize: 1 }}>
        U-16プログラミングコンテスト釧路大会は、皆様のご協賛をいただきました。
        実行委員会一同、心より感謝申し上げます。
      </Text>
    </>
  )
}

export default Sponsor
