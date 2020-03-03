import React from "react"

const PostTags = ({ tags, mod }) => {
  return (
    <div className={mod ? `${mod} tags` : "tags"}>
      {tags.map(({ path, name, id }) => (
        <a key={id} href={path} className="posts-item__tag tags__item">
          {`#${name}`}
        </a>
      ))}
    </div>
  )
}
export default PostTags
