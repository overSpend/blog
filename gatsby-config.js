module.exports = {
    siteMetadata: {
        title: `OVERSPEND`,
        description: `OVERSPEND's Blog`,
        author: `과소비`,
        authorTagline: `당신의 과소비를 위해`,
        siteUrl: `https://overspend.netlify.com`
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/content/blog`
            }
        },
        {
            resolve: `gatsby-plugin-styled-components`,
            options: {}
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                // replace "UA-XXXXXXXXX-X" with your own Tracking ID
                trackingId: 'UA-155020282-1'
            }
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `OVERSPEND's Blog`,
                short_name: `과소비의 블로그`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `standalone`,
                icon: `src/images/icon.png`
            }
        },
        `gatsby-plugin-feed`,
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-offline`,
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-remark`,
        `gatsby-plugin-emotion`,
        `gatsby-remark-reading-time`
    ]
};