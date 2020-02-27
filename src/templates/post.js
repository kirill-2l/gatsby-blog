import React from "react"
import Layout from "../components/Layout"
const PageTemplate = ({ data }) => {
  const {
    wordpressPost: { title, content },
  } = data
  return (
    <Layout>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </Layout>
  )
}
export default PageTemplate

export const postQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
    }
  }
`
