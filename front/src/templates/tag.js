import React from 'react'
import Link from 'gatsby-link'

const TagTemplate = ({ data }) => {

  return <div>
    <h1>{data.strapiTag.label}</h1>
    <ul>
      {
        data.strapiTag.articles.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/article/${id}`}>{title}</Link>
          </li>
        ))
      }
    </ul>
  </div>
}

export default TagTemplate

export const query = graphql`
  query TagTemplate($id: String!) {
    strapiTag(id: { eq: $id }) {
      label
      articles {
        id
        title        
      }
    }
  }
`
