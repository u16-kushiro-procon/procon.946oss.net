import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { Heading, Button, Link, Grid, Box } from "theme-ui"

const About = () => {
  const data = useStaticQuery(graphql`
    query AboutQuery {
      avatar: file(absolutePath: { regex: "/about.jpg/" }) {
        childImageSharp {
          fluid(maxWidth: 380, maxHeight: 270) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <Heading id="about" as="h2" paddingTop={32} paddingBottom={16}>
        U-16プログラミングコンテストとは？
      </Heading>
      <Grid columns={[1, null, 2]} gap={32}>
        <Box>
          <p>
            U-16プログラミングコンテストは、パソコンやプログラミングが好きな16歳以下の学生の皆さんに、IT
            に対する興味を深めてもらい、将来の IT
            エンジニア養成につなぐことを目的として開催しています。プログラミング言語
            Ruby
            を使って、プログラム作法を学び、チェイサーというゲームの中で相手のプログラムと対戦します。
          </p>
          <p>
            北海道では、旭川大会（全道大会）、帯広大会、札幌大会も発足し、ますます注目されているイベントとなっています。
          </p>
          {/*
          <p>
            <Button
              href="https://forms.gle/ZisHCAjKGjacn7PG8"
              as={Link}
              sx={{ py: 16, px: 48, fontSize: 3 }}
            >
              参加応募する
            </Button>
          </p>
          */}

          <p>
            <Button
              href="https://youtu.be/xNRs7ZhPAt0"
              as={Link}
              sx={{ py: 16, px: 48, fontSize: 3 }}
            >
              オンライン観戦 (YouTube Live)
            </Button>
          </p>
        </Box>
        <Box>
          <Image fluid={data.avatar.childImageSharp.fluid} alt="" />
        </Box>
      </Grid>
    </>
  )
}

export default About
