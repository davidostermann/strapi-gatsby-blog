module.exports = {
  siteMetadata: {
    title: 'Blog strapi',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: 'http://localhost:1337',
        contentTypes: [
          'article',
          'tag'
        ]
      }
    }
  ],
}
