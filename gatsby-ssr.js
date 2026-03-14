import React from 'react';

export const onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
    setHtmlAttributes({ lang: 'en' });

    setHeadComponents([
        // Preconnect to important origins
        <link
            key='preconnect-google-fonts'
            rel='preconnect'
            href='https://fonts.googleapis.com'
        />,
        <link
            key='preconnect-google-fonts-static'
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin='anonymous'
        />,

        // Additional meta tags for AI/LLM crawlers and search engines
        <meta
            key='google-site-verification'
            name='google-site-verification'
            content='REPLACE_WITH_YOUR_VERIFICATION_CODE'
        />,

        // Geo meta tags for local SEO
        <meta key='geo-region' name='geo.region' content='US-FL' />,
        <meta
            key='geo-placename'
            name='geo.placename'
            content='Melbourne, Florida'
        />,

        // Dublin Core metadata for academic/professional discoverability
        <meta key='dc-title' name='DC.title' content='Ariel Barboza - AI Solutions Architect & Engineering Manager' />,
        <meta key='dc-creator' name='DC.creator' content='Ariel Barboza' />,
        <meta
            key='dc-subject'
            name='DC.subject'
            content='Artificial Intelligence, Engineering Management, AI Adoption, Ontology Management, Machine Learning, Enterprise Automation'
        />,
        <meta
            key='dc-description'
            name='DC.description'
            content='Professional portfolio of Ariel Barboza, Staff Software Engineer and AI Solutions Architect at Lockheed Martin. Expert in engineering management, AI adoption, ontology management, LLM solutions, and enterprise automation.'
        />,
        <meta key='dc-language' name='DC.language' content='en' />,
        <meta key='dc-type' name='DC.type' content='InteractiveResource' />,
    ]);
};
