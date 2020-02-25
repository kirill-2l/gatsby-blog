import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

const Nav = () => {
  const navItems = useStaticQuery(graphql`
    query navItemsQuery {
      site {
        siteMetadata {
          navLinks {
            name
            link
          }
        }
      }
    }
  `)

  return (
    <nav className="nav">
      <ul className="nav__list">
        {navItems.site.siteMetadata.navLinks.map(({ name, link }) => (
          <div key={name} className="nav__item">
            <Link
              to={link}
              className="nav__link"
              activeClassName="nav__link--active"
            >
              {name}
            </Link>
          </div>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
