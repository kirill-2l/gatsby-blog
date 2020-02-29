import React from "react"
import { Link } from "gatsby"

const PostsList = ({ posts }) => {
  const stripHTML = string => string.replace(/(<([^>]+)>)/gi, "")

  return (
    <div className="posts-list">
      {posts.map(post => {
        let {
          node: {
            id,
            date,
            title,
            excerpt,
            tags,
            path,
            featured_media,
            categories,
          },
        } = post

        return (
          <div key={id} className="posts-item">
            <div className="posts-item__header">
              {featured_media && (
                <div className="posts-item__visual">
                  <img
                    src={featured_media.source_url}
                    alt={featured_media.alt_text}
                    className="posts-item__visual-img"
                  />
                </div>
              )}
              <Link to={categories[0].path} className="posts-item__category">
                {categories[0].slug}
              </Link>
              <h3 className="posts-item__title">
                <Link to={path}>{title}</Link>
              </h3>
              <div className="posts-item__date">{date}</div>
            </div>
            <div className="posts-item__body">
              {excerpt && (
                <figcaption className="posts-item__excerpt">
                  {stripHTML(excerpt)}
                </figcaption>
              )}
              {tags && (
                <div className="posts-item__tags tags">
                  {tags.map(({ path, name, id }) => (
                    <a
                      key={id}
                      href={path}
                      className="posts-item__tag tags__item"
                    >
                      {name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
export default PostsList
