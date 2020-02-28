import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

const Nav = () => {
  const navItems = useStaticQuery(graphql`
    query navItemsQuery {
      allWordpressCategory {
        nodes {
          name
          slug
          id
        }
      }
    }
  `)
  const data = navItems.allWordpressCategory.nodes
  return (
    <nav className="nav">
      <ul className="nav__list">
        {data.map(({ name, slug, id }) => (
          <div key={id} className="nav__item">
            <Link
              to={`/${slug}`}
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
