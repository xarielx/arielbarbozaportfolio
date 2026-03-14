module.exports = {
    siteMetadata: {
        siteUrl: 'https://arielbarboza.com',
        title: 'Ariel Barboza | AI Solutions Architect & Engineering Manager | Enterprise AI Adoption Leader',
        description:
            'Ariel Barboza is a Staff Software Engineer, AI Solutions Architect, and Engineering Manager at Lockheed Martin. Specializing in enterprise AI adoption, LLM-powered solutions, ontology management, intelligent automation, and leading 104+ engineers as Release Train Engineer. Cornell M.Eng, UF CS & MBA.',
        author: 'Ariel Barboza',
        jobTitle: 'Staff Software Engineer & AI Solutions Architect',
        keywords:
            'Ariel Barboza, AI Solutions Architect, Engineering Manager, AI Manager, AI Adoption Executive, Ontology Manager, AI Transformation Leader, Staff Software Engineer, Release Train Engineer, LLM Engineer, Enterprise AI, Natural Language Processing, Machine Learning Engineer, Predictive Analytics, Automation Engineering Leader, Technical Program Manager, AI/ML Engineering Manager, DevSecOps, Full Stack Engineer, Lockheed Martin, Cornell University, University of Florida, Agile Leadership, AI Strategy, Knowledge Graph Engineering, Digital Transformation, Python Developer, React Developer, Data Science, Systems Engineering',
        organizationName: 'Lockheed Martin',
        location: 'Melbourne, FL',
        image: '/icons/icon-512x512.png',
        twitterUsername: '@xarielx506',
        linkedinUrl: 'https://linkedin.com/in/abarboza',
    },
    plugins: [
        `gatsby-plugin-postcss`,
        'gatsby-plugin-theme-ui',
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-plugin-sitemap',
            options: {
                query: `
                    {
                        site {
                            siteMetadata {
                                siteUrl
                            }
                        }
                        allSitePage {
                            nodes {
                                path
                            }
                        }
                    }
                `,
            },
        },
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
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `content`,
                path: `${__dirname}/src/content`,
            },
        },
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                host: 'https://arielbarboza.com',
                sitemap: 'https://arielbarboza.com/sitemap-index.xml',
                policy: [{ userAgent: '*', allow: '/' }],
            },
        },
    ],
};
