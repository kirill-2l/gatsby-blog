import React from "react"
import {Link} from "gatsby";

const PostsList = ({ posts }) => {
  const stripHTML = string => string.replace(/(<([^>]+)>)/gi, "")
  return (
    <div className="posts-list">
      {posts.map(({ node }) => (
        <div key={node.id} className="posts-item">
          <Link to={node.path} className="posts-item__header">
            <h3 className="posts-item__title">{node.title}</h3>
            <div className="posts-item__date">{node.date}</div>
          </Link>
          <div className="posts-item__body">
            {node.excerpt && (
              <figcaption className="posts-item__excerpt">
                {stripHTML(node.excerpt)}
              </figcaption>
            )}
            {node.tags && (
              <div className="posts-item__tags tags">
                {node.tags.map(({ path, name, id }) => (
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
      ))}
    </div>
  )
}
export default PostsList
