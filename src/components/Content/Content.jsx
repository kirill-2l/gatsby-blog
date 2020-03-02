import React from "react"
import ContentFooter from './ContentFooter';
const Content = ({ children, header }) => {
  return (
    <main className="main">
      {header && <h1 className="main__header">{header}</h1>}
      {children}
      <ContentFooter />
    </main>
  )
}

export default Content
