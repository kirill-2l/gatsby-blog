import React from "react"

import LogoGatsby from "../../assets/images/svg/Gatsby_Logo.svg"
import LogoReact from "../../assets/images/svg/React_Logo.svg"
import LogoGraphQL from "../../assets/images/svg/GraphQL_Logo.svg"

const ContentFooter = () => (
  <div className="content__footer">
    <div className="content__logo-list">
      <a href="https://gatsbyjs.org" target="_blank" rel="noopener noreferrer">
        <LogoGatsby className="content__logo content__gatsby" />
      </a>
      <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        <LogoReact className="content__logo content__react" />
      </a>
      <a href="https://graphql.org" target="_blank" rel="noopener noreferrer">
        <LogoGraphQL className="content__logo content__graphql" />
      </a>
    </div>
  </div>
)
export default ContentFooter
