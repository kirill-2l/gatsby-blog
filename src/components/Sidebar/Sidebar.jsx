import { Link } from "gatsby"
import React from "react"
import Nav from '../Nav';

const Sidebar = ({ siteTitle }) => (
  <aside className="sidebar">
    <Link to="/" className="logo">Logo</Link>
    <Nav />
  </aside>
)

export default Sidebar
