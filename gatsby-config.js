module.exports = {
    siteMetadata: {
        siteUrl: 'https://www.yourdomain.tld',
        title: 'arielbarbozaportfolio',
    },
    plugins: [
        `gatsby-plugin-postcss`,
        'gatsby-plugin-theme-ui',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sitemap',
        'gatsby-plugin-mdx',
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-dark-mode`,
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pages',
                path: './src/pages/',
            },
            __key: 'pages',
        },
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: `ksjezryl0d4i`,
                accessToken: `b42OiMD7NNZEkzqGAykud4Sq8try_aGnjEgmDzEftlY`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `content`,
                path: `${__dirname}/src/content`,
            },
        },
    ],
};
