import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"
import Img from "gatsby-image"

const PostTemplate = ({ data }) => {
  const { title, content, date, featured_media } = data.wordpressPost
  return (
    <Layout>
      <div className="post__header">
        <h1 className="post__title">{title}</h1>
        <div className="post__info">
          <div className="posts-item__date">{date}</div>
          <Img
            loading="lazy"
            fluid={featured_media.localFile.childImageSharp.fluid}
            alt={featured_media.alt_text}
            toFormat={"WEBP"}
            grayscale
            duotone
          />
        </div>
      </div>
      <div
        className="post__content post-content"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </Layout>
  )
}
export default PostTemplate
export const postQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
      date(formatString: "LL", locale: "ru")
      categories {
        name
        slug
      }
      featured_media {
        localFile {
          childImageSharp {
            fluid(maxWidth: 760, maxHeight: 400) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        alt_text
      }
      tags {
        name
        id
        path
      }
    }
  }
`
