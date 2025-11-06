import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const Contact = ({ content }) => {
    const { frontmatter, body } = content[0].node;

    return (
        <section
            id='contact'
            className='mt-6 flex flex-col items-center justify-center w-4/5 sm:w-3/5 mx-auto min-h-screen'
        >
            <div className='sm:w-1/2'>
                <h3 className='text-5xl font-bold mb-6 text-center'>
                    {frontmatter.title}
                </h3>
                <div className='text-lg font-thin'>
                    <MDXRenderer>{body}</MDXRenderer>
                </div>
            </div>
            <a href='mailto:ariel@arielbarboza.com'>
                <button className='bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold py-2 px-4 border-b-4 border-blue-800 hover:border-cyan-600 rounded mt-6 shadow-lg shadow-cyan-500/50'>
                    {frontmatter.callToAction}
                </button>
            </a>
        </section>
    );
};

export default Contact;
