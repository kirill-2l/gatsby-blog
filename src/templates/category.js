import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import PostsList from "../components/PostsList"
const CategoryTemplate = ({ data, pageContext }) => {
  const posts = data.allWordpressPost.edges
  return (
    <Layout>
      <h2 className="category-title">{pageContext.name}</h2>
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
          date(formatString: "lll")
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
