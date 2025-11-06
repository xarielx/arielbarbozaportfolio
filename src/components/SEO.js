import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({ title, description, pathname, children }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    siteUrl
                    title
                    description
                    author
                    keywords
                    image
                    twitterUsername
                    linkedIn
                    github
                }
            }
        }
    `);

    const {
        siteUrl,
        title: defaultTitle,
        description: defaultDescription,
        author,
        keywords,
        image,
        twitterUsername,
    } = data.site.siteMetadata;

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        url: pathname ? `${siteUrl}${pathname}` : siteUrl,
        image: `${siteUrl}${image}`,
    };

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <html lang='en' />
            <title>{seo.title}</title>
            <meta name='title' content={seo.title} />
            <meta name='description' content={seo.description} />
            <meta name='keywords' content={keywords} />
            <meta name='author' content={author} />
            <link rel='canonical' href={seo.url} />

            {/* Open Graph / Facebook */}
            <meta property='og:type' content='website' />
            <meta property='og:url' content={seo.url} />
            <meta property='og:title' content={seo.title} />
            <meta property='og:description' content={seo.description} />
            <meta property='og:image' content={seo.image} />

            {/* Twitter */}
            <meta property='twitter:card' content='summary_large_image' />
            <meta property='twitter:url' content={seo.url} />
            <meta property='twitter:title' content={seo.title} />
            <meta property='twitter:description' content={seo.description} />
            <meta property='twitter:image' content={seo.image} />
            <meta property='twitter:creator' content={twitterUsername} />

            {/* Structured Data for AI and Search Engines */}
            <script type='application/ld+json'>
                {JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'Person',
                    name: 'Ariel Barboza',
                    url: siteUrl,
                    image: seo.image,
                    sameAs: [
                        'https://linkedin.com/in/abarboza',
                        'https://github.com/xarielx',
                        'https://twitter.com/xarielx506',
                        'https://medium.com/@xarielx',
                        'https://dev.to/arielb506',
                    ],
                    jobTitle: 'Staff Software Engineer & AI Solutions Architect',
                    worksFor: [
                        {
                            '@type': 'Organization',
                            name: 'Lockheed Martin',
                        },
                        {
                            '@type': 'Organization',
                            name: 'HilBar LLC',
                            url: 'https://hilbar.llc',
                            foundingDate: '2020',
                        },
                    ],
                    alumniOf: [
                        {
                            '@type': 'CollegeOrUniversity',
                            name: 'Cornell University',
                        },
                        {
                            '@type': 'CollegeOrUniversity',
                            name: 'University of Florida',
                        },
                    ],
                    knowsAbout: [
                        'Artificial Intelligence',
                        'Machine Learning',
                        'Large Language Models',
                        'Natural Language Processing',
                        'Automation',
                        'DevSecOps',
                        'Cloud Computing',
                        'Full Stack Development',
                        'Systems Engineering',
                        'Agile Methodology',
                    ],
                    description: seo.description,
                    veteran: {
                        '@type': 'Organization',
                        name: 'United States Army',
                        jobTitle: '19K M1 Armor Crewman',
                    },
                })}
            </script>

            {children}
        </Helmet>
    );
};

export default SEO;
