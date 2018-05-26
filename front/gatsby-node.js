/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 // You can delete this file if you're not using it

const path = require(`path`);
const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
  // Query for nodes to use in creating pages.
  resolve(
    graphql(request).then(result => {
      if (result.errors) {
        reject(result.errors)
      }
      return result;
    })
  )
});

exports.createPages = ({ boundActionCreators, graphql}) => {

  const { createPage } = boundActionCreators;

  const getArticles = makeRequest(graphql, `
    {
      allStrapiArticle {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
    `).then(result => {
      console.log('result : ', result);

      // Create pages for each article.
      result.data.allStrapiArticle.edges.forEach(({ node }) => {
        createPage({
          path: `/article/${node.slug}`,
          component: path.resolve(`src/templates/article.js`),
          context: {
            id: node.id,
          },
        })
      })
    });

  const getTags = makeRequest(graphql, `
    {
      allStrapiTag {
        edges {
          node {
            id
          }
        }
      }
    }
    `).then(result => {
    // Create pages for each article.
      result.data.allStrapiTag.edges.forEach(({ node }) => {
        createPage({
          path: `/tag/${node.id}`,
          component: path.resolve(`src/templates/tag.js`),
          context: {
            id: node.id,
          },
      })
    })
  })
  // Query for articles nodes to use in creating pages.
  return Promise.all([getArticles, getTags]);
};