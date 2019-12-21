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
                path: `${__dirname}/src/`
            }
        },
        {
            resolve: `gatsby-plugin-styled-components`,
            options: {}
        },
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-remark`,
        `gatsby-plugin-emotion`,
        `gatsby-remark-reading-time`
    ]
};