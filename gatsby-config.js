module.exports = {
  siteMetadata: {
    title: "My First Gatsby Site",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "drupal",
        fieldName: "Drupal",
        url: "https://csc496f22demo.tldr.dev/graphql"
        
      }
    },
  ],
}
