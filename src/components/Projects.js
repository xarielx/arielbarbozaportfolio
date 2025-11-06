import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Icon from '../components/icons/index';
import Img from 'gatsby-image';
import { motion } from 'framer-motion';

const Project = ({ content }) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
            },
        },
    };

    return (
        <section id='projects' className='my-16 py-16 w-4/5 md:w-3/5 mx-auto'>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className='text-center mb-12'
            >
                <h2 className='text-5xl font-bold mb-4'>Featured Projects</h2>
                <p className='text-xl text-gray-600 dark:text-gray-400'>
                    AI-powered solutions delivering enterprise-scale impact
                </p>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
            >
                {content.map((project, key) => {
                    const { body, frontmatter } = project.node;

                    return (
                        <motion.div
                            variants={itemVariants}
                            key={frontmatter.position}
                            className='py-8 md:flex mb-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden'
                        >
                            <div className='md:w-1/2 p-6 flex flex-col justify-between'>
                                <div>
                                    <motion.h1
                                        className='text-xs font-bold uppercase text-red-500 tracking-wider'
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        {frontmatter.category}
                                    </motion.h1>
                                    <h2 className='text-3xl font-bold mb-4 mt-2'>
                                        {frontmatter.title}
                                    </h2>
                                    <div className='md:hidden mb-4'>
                                        <Img
                                            fluid={
                                                frontmatter.screenshot
                                                    .childImageSharp.fluid
                                            }
                                        />
                                    </div>
                                    <div className='font-light text-base mb-6'>
                                        <MDXRenderer>{body}</MDXRenderer>
                                    </div>
                                </div>
                                <div>
                                    <div className='flex flex-wrap gap-2 mb-4'>
                                        {frontmatter.tags.map((tag, key) => {
                                            return (
                                                <motion.span
                                                    key={key}
                                                    whileHover={{ scale: 1.1 }}
                                                    className='px-3 py-1 text-xs font-semibold text-red-500 bg-red-50 dark:bg-red-900 dark:bg-opacity-20 rounded-full'
                                                >
                                                    {tag}
                                                </motion.span>
                                            );
                                        })}
                                    </div>
                                    <div className='flex gap-4'>
                                        <motion.a
                                            href={frontmatter.github}
                                            className='w-8 h-8 text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-500 transition-colors'
                                            whileHover={{ scale: 1.2 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <Icon name='github' />
                                        </motion.a>
                                        <motion.a
                                            href={frontmatter.external}
                                            className='w-8 h-8 text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-500 transition-colors'
                                            whileHover={{ scale: 1.2 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <Icon name='external' />
                                        </motion.a>
                                    </div>
                                </div>
                            </div>
                            <motion.div
                                className='hidden md:block md:w-1/2'
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Img
                                    fluid={
                                        frontmatter.screenshot.childImageSharp
                                            .fluid
                                    }
                                    className='h-full'
                                />
                            </motion.div>
                        </motion.div>
                    );
                })}
            </motion.div>
        </section>
    );
};

export default Project;
