import React from 'react';
import { motion } from 'framer-motion';

const Career = () => {
    const milestones = [
        {
            year: '2025',
            title: 'MBA Candidate',
            company: 'University of Florida',
            description:
                'Executive MBA Program focusing on business strategy and leadership',
            icon: '🎓',
            color: 'bg-purple-500',
        },
        {
            year: '2023 - Present',
            title: 'Staff Project & Full Stack Software Engineer',
            company: 'Lockheed Martin',
            description:
                'Release Train Engineer for Automation Center of Excellence. Leading 104 engineers, architecting AI solutions (Twin Gen AI, AgilePulse AI), and driving enterprise transformation.',
            icon: '🚀',
            color: 'bg-red-500',
            achievements: [
                'Increased team velocity by 18-22%',
                'Architected AI-powered NLP pipeline',
                'Generated $100K+ annual savings through automation',
            ],
        },
        {
            year: '2022 - 2023',
            title: 'Senior Project & Full Stack Engineer',
            company: 'Lockheed Martin',
            description:
                'Enterprise Software Factory FOSS Orchestrator. Reduced fallback rate from 20% to 4.5%, automated GitLab-to-JIRA processes, and led Code.LM Conference.',
            icon: '⚡',
            color: 'bg-blue-500',
            achievements: [
                'Managed 14 team members in Agile practices',
                'Automated 4-hour process to 5 minutes',
                'Supported 1200+ conference participants',
            ],
        },
        {
            year: '2021',
            title: 'Master of Engineering',
            company: 'Cornell University',
            description:
                'Systems Engineering with focus on Computational & Data Science',
            icon: '🎓',
            color: 'bg-orange-500',
        },
        {
            year: '2019 - 2022',
            title: 'Software Engineer, Leadership Development Program',
            company: 'Lockheed Martin',
            description:
                'Application Lead for DORA automation tool. Increased revenue by 20%, improved customer satisfaction by 15%, decreased bug punt rate by 78%.',
            icon: '💼',
            color: 'bg-green-500',
            achievements: [
                'Built real-time BI dashboards',
                'Delivered 174 merge requests',
                'Completed 3 rotational assignments',
            ],
        },
        {
            year: '2012 - 2016',
            title: '19K M1 Armor Crewman',
            company: 'United States Army',
            description:
                'Tank Commander responsible for $6.2M equipment. Led 4-person team, elected President of BOSS organization serving 500+ soldiers.',
            icon: '🪖',
            color: 'bg-gray-700',
            achievements: [
                'General George S. Patton Jr. Award (1 of 600)',
                'Excellence in Armor Award (10 of 1,200)',
                'Army Achievement Medal',
            ],
        },
    ];

    return (
        <section
            id='career'
            aria-label='Career timeline of Ariel Barboza - Engineering Manager, AI Leader, U.S. Army Veteran'
            className='my-16 py-16 bg-white dark:bg-black'
        >
            <div className='mx-auto container w-4/5 md:w-3/5'>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className='text-center mb-12'
                >
                    <h2 className='text-5xl font-bold mb-4'>Career Journey</h2>
                    <p className='text-xl text-gray-600 dark:text-gray-400'>
                        From military service to AI engineering excellence
                    </p>
                </motion.div>

                <div className='relative'>
                    {/* Timeline line */}
                    <div className='hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-red-500 via-blue-500 to-gray-500'></div>

                    {milestones.map((milestone, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`relative flex items-center mb-12 ${
                                index % 2 === 0
                                    ? 'md:flex-row'
                                    : 'md:flex-row-reverse'
                            }`}
                        >
                            {/* Content */}
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className='w-full md:w-5/12 bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300'
                            >
                                <div className='flex items-center mb-3'>
                                    <div className='text-3xl mr-3'>
                                        {milestone.icon}
                                    </div>
                                    <div>
                                        <div
                                            className={`inline-block px-3 py-1 text-xs font-bold text-white rounded-full ${milestone.color}`}
                                        >
                                            {milestone.year}
                                        </div>
                                    </div>
                                </div>
                                <h3 className='text-2xl font-bold mb-1'>
                                    {milestone.title}
                                </h3>
                                <h4 className='text-lg text-red-500 font-semibold mb-3'>
                                    {milestone.company}
                                </h4>
                                <p className='text-gray-700 dark:text-gray-300 mb-4'>
                                    {milestone.description}
                                </p>
                                {milestone.achievements && (
                                    <ul className='space-y-1'>
                                        {milestone.achievements.map(
                                            (achievement, i) => (
                                                <li
                                                    key={i}
                                                    className='flex items-start text-sm'
                                                >
                                                    <span className='text-red-500 mr-2'>
                                                        ✓
                                                    </span>
                                                    <span className='text-gray-600 dark:text-gray-400'>
                                                        {achievement}
                                                    </span>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                )}
                            </motion.div>

                            {/* Timeline dot */}
                            <div className='hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 items-center justify-center'>
                                <motion.div
                                    whileHover={{ scale: 1.5 }}
                                    className={`w-4 h-4 rounded-full ${milestone.color} border-4 border-white dark:border-black`}
                                ></motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Career;
