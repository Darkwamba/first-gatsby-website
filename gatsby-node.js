const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
/* quando crea un nodo crea lo slug */ 
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
}
/* quando crea un nodo crea lo slug */ 
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  /* query per tirare su le pagine generate dai dati */ 
  const result = await graphql(`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            slug
          }
        }
      }
    }
  }
  `)
 /* creo una pagina per ogni nodo restituito passando una pagina template */
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: path.resolve(`./src/pages/template-post.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.frontmatter.slug,
      },
    })
  })
}