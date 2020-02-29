import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostsList from "../components/PostsList"

import { connect } from "react-redux"
import { toggleDarkmode } from "../state/actions/darkMode"
import "../assets/styles/styles.scss"

const IndexPage = ({ toggleDarkmode, isDarkMode }) => {
  const data = useStaticQuery(graphql`
    query postsList {
      allWordpressPost(sort: { order: ASC, fields: id }, limit: 3) {
        edges {
          node {
            id
            title
            date(formatString: "lll")
            path
            excerpt
            featured_media {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
              source_url
              alt_text
            }
            categories {
              path
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
    <Layout>
      <SEO title="Home" />
      <h1>My blog, a xuli</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <button onClick={() => toggleDarkmode(isDarkMode)}>toggle</button>
      </div>
      <PostsList posts={lastPosts} />
    </Layout>
  )
}

const mapStateToProps = ({ darkMode }) => ({ isDarkMode: darkMode.isDarkMode })
const mapDispatchToProps = { toggleDarkmode }

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage)

// post id 7f77a39f-da02-5c1c-b0f9-7542962dc1f1
