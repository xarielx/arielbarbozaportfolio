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
        <div className='flex items-center bg-pattern shadow-inner min-h-screen relative overflow-hidden'>
            {/* Animated background elements - Military HUD style */}
            <motion.div
                className='absolute top-20 right-20 w-64 h-64 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-10'
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
                className='absolute bottom-20 left-20 w-64 h-64 bg-orange-500 rounded-full mix-blend-screen filter blur-3xl opacity-10'
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
            <motion.div
                className='absolute top-1/2 left-1/2 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-5'
                animate={{
                    scale: [1, 1.4, 1],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            <div className='bg-slate-900 bg-opacity-80 dark:bg-black dark:text-white w-full py-12 shadow-lg relative z-10 border-y border-cyan-500 border-opacity-20'>
                <section className='mx-auto container w-4/5 sm:w-3/5'>
                    <motion.h1
                        className='uppercase font-bold text-lg text-cyan-400 tracking-wider'
                        variants={variants}
                        initial='hidden'
                        animate='display'
                        transition={{ delay: 0.6 }}
                    >
                        {frontmatter.intro}
                    </motion.h1>
                    <motion.h2
                        className='font-bold text-6xl sm:text-7xl mt-4 mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-orange-500 bg-clip-text text-transparent'
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
                                className='bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold py-3 px-8 border-b-4 border-blue-800 hover:border-cyan-600 rounded-lg shadow-lg shadow-cyan-500/50'
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
                                    className='w-10 h-10 flex items-center justify-center bg-slate-800 border border-cyan-500 border-opacity-30 rounded-full hover:bg-cyan-500 hover:border-cyan-400 transition-colors'
                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <Icon
                                        name={social.name.toLowerCase()}
                                        className='w-5 h-5 text-cyan-400 hover:text-white'
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
                                className='px-3 py-1 bg-slate-800 border border-cyan-500 border-opacity-40 rounded-full text-cyan-300 font-medium hover:bg-cyan-900 hover:border-cyan-400 transition-colors'
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
        </div>
    );
};

export default Hero;
