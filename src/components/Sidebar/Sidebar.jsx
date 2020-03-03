import { Link } from "gatsby"
import React from "react"
import Nav from '../Nav';
import Logo from '../../assets/images/svg/logo.svg'

const Sidebar = ({ siteTitle }) => (
  <aside className="sidebar">
    <Link to="/" className="logo"><Logo className="logo-svg"/></Link>
    <Nav />
  </aside>
)

export default Sidebar
