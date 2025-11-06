import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skillCategories = [
        {
            title: 'AI & Machine Learning',
            icon: '🤖',
            skills: [
                'Natural Language Processing',
                'Large Language Models (LLMs)',
                'Deep Learning (PyTorch)',
                'Machine Learning Algorithms',
                'Predictive Analytics',
                'Computer Vision',
                'Neural Networks (RNN, CNN)',
                'Unsupervised Learning',
            ],
        },
        {
            title: 'Automation & DevSecOps',
            icon: '⚡',
            skills: [
                'CI/CD Pipeline Automation',
                'Docker & Kubernetes',
                'Infrastructure as Code',
                'ETL Data Pipelines',
                'Process Automation',
                'GitLab CI/CD',
                'Container Orchestration',
                'Linux System Administration',
            ],
        },
        {
            title: 'Full Stack Development',
            icon: '💻',
            skills: [
                'Python & Django',
                'React & Angular',
                'Node.js & Express',
                'RESTful API Design',
                'MongoDB & PostgreSQL',
                'AWS Cloud Services',
                'Microservices Architecture',
                'GraphQL',
            ],
        },
        {
            title: 'Data Science & Analytics',
            icon: '📊',
            skills: [
                'Big Data Analytics',
                'Tableau & Power BI',
                'NumPy & Pandas',
                'Data Visualization',
                'Statistical Analysis',
                'MATLAB',
                'Regression Analysis',
                'Data Warehousing (SSIS, SSRS)',
            ],
        },
        {
            title: 'Leadership & Agile',
            icon: '🎯',
            skills: [
                'Agile/Scrum Master',
                'Release Train Engineering',
                'Team Leadership (100+ engineers)',
                'Project Management',
                'Risk Management',
                'Systems Engineering (MBSE)',
                'Stakeholder Management',
                'Performance Metrics & KPIs',
            ],
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
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
        <section
            id='skills'
            className='my-16 py-16 bg-gray-50 dark:bg-gray-900'
        >
            <div className='mx-auto container w-4/5 md:w-3/5'>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className='text-center mb-12'
                >
                    <h2 className='text-5xl font-bold mb-4'>
                        Technical Expertise
                    </h2>
                    <p className='text-xl text-gray-600 dark:text-gray-400'>
                        Specialized in AI, Automation, and Enterprise Solutions
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true }}
                    className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                >
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{
                                scale: 1.05,
                                transition: { duration: 0.2 },
                            }}
                            className='bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300'
                        >
                            <div className='text-4xl mb-4 text-center'>
                                {category.icon}
                            </div>
                            <h3 className='text-xl font-bold mb-4 text-center text-red-500'>
                                {category.title}
                            </h3>
                            <ul className='space-y-2'>
                                {category.skills.map((skill, skillIndex) => (
                                    <li
                                        key={skillIndex}
                                        className='flex items-start'
                                    >
                                        <span className='text-red-500 mr-2'>
                                            ▹
                                        </span>
                                        <span className='text-sm text-gray-700 dark:text-gray-300'>
                                            {skill}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className='mt-12 text-center'
                >
                    <p className='text-lg text-gray-600 dark:text-gray-400'>
                        <span className='font-bold text-red-500'>
                            Certified:
                        </span>{' '}
                        AI Software Developer | Professional Scrum Master I |
                        Computational & Data Science (Cornell) | Systems
                        Engineering Professional (INCOSE)
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
