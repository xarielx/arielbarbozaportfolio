import React from 'react';
import PropTypes from 'prop-types';
import { MDXProvider } from '@mdx-js/react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = ({ children }) => {
    return (
        <MDXProvider
            components={{
                p: (props) => <p {...props} className='mt-4' />,
            }}
        >
            <div
                className='min-h-full grid'
                style={{
                    gridTemplateRows: 'auto 1fr auto',
                }}
            >
                <div class='flex flex-col h-screen'>
                    <Header />
                    <main class='flex-1 overflow-y-auto p-5 bg-white dark:bg-black dark:text-white'>
                        {children}
                    </main>
                    <Footer />
                </div>
            </div>
        </MDXProvider>
    );
};

Layout.propTypes = {
    children: PropTypes.any,
};

export default Layout;
