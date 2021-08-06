import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import About from '../components/About';
import Project from '../components/Projects';
import Contact from '../components/Contact';
import { graphql } from 'gatsby';

const IndexPage = ({ data }) => {
    return (
        <Layout>
            <Hero content={data.hero.edges} />
            <About content={data.about.edges} />
            <Project content={data.project.edges} />
            <Contact content={data.contact.edges} />
        </Layout>
    );
};

export default IndexPage;

export const pageQuery = graphql`
    {
        hero: allMdx(filter: { fileAbsolutePath: { regex: "/hero/" } }) {
            edges {
                node {
                    body
                    frontmatter {
                        intro
                        title
                    }
                }
            }
        }
        about: allMdx(filter: { fileAbsolutePath: { regex: "/about/" } }) {
            edges {
                node {
                    body
                    frontmatter {
                        title
                        caption
                        image {
                            childImageSharp {
                                fluid(maxWidth: 800) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        }
        project: allMdx(
            filter: {
                fileAbsolutePath: { regex: "/project/" }
                frontmatter: { visible: { eq: "true" } }
            }
            sort: { fields: [frontmatter___position], order: ASC }
        ) {
            edges {
                node {
                    body
                    frontmatter {
                        title
                        visible
                        tags
                        position
                        github
                        external
                        category
                        screenshot {
                            childImageSharp {
                                fluid {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        }
        contact: allMdx(filter: { fileAbsolutePath: { regex: "/contact/" } }) {
            edges {
                node {
                    frontmatter {
                        title
                        callToAction
                    }
                    body
                }
            }
        }
    }
`;
