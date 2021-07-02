import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
      {
        data.allMarkdownRemark.nodes.map(node => (
          <li key={node.frontmatter.title}>
            <Link to={node.frontmatter.slug}>
              {node.frontmatter.title}
            </Link>  
          </li>
        ))
      }
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
          slug
        }
      }
    }
  }
`

export default BlogPage