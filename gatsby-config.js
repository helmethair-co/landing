module.exports = {
    siteMetadata: {
        title: 'Felfele Foundation',
        author: 'Felfele Foundation',
        description: 'We build products that let people connect and inspire each other, without being exploited by technology.',
        siteUrl: 'https://felfele.org',
    },
    pathPrefix: '/',
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/pages`,
                name: 'blog',
            },
        },
        {
          resolve: "gatsby-source-filesystem",
          options: {
            name: "fonts",
            path: `${__dirname}/src/fonts/`
          }
        },
        {
          resolve: "gatsby-source-filesystem",
          options: {
            name: "images",
            path: `${__dirname}/src/assets/images/`
          }
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 500,
                        },
                    },
                    {
                        resolve: `gatsby-remark-responsive-iframe`,
                        options: {
                            wrapperStyle: `margin-bottom: 1.0725rem`,
                        },
                    },
                    'gatsby-remark-autolink-headers',
                    'gatsby-remark-prismjs',
                    'gatsby-remark-copy-linked-files',
                    'gatsby-remark-smartypants',
                    'gatsby-plugin-twitter',
                ],
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-feed`,
            options: {
              query: `
                {
                  site {
                    siteMetadata {
                      title
                      description
                      siteUrl
                      site_url: siteUrl
                    }
                  }
                }
              `,
              feeds: [
                {
                  serialize: ({ query: { site, allMarkdownRemark } }) => {
                    return allMarkdownRemark.edges.map(edge => {
                      return Object.assign({}, edge.node.frontmatter, {
                        description: edge.node.excerpt,
                        date: edge.node.frontmatter.date,
                        url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                        guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                        custom_elements: [{ "content:encoded": edge.node.html }],
                      })
                    })
                  },
                  query: `
                    {
                      allMarkdownRemark(
                        sort: { order: DESC, fields: [frontmatter___date] },
                      ) {
                        edges {
                          node {
                            excerpt
                            html
                            fields { slug }
                            frontmatter {
                              title
                              date
                            }
                          }
                        }
                      }
                    }
                  `,
                  output: "/rss.xml",
                  title: "Felfele Foundation RSS",
                  // optional configuration to insert feed reference in pages:
                  // if `string` is used, it will be used to create RegExp and then test if pathname of
                  // current page satisfied this regular expression;
                  // if not provided or `undefined`, all pages will have feed reference inserted
                  match: "^/blog/",
                },
              ],
            },
          },
          {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-minimal-portfolio-blog`,
                short_name: `gmpb`,
                start_url: `/`,
                background_color: `#ffffff`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: "src/assets/images/felfele-logo.png",
                localize: [
                  {
                    start_url: '/niche',
                    lang: 'niche',
                    name: 'niche',
                    short_name: 'niche',
                    display: `minimal-ui`,
                    background_color: `#141033`,
                    theme_color: `#34DFB6`,
                    icon: 'src/assets/images/niche-icon.png',
                  },
                ],
            },
        },
        `gatsby-plugin-remove-serviceworker`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sitemap`,
    ],
};
