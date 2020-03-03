import React from "react"

const ContentHeader = ({ content }) => {
  const {title, date} = content;
  return (
    <div className="content__header">
      <h1 className="content__title">{title}</h1>
      {date && (
        <div className="content__info">
          <div className="content__date">{date}</div>
        </div>
      )}
    </div>
  )
}

export default ContentHeader;
