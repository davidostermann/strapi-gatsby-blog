import React from 'react'
import Link from 'gatsby-link'
import ReactMarkdown from 'react-markdown'

const ArticleTemplate = ({ data }) => {
  console.log('data : ', data)

  return <div>
      <h1>{data.strapiArticle.title}</h1>
      <ReactMarkdown source={data.strapiArticle.content} />
      <div>
        {
          data.strapiArticle.tags.map( ({id, label}) => (
            <span key={id}>
              <Link to={`/tag/${id}`}>{label}</Link> 
            </span>
          ))
        }
      </div>
    </div>
}

export default ArticleTemplate

export const query = graphql`
         query ArticleTemplate($id: String!) {
           strapiArticle(id: { eq: $id }) {
             title
             content
             tags {
               id
               label
             }
             author {
               id
               username
             }
           }
         }
       `
