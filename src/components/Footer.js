import React from 'react';
import { Link } from 'gatsby';

import Icon from '../components/icons/index';
import { socialMedia, siteShortTitle } from '../config/index';

const Footer = () => {
    return (
        <footer className='flex items-center justify-between bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-t-2 border-cyan-500 border-opacity-30 py-6 px-12'>
            <Link to='/' aria-label='home'>
                <h1 className='text-3xl font-bold text-white'>
                    {siteShortTitle}
                    <span className='text-cyan-400'>.</span>
                </h1>
            </Link>
            <div className='flex'>
                {socialMedia.map(({ name, url }, key) => {
                    return (
                        <a
                            className='ml-8 w-6 h-6 hover:opacity-75 transition-opacity'
                            href={url}
                            key={key}
                            target='_blank'
                            rel='noopener noreferrer'
                            alt={`${name} icon`}
                        >
                            <Icon name={name} color='#22d3ee' />
                        </a>
                    );
                })}
            </div>
        </footer>
    );
};

export default Footer;
