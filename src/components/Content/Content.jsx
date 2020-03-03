import React from "react"
import ContentFooter from "./ContentFooter"
import ContentHeader from "./ContentHeader"
const Content = ({ children, content }) => {
  return (
    <main className="content">
      <ContentHeader content={content} />
      <div className="content__body">{children}</div>
      <ContentFooter />
    </main>
  )
}

export default Content
