import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"

import { connect } from "react-redux"
import { toggleDarkmode } from "../state/actions/darkMode"
import "../assets/styles/styles.scss"


const IndexPage = ({ toggleDarkmode, isDarkMode }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <button onClick={() => toggleDarkmode(isDarkMode)}>toggle</button>
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}


const mapStateToProps = ({ darkMode }) => ({ isDarkMode: darkMode.isDarkMode })
const mapDispatchToProps = { toggleDarkmode }

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage)
