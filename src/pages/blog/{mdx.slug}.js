import * as React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../../components/layout"

const BlogPost = ({
   data: {
      mdx: { frontmatter, body },
   },
}) => {
   console.log(frontmatter)
   const image = getImage(frontmatter.hero_image)

   return (
      <Layout pageTitle="Super Cool Blog Posts">
         <p>Posted: {frontmatter.date}</p>
         <GatsbyImage image={image} alt={frontmatter.hero_image_alt} />
         <p>
            Photo Credit:{" "}
            <a href={frontmatter.hero_image_credit_link}>{frontmatter.hero_image_credit_text} </a>{" "}
         </p>
         <MDXRenderer>{body}</MDXRenderer>
      </Layout>
   )
}

export const query = graphql`
   query ($slug: String) {
      mdx(slug: { eq: $slug }) {
         body
         frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            hero_image_alt
            hero_image_credit_link
            hero_image_credit_text
            hero_image {
               childImageSharp {
                  gatsbyImageData
               }
            }
         }
      }
   }
`

export default BlogPost
