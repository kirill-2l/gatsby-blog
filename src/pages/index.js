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
            slug
            excerpt
            title
            path
            categories {
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

  const lastPosts = data.allWordpressPost.edges;
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
