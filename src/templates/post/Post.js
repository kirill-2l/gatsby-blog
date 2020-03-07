import React from "react"
import { graphql } from "gatsby"
import SEO from "../../components/seo"
import Layout from "../../components/Layout"
import Img from "gatsby-image"
import PostTags from "../../components/PostTags"

const PostTemplate = ({ data }) => {
  const { title, content, date, featured_media, tags, excerpt } = data.wordpressPost
  return (
    <Layout content={{ title, date }}>
      <SEO title={title} description={excerpt}/>
      {featured_media && (
        <Img
          loading="lazy"
          fluid={featured_media.localFile.childImageSharp.fluid}
          alt={featured_media.alt_text}
          toFormat={"WEBP"}
          grayscale
          duotone
        />
      )}

      <div
        className="post__content post-content"
        dangerouslySetInnerHTML={{ __html: content }}
      />

      <PostTags tags={tags} mod="post__tags" />
    </Layout>
  )
}
export default PostTemplate
export const postQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
      excerpt
      date(formatString: "LL", locale: "ru")
      categories {
        name
        slug
      }
      featured_media {
        localFile {
          childImageSharp {
            fluid(maxWidth: 820, maxHeight: 400) {
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
