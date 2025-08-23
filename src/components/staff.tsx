import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Heading, Grid, Text, Card, Image } from "theme-ui"

const Staff = () => {
  const data = useStaticQuery(graphql`
    query StaffQuery {
      allStaffYaml(
        sort: { fields: priority, order: ASC }
        filter: { visible: { eq: true } }
      ) {
        edges {
          node {
            name
            role
            picture
          }
        }
      }
    }
  `)

  const staff = data.allStaffYaml.edges
  return (
    <>
      <Heading id="staff" as="h2" paddingTop={32} paddingBottom={16}>
        実行委員
      </Heading>
      <Grid width={[75, null, 228]} gap={16}>
        {staff.map(({ node }) => (
          <Card key={node.name} p={3}>
            <Image src={node.picture} sx={{ borderRadius: 256 }} />
            <Text
              sx={{
                fontSize: [2, null, 3],
                textAlign: "center",
                display: "block",
              }}
            >
              {node.name}
            </Text>
            {node.role && (
              <Text
                sx={{
                  fontSize: [0, null, 1],
                  textAlign: "center",
                  display: "block",
                }}
              >
                {node.role}
              </Text>
            )}
          </Card>
        ))}
      </Grid>
    </>
  )
}

export default Staff
