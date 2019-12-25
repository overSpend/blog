module.exports = {
    siteMetadata: {
        title: `OVERSPEND`,
        description: `OVERSPEND's Blog`,
        author: `과소비`,
        authorTagline: `당신의 과소비를 위해`
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/posts`
            }
        },
        {
            resolve: `gatsby-plugin-styled-components`,
            options: {}
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
        `gatsby-plugin-offline`,
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-remark`,
        `gatsby-plugin-emotion`,
        `gatsby-remark-reading-time`
    ]
};