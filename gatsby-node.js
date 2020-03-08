const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // query content for WordPress posts
  const result = await graphql(`
    query {
      allWordpressPost {
        edges {
          node {
            id
            slug
            categories {
              slug
            }
          }
        }
      }
      allWordpressCategory {
        nodes {
          slug
          name
          id
        }
      }
      allWordpressTag {
        edges {
          node {
            name
            path
            id
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  const posts = result.data.allWordpressPost.edges
  const categories = result.data.allWordpressCategory.nodes
  const tags = result.data.allWordpressTag.edges

  const postTemplate = path.resolve(`./src/templates/post/Post.js`)
  const categoryTemplate = path.resolve(`./src/templates/category.js`)
  const tagTemplate = path.resolve(`./src/templates/tags.js`)

  posts.forEach(edge => {
    createPage({
      // will be the url for the page
      path: `${edge.node.categories[0].slug}/${edge.node.slug}`,
      // specify the component template of your choice
      component: slash(postTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this posts's data.
      context: {
        id: edge.node.id,
      },
    })
  })
  categories.forEach(node => {
    createPage({
      // will be the url for the page
      path: node.slug,
      // specify the component template of your choice
      component: slash(categoryTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this posts's data.
      context: {
        id: node.id,
        title: node.name,
      },
    })
  })

  tags.forEach(({ node }) => {
    createPage({
      path: node.path,
      component: slash(tagTemplate),
      context: {
        id: node.id,
        name: node.name,
      },
    })
  })
}
