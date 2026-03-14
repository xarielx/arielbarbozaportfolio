import React from 'react';
import { Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { navLinks, socialMedia } from '../config/index';
import { motion } from 'framer-motion';
import Icon from './icons/index';

const Hero = ({ content }) => {
    const { frontmatter, body } = content[0].node;
    const { button } = navLinks;

    const variants = {
        hidden: {
            opacity: 0,
            x: -10,
        },
        display: {
            opacity: 1,
            x: 0,
        },
    };

    const floatingAnimation = {
        y: [0, -10, 0],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
        },
    };

    return (
        <header role='banner' className='flex items-center bg-pattern shadow-inner min-h-screen relative overflow-hidden'>
            {/* Animated background elements */}
            <motion.div
                className='absolute top-20 right-20 w-64 h-64 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20'
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />
            <motion.div
                className='absolute bottom-20 left-20 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20'
                animate={{
                    scale: [1, 1.3, 1],
                    rotate: [0, -90, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            <div className='bg-white dark:bg-black dark:text-white w-full py-12 shadow-lg relative z-10'>
                <section className='mx-auto container w-4/5 sm:w-3/5'>
                    <motion.h1
                        className='uppercase font-bold text-lg text-red-500 tracking-wider'
                        variants={variants}
                        initial='hidden'
                        animate='display'
                        transition={{ delay: 0.6 }}
                    >
                        {frontmatter.intro}
                    </motion.h1>
                    <motion.h2
                        className='font-bold text-6xl sm:text-7xl mt-4 mb-6 bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent'
                        variants={variants}
                        initial='hidden'
                        animate='display'
                        transition={{ delay: 0.8 }}
                    >
                        {frontmatter.title}
                    </motion.h2>
                    <motion.div
                        className='font-light text-xl sm:text-2xl sm:w-4/5 mb-6'
                        variants={variants}
                        initial='hidden'
                        animate='display'
                        transition={{ delay: 1 }}
                    >
                        <MDXRenderer>{body}</MDXRenderer>
                    </motion.div>

                    <motion.div
                        className='flex flex-wrap gap-4 items-center mb-8'
                        variants={variants}
                        initial='hidden'
                        animate='display'
                        transition={{ delay: 1.2 }}
                    >
                        <Link to={button.url}>
                            <motion.button
                                className='bg-red-500 hover:bg-red-400 text-white font-bold py-3 px-8 border-b-4 border-red-700 hover:border-red-500 rounded-lg shadow-lg'
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {button.name}
                            </motion.button>
                        </Link>

                        <div className='flex gap-4 items-center'>
                            {socialMedia.slice(0, 2).map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.url}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='w-10 h-10 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-red-500 dark:hover:bg-red-500 transition-colors'
                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <Icon
                                        name={social.name.toLowerCase()}
                                        className='w-5 h-5'
                                    />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className='flex flex-wrap gap-3 text-sm'
                        variants={variants}
                        initial='hidden'
                        animate='display'
                        transition={{ delay: 1.4 }}
                    >
                        {[
                            '🤖 AI/ML',
                            '⚡ Automation',
                            '🧠 LLMs',
                            '☁️ Cloud',
                            '🐍 Python',
                            '⚛️ React',
                        ].map((tag, index) => (
                            <motion.span
                                key={index}
                                className='px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 font-medium'
                                animate={floatingAnimation}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.1 }}
                            >
                                {tag}
                            </motion.span>
                        ))}
                    </motion.div>
                </section>
            </div>
        </header>
    );
};

export default Hero;
