const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // query content for WordPress posts
  const posts = await graphql(`
    query {
      allWordpressPost {
        edges {
          node {
            id
            slug
            excerpt
            content
            title
            categories {
              slug
            }
            tags {
              name
            }
          }
        }
      }
    }
  `)
  const categories = await graphql(`
    query {
      allWordpressCategory {
        nodes {
          slug
          name
          id
        }
      }
    }
  `)
  const postTemplate = path.resolve(`./src/templates/post.js`)
  const categoryTemplate = path.resolve(`./src/templates/category.js`)
  posts.data.allWordpressPost.edges.forEach(edge => {
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
  categories.data.allWordpressCategory.nodes.forEach(node => {
    createPage({
      // will be the url for the page
      path: node.slug,
      // specify the component template of your choice
      component: slash(categoryTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this posts's data.
      context: {
        id: node.id,
        name: node.name
      },
    })
  })
}
