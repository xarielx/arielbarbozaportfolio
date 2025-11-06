module.exports = {
    siteMetadata: {
        siteUrl: 'https://arielbarboza.com',
        title: 'Ariel Barboza - AI Engineer & Automation Expert | U.S. Army Veteran',
        description: 'Ariel Barboza: U.S. Army Veteran (Tank Crewman), AI Engineer, and Automation Expert. Staff Software Engineer at Lockheed Martin, Founder & CEO of HilBar LLC. Specializing in LLMs, machine learning, enterprise AI solutions, and intelligent automation. Delivering battle-tested AI systems that drive measurable business value.',
        author: 'Ariel Barboza',
        keywords: 'AI Engineer, Machine Learning, LLM, Artificial Intelligence, Automation Expert, U.S. Army Veteran, Tank Crewman, Software Engineer, Lockheed Martin, HilBar LLC, Enterprise AI, Natural Language Processing, Deep Learning, DevSecOps, Cloud Architecture, Python, React, Full Stack Developer, Cornell University, University of Florida, Systems Engineering, Agile, Release Train Engineer',
        image: '/ariel_barboza.jpg',
        twitterUsername: '@xarielx506',
        linkedIn: 'https://linkedin.com/in/abarboza',
        github: 'https://github.com/xarielx',
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
        // Contentful disabled - using MDX instead
        // {
        //     resolve: `gatsby-source-contentful`,
        //     options: {
        //         spaceId: `ksjezryl0d4i`,
        //         accessToken: `b42OiMD7NNZEkzqGAykud4Sq8try_aGnjEgmDzEftlY`,
        //     },
        // },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `content`,
                path: `${__dirname}/src/content`,
            },
        },
    ],
};
