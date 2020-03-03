import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostsList from "../components/PostsList"

import { connect } from "react-redux"
import { toggleDarkmode } from "../state/actions/darkMode"
import "../assets/styles/styles.scss"

const IndexPage = ({ toggleDarkmode, isDarkMode }) => {
  const data = useStaticQuery(graphql`
    query postsList {
      allWordpressPost(sort: { order: DESC, fields: date }, limit: 10) {
        edges {
          node {
            id
            title
            date(formatString: "LL", locale: "ru")
            path
            excerpt
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
            categories {
              name
              slug
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
  `)

  const lastPosts = data.allWordpressPost.edges
  return (
    <Layout content={{ title: "My blog, a xuli" }}>
      <SEO title="Home" />
      <PostsList posts={lastPosts} />
    </Layout>
  )
}

const mapStateToProps = ({ darkMode }) => ({ isDarkMode: darkMode.isDarkMode })
const mapDispatchToProps = { toggleDarkmode }

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage)

// post id 7f77a39f-da02-5c1c-b0f9-7542962dc1f1
