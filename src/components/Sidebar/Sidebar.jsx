import { Link } from "gatsby"
import React from "react"
import Nav from "../Nav"
import Logo from "../../assets/images/svg/logo.svg"
import Contacts from '../Contacts';

const Sidebar = ({ siteTitle }) => (
  <aside className="sidebar">
    <div className="sidebar__wrapper">
      <Link to="/" className="logo">
        <Logo className="logo-svg" />
      </Link>
      <Nav />
      <div className="sidebar__contacts">
        <Contacts />
      </div>
    </div>
  </aside>
)

export default Sidebar
