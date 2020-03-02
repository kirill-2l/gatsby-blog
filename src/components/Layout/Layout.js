/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import "../../assets/styles/styles.scss"

import Sidebar from "../Sidebar"
import Content from "../Content"

const Layout = ({ children, header }) => {
  return (
    <div className="app">
      <Sidebar />
      <Content header={header}>{children}</Content>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
