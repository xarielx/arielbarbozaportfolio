import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Statistics = () => {
    const stats = [
        {
            value: 88000,
            suffix: '+',
            label: 'Project Issues Analyzed Daily',
            description: 'by AgilePulse AI',
            icon: '📈',
        },
        {
            value: 6,
            suffix: '+',
            label: 'Years in Software Engineering',
            description: 'Building enterprise solutions',
            icon: '💼',
        },
        {
            value: 104,
            suffix: '+',
            label: 'Engineers Led as RTE',
            description: 'Across multiple teams',
            icon: '👥',
        },
        {
            value: 500,
            suffix: '+',
            label: 'Reports Automated',
            description: 'Via intelligent ETL pipelines',
            icon: '⚡',
        },
        {
            value: 22,
            suffix: '%',
            label: 'Velocity Increase',
            description: 'Through Agile optimization',
            icon: '🚀',
        },
        {
            value: 100,
            suffix: 'K+',
            label: 'Annual Cost Savings',
            description: 'From automation solutions',
            icon: '💰',
        },
    ];

    const Counter = ({ end, suffix }) => {
        const [count, setCount] = useState(0);
        const [isInView, setIsInView] = useState(false);
        const ref = useRef(null);

        useEffect(() => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setIsInView(true);
                        observer.disconnect();
                    }
                },
                { threshold: 0.1 }
            );

            if (ref.current) {
                observer.observe(ref.current);
            }

            return () => observer.disconnect();
        }, []);

        useEffect(() => {
            if (!isInView) return;

            let startValue = 0;
            const duration = 2000; // 2 seconds
            const increment = end / (duration / 16); // 60fps

            const timer = setInterval(() => {
                startValue += increment;
                if (startValue >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(startValue));
                }
            }, 16);

            return () => clearInterval(timer);
        }, [isInView, end]);

        return (
            <div ref={ref} className='text-5xl font-bold text-red-500'>
                {count.toLocaleString()}
                {suffix}
            </div>
        );
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
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
        <section className='my-16 py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white'>
            <div className='mx-auto container w-4/5 md:w-3/5'>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className='text-center mb-12'
                >
                    <h2 className='text-5xl font-bold mb-4'>Impact By Numbers</h2>
                    <p className='text-xl text-gray-300'>
                        Delivering measurable results through AI and automation
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true }}
                    className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{
                                scale: 1.05,
                                transition: { duration: 0.2 },
                            }}
                            className='bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-lg p-8 text-center border border-gray-700 hover:border-red-500 transition-all duration-300'
                        >
                            <div className='text-4xl mb-4'>{stat.icon}</div>
                            <Counter end={stat.value} suffix={stat.suffix} />
                            <h3 className='text-lg font-semibold mt-4 mb-2'>
                                {stat.label}
                            </h3>
                            <p className='text-sm text-gray-400'>
                                {stat.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Statistics;
