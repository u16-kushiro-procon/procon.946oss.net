import React from "react"
import { useStaticQuery, graphql, Link as GatsbyLink } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Heading, Button, Link, Grid, Box } from "theme-ui"

const About = () => {
  const data = useStaticQuery(graphql`
    query AboutQuery {
      avatar: file(absolutePath: { regex: "/about.jpg/" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
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
            エンジニア養成につなぐことを目的として開催しています。
          </p>
          <p>
            北海道では、旭川大会（全道大会）、帯広大会、札幌大会も発足し、ますます注目されているイベントとなっています。
          </p>
          <p>
            大会は、プログラミングで対戦する<strong>競技部門</strong>と、
            プログラミング・デジタルコンテンツ作品を審査する
            <strong>自由部門</strong>
            の2つで構成されています。
          </p>
          <Grid columns={2} gap={16} sx={{ marginBottom: 16 }}>
            <Button as={GatsbyLink} to="/comp" sx={{ py: 16 }}>
              競技部門について
            </Button>
            <Button as={GatsbyLink} to="/free" sx={{ py: 16 }}>
              自由部門について
            </Button>

            <Button
              href="https://forms.gle/e62HLFWHKuZQYJgFA"
              as={Link}
              sx={{
                py: 16,
                px: 48,
                fontSize: 3,
                gridColumn: "span 2",
              }}
            >
              参加応募する
            </Button>
          </Grid>
          {<p></p>}

          {/* <p>
            <Button
              href="https://youtube.com/live/MB2vMCABZMQ"
              as={Link}
              sx={{ py: 16, px: 48, fontSize: 3 }}
            >
              オンライン観戦 (YouTube Live)
            </Button>
          </p> */}
        </Box>
        <Box>
          <GatsbyImage
            image={data.avatar.childImageSharp.gatsbyImageData}
            alt=""
          />
        </Box>
      </Grid>
    </>
  )
}

export default About
