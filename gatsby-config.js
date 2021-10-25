module.exports = {
  siteMetadata: {
    siteTitle: `Prosigo hacia la meta`,
    siteTitleAlt: `Prosigo hacia la meta - Artículos de vida cristiana, devocionales y recursos bíblicos`,
    siteHeadline: `Prosigo hacia la meta - Artículos de vida cristiana, devocionales y recursos bíblicos`,
    siteUrl: `https://prosigohacialameta.com`,
    siteDescription: `Artículos de vida cristiana, devocionales y recursos bíblicos.`,
    siteLanguage: `en`,
    siteImage: `/banner.png`,
    author: `@lavaldi_`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog-core`,
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `Nosotros`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `Instagram`,
            url: `https://instagram.com/prosigohacialameta`,
          },
          {
            name: `Facebook`,
            url: `https://facebook.com/prosigohacialametacom`,
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.gstatic.com`],
        interval: 300,
        timeout: 30000,
        // If you plan on changing the font you'll also need to adjust the Theme UI config to edit the CSS
        // See: https://github.com/LekoArts/gatsby-themes/tree/master/examples/minimal-blog#changing-your-fonts
        web: [
          {
            name: `IBM Plex Sans`,
            file: `https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&display=swap`,
          },
        ],
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Prosigo hacia la meta`,
        short_name: `Prosigo hacia la meta`,
        description: `Artículos de vida cristiana, devocionales y recursos bíblicos.`,
        start_url: `/`,
        background_color: `#fff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        theme_color: `#6943ff`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title: siteTitle
                description: siteDescription
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allPost } }) =>
              allPost.nodes.map((post) => {
                const url = site.siteMetadata.siteUrl + post.slug;
                const content = `<p>${post.excerpt}</p><div style="margin-top: 50px; font-style: italic;"><strong><a href="${url}">Keep reading</a>.</strong></div><br /> <br />`;

                return {
                  title: post.title,
                  date: post.date,
                  excerpt: post.excerpt,
                  url,
                  guid: url,
                  custom_elements: [{ "content:encoded": content }],
                };
              }),
            query: `
              {
                allPost(sort: { fields: date, order: DESC }) {
                  nodes {
                    title
                    date(formatString: "MMMM D, YYYY")
                    excerpt
                    slug
                  }
                }
              }
            `,
            output: `rss.xml`,
            title: `Prosigo hacia la meta - Artículos de vida cristiana, devocionales y recursos bíblicos`,
          },
        ],
      },
    },
  ],
};
