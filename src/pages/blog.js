import * as React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const BlogPage = ({ data }) => {
   const blogNameDisplay = data.allFile.nodes.map(n => <li key={n.name}> {n.name} </li>)

   return (
      <Layout pageTitle="My Blog Posts">
         <ul>{blogNameDisplay}</ul>
      </Layout>
   )
}

export const query = graphql`
   query {
      allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
         nodes {
            name
         }
      }
   }
`

export default BlogPage
