import React from "react"

import LogoGatsby from "../../assets/images/svg/Gatsby_Logo.svg"
import LogoReact from "../../assets/images/svg/React_Logo.svg"
import LogoGraphQL from "../../assets/images/svg/GraphQL_Logo.svg"

const ContentFooter = () => (
  <div className="main__footer">
    <div className="main__logo-list">
      <a href="https://gatsbyjs.org" target="_blank" rel="noopener noreferrer">
        <LogoGatsby className="main__logo main__gatsby" />
      </a>
      <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        <LogoReact className="main__logo main__react" />
      </a>
      <a href="https://graphql.org" target="_blank" rel="noopener noreferrer">
        <LogoGraphQL className="main__logo main__graphql" />
      </a>
    </div>
  </div>
)
export default ContentFooter
