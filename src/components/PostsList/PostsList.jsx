import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const PostsList = ({ posts }) => {
  const stripHTML = string => string.replace(/(<([^>]+)>)/gi, "")

  return (
    <div className="posts-list">
      {posts.map(post => {
        const {
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
            {featured_media && (
              <div className="posts-item__visual">
                <Img
                  loading="lazy"
                  fluid={featured_media.localFile.childImageSharp.fluid}
                  alt={featured_media.alt}
                  toFormat={"WEBP"}
                  grayscale
                  duotone
                />
              </div>
            )}

            <div className="posts-item__body">
              {categories && (
                <Link
                  to={`/${categories[0].slug}`}
                  className="posts-item__category"
                >
                  {categories[0].name}
                </Link>
              )}

              <h3 className="posts-item__title">
                <Link to={path} className="posts-item__title-link">
                  {title}
                </Link>
              </h3>
              <div className="posts-item__date">{date}</div>
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
                      {`#${name}`}
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
