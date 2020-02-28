import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
const PostTemplate = ({ data }) => {
  const { title, content } = data.wordpressPost
  return (
    <Layout>
      {<h1>{title}</h1>}
      {<div dangerouslySetInnerHTML={{ __html: content }}></div>}
    </Layout>
  )
}
export default PostTemplate
export const postQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
    }
  }
`
