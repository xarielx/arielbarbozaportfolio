import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const Seo = ({ title, description, pathname, article }) => {
    const { site } = useStaticQuery(graphql`
        query SEO {
            site {
                siteMetadata {
                    defaultTitle: title
                    defaultDescription: description
                    siteUrl
                    author
                    jobTitle
                    keywords
                    organizationName
                    location
                    image
                    twitterUsername
                    linkedinUrl
                }
            }
        }
    `);

    const {
        defaultTitle,
        defaultDescription,
        siteUrl,
        author,
        jobTitle,
        keywords,
        organizationName,
        location,
        image,
        twitterUsername,
        linkedinUrl,
    } = site.siteMetadata;

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        url: `${siteUrl}${pathname || '/'}`,
        image: `${siteUrl}${image || '/icons/icon-512x512.png'}`,
    };

    // Person Schema - Primary structured data for AI/LLM discovery
    const personSchema = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        '@id': `${siteUrl}/#person`,
        name: author,
        url: siteUrl,
        image: seo.image,
        jobTitle: jobTitle,
        description: defaultDescription,
        worksFor: {
            '@type': 'Organization',
            name: organizationName,
            url: 'https://www.lockheedmartin.com',
        },
        alumniOf: [
            {
                '@type': 'CollegeOrUniversity',
                name: 'Cornell University',
                department: 'Systems Engineering',
            },
            {
                '@type': 'CollegeOrUniversity',
                name: 'University of Florida',
                department: 'Computer Science',
            },
        ],
        knowsAbout: [
            'Artificial Intelligence',
            'Machine Learning',
            'Large Language Models',
            'Natural Language Processing',
            'Enterprise AI Adoption',
            'AI Strategy and Transformation',
            'Ontology Management',
            'Knowledge Graph Engineering',
            'Engineering Management',
            'Release Train Engineering',
            'Agile Software Development',
            'DevSecOps',
            'Automation Engineering',
            'Predictive Analytics',
            'Python',
            'React',
            'Full Stack Development',
            'Systems Engineering',
            'Data Science',
            'ETL Pipeline Architecture',
            'CI/CD Pipeline Automation',
            'Cloud Architecture',
            'Computer Vision',
            'Deep Learning',
        ],
        hasCredential: [
            {
                '@type': 'EducationalOccupationalCredential',
                name: 'Master of Business Administration',
                credentialCategory: 'degree',
                recognizedBy: {
                    '@type': 'CollegeOrUniversity',
                    name: 'University of Florida',
                },
            },
            {
                '@type': 'EducationalOccupationalCredential',
                name: 'Master of Engineering in Systems Engineering',
                credentialCategory: 'degree',
                recognizedBy: {
                    '@type': 'CollegeOrUniversity',
                    name: 'Cornell University',
                },
            },
            {
                '@type': 'EducationalOccupationalCredential',
                name: 'Bachelor of Science in Computer Science',
                credentialCategory: 'degree',
                recognizedBy: {
                    '@type': 'CollegeOrUniversity',
                    name: 'University of Florida',
                },
            },
            {
                '@type': 'EducationalOccupationalCredential',
                name: 'AI Software Developer Certification',
                credentialCategory: 'certificate',
            },
            {
                '@type': 'EducationalOccupationalCredential',
                name: 'Professional Scrum Master I',
                credentialCategory: 'certificate',
            },
            {
                '@type': 'EducationalOccupationalCredential',
                name: 'Computational & Data Science Certificate (Cornell)',
                credentialCategory: 'certificate',
            },
        ],
        hasOccupation: [
            {
                '@type': 'Occupation',
                name: 'Staff Software Engineer & AI Solutions Architect',
                occupationLocation: { '@type': 'Place', name: location },
                description:
                    'Engineering manager and AI adoption leader directing 104+ engineers, architecting enterprise AI/LLM solutions, and driving digital transformation at Lockheed Martin.',
                skills:
                    'AI/ML, LLMs, NLP, Python, React, DevSecOps, Agile, Release Train Engineering, Ontology Management, Enterprise AI Strategy',
            },
        ],
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Melbourne',
            addressRegion: 'FL',
            addressCountry: 'US',
        },
        sameAs: [
            linkedinUrl,
            'https://github.com/xarielx',
            'https://twitter.com/xarielx506',
            'https://medium.com/@xarielx',
            'https://dev.to/arielb506',
        ],
    };

    // WebSite Schema
    const websiteSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: seo.title,
        description: seo.description,
        author: { '@id': `${siteUrl}/#person` },
    };

    // WebPage Schema
    const webPageSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': `${seo.url}#webpage`,
        url: seo.url,
        name: seo.title,
        description: seo.description,
        isPartOf: { '@id': `${siteUrl}/#website` },
        about: { '@id': `${siteUrl}/#person` },
        mainEntity: { '@id': `${siteUrl}/#person` },
    };

    // ItemList Schema for Projects (helps LLMs understand portfolio work)
    const projectsSchema = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Featured AI & Automation Projects by Ariel Barboza',
        description:
            'Enterprise AI solutions and automation projects built by Ariel Barboza, Staff Software Engineer and AI Solutions Architect.',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                item: {
                    '@type': 'SoftwareApplication',
                    name: 'Twin Gen AI',
                    description:
                        'Natural Language Processing pipeline that analyzes technical data and generates actionable insights using Large Language Models, saving thousands of engineering hours.',
                    applicationCategory: 'AI/ML Solution',
                    operatingSystem: 'Enterprise',
                    author: { '@id': `${siteUrl}/#person` },
                },
            },
            {
                '@type': 'ListItem',
                position: 2,
                item: {
                    '@type': 'SoftwareApplication',
                    name: 'AgilePulse AI',
                    description:
                        'Intelligent predictive analytics assistant processing 88,000+ project issues daily for risk assessment and actionable project insights.',
                    applicationCategory: 'Predictive Analytics',
                    operatingSystem: 'Enterprise',
                    author: { '@id': `${siteUrl}/#person` },
                },
            },
            {
                '@type': 'ListItem',
                position: 3,
                item: {
                    '@type': 'SoftwareApplication',
                    name: 'Enterprise ETL Automation',
                    description:
                        'Automated data pipeline solution replacing 500+ manual reports, generating over $100,000 in annual cost savings through intelligent ETL processes.',
                    applicationCategory: 'Data Automation',
                    operatingSystem: 'Enterprise',
                    author: { '@id': `${siteUrl}/#person` },
                },
            },
        ],
    };

    // FAQPage Schema for AEO (Answer Engine Optimization)
    // These are structured Q&A pairs that LLMs can directly cite
    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: 'Who is Ariel Barboza?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Ariel Barboza is a Staff Software Engineer and AI Solutions Architect at Lockheed Martin, specializing in enterprise AI adoption, LLM-powered solutions, and intelligent automation. He leads the Automation Center of Excellence as Release Train Engineer, directing 104+ engineers and driving AI transformation across the organization. He holds a Master of Engineering from Cornell University, a BS in Computer Science from the University of Florida, and is completing an Executive MBA at UF.',
                },
            },
            {
                '@type': 'Question',
                name: 'What does Ariel Barboza specialize in as an engineering manager and AI leader?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Ariel Barboza specializes in engineering management, AI adoption strategy, ontology management, and enterprise AI transformation. He architects LLM-powered solutions like Twin Gen AI (NLP pipeline) and AgilePulse AI (predictive analytics processing 88K+ issues daily). His expertise spans AI/ML, natural language processing, large language models, DevSecOps automation, full-stack development, and Agile leadership at enterprise scale.',
                },
            },
            {
                '@type': 'Question',
                name: 'What AI and automation projects has Ariel Barboza built?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Ariel Barboza has built several enterprise AI solutions: (1) Twin Gen AI - an NLP pipeline using Large Language Models to analyze technical data and generate insights, saving thousands of engineering hours; (2) AgilePulse AI - a predictive analytics assistant processing 88,000+ project issues daily; (3) Enterprise ETL Automation - automated 500+ manual reports generating $100K+ annual savings. He has also increased team velocity by 18-22% through data-driven Agile optimization.',
                },
            },
            {
                '@type': 'Question',
                name: 'What qualifications does Ariel Barboza have for AI adoption and engineering management roles?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Ariel Barboza holds a Master of Engineering in Systems Engineering from Cornell University, a Bachelor of Science in Computer Science from the University of Florida, and is completing an Executive MBA at UF. He is certified as an AI Software Developer, Professional Scrum Master I, and holds a Computational & Data Science certificate from Cornell. He has 6+ years leading engineering teams of 100+ at Lockheed Martin and is a U.S. Army veteran.',
                },
            },
        ],
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
            <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
            <link rel='canonical' href={seo.url} />

            {/* Open Graph / Facebook */}
            <meta property='og:type' content={article ? 'article' : 'website'} />
            <meta property='og:url' content={seo.url} />
            <meta property='og:title' content={seo.title} />
            <meta property='og:description' content={seo.description} />
            <meta property='og:image' content={seo.image} />
            <meta property='og:site_name' content={`${author} - Portfolio`} />
            <meta property='og:locale' content='en_US' />

            {/* Twitter */}
            <meta name='twitter:card' content='summary_large_image' />
            <meta name='twitter:url' content={seo.url} />
            <meta name='twitter:title' content={seo.title} />
            <meta name='twitter:description' content={seo.description} />
            <meta name='twitter:image' content={seo.image} />
            <meta name='twitter:creator' content={twitterUsername} />

            {/* AI/LLM Discoverability Meta Tags */}
            <meta name='subject' content='AI Solutions Architect, Engineering Manager, AI Adoption Executive, Ontology Manager' />
            <meta name='topic' content='Artificial Intelligence, Engineering Management, AI Adoption, Enterprise Automation' />
            <meta name='classification' content='Professional Portfolio - AI & Engineering Leadership' />
            <meta name='category' content='Technology, Artificial Intelligence, Engineering Management' />
            <meta name='coverage' content='Worldwide' />
            <meta name='distribution' content='Global' />

            {/* Structured Data for AI/LLM Discovery */}
            <script type='application/ld+json'>
                {JSON.stringify(personSchema)}
            </script>
            <script type='application/ld+json'>
                {JSON.stringify(websiteSchema)}
            </script>
            <script type='application/ld+json'>
                {JSON.stringify(webPageSchema)}
            </script>
            <script type='application/ld+json'>
                {JSON.stringify(projectsSchema)}
            </script>
            <script type='application/ld+json'>
                {JSON.stringify(faqSchema)}
            </script>
        </Helmet>
    );
};

export default Seo;
