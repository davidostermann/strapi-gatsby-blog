import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({data}) => {
  console.log('data', data)
  return (<div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <ul>
      {
        data.allStrapiArticle.edges.map(({node}) => {
          return <li>
            <h3><Link to={`/article/${node.slug}`}>{ node.title }</Link></h3>
            <p>{ node.resume }</p>
          </li>
        })
      }
    </ul>
  </div>)
}
export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiArticle {
      edges {
        node {
          id
          title
          resume
          slug
        }
      }
    }
  }
`

