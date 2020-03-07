import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/Layout"
import PostsList from "../components/PostsList"
const CategoryTemplate = ({ data, pageContext }) => {
  const posts = data.allWordpressPost.edges
  return (
    <Layout content={{ title: pageContext.title }}>
      <SEO title={pageContext.title}/>
      <PostsList posts={posts} />
    </Layout>
  )
}
export default CategoryTemplate
export const categoryQuery = graphql`
  query($id: String!) {
    allWordpressPost(
      filter: { categories: { elemMatch: { id: { eq: $id } } } }
      sort: { fields: date, order: DESC }
    ) {
      edges {
        node {
          id
          slug
          excerpt
          title
          path
          date(formatString: "LL", locale: "ru")
          featured_media {
            localFile {
              childImageSharp {
                fluid(maxWidth: 820, maxHeight: 300) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            alt_text
          }
          tags {
            name
            path
            id
          }
        }
      }
    }
  }
`
