import React from "react"
import { Link } from "gatsby"

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <div className="nav__item">
          <Link to="" className="nav__link">
            Frontend
          </Link>
        </div>
        <div className="nav__item">
          <Link to="" className="nav__link">
            ReactJS
          </Link>
        </div>
        <div className="nav__item">
          <Link to="" className="nav__link">
            HTML5
          </Link>
        </div>
        <div className="nav__item">
          <Link to="" className="nav__link">
            Life
          </Link>
        </div>
      </ul>
    </nav>
  )
}

export default Nav
