import * as React from "react"
import Layout from "../components/layout"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"

const BlogPage = ({ data }) => {
   const blogNameDisplay = data.allMdx.nodes.map(n => (
      <article key={n.id}>
         {" "}
         <h2> {n.frontmatter.title} </h2>
         <p> Posted: {n.frontmatter.date}</p>
         {<MDXRenderer>{n.body}</MDXRenderer>}
      </article>
   ))
   console.log(data)

   return (
      <Layout pageTitle="My Blog Posts">
         <ul>{blogNameDisplay}</ul>{" "}
      </Layout>
   )
}

export const query = graphql`
   query {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
         nodes {
            frontmatter {
               date(formatString: "MMMM D, YYYY")
               title
            }
            id
            body
         }
      }
   }
`

export default BlogPage
