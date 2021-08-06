import React from 'react';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';
function ThemeToggle() {
    return (
        <ThemeToggler>
            {({ theme, toggleTheme }) => (
                <div className='flex justify-between items-center'>
                    <label
                        className={`w-14 h-8 flex items-center rounded-full p-1 ${
                            theme === 'dark' ? 'bg-indigo-500' : 'bg-yellow-200'
                        }`}
                    >
                        <input
                            type='checkbox'
                            className='hidden'
                            onChange={(e) =>
                                toggleTheme(e.target.checked ? 'dark' : 'light')
                            }
                            checked={theme === 'dark'}
                        />
                        <div
                            className={`bg-white w-6 h-6 rounded-full shadow-md duration-300 ease-in-out ${
                                theme === 'dark'
                                    ? 'transform translate-x-6'
                                    : ''
                            }`}
                        />
                    </label>
                </div>
            )}
        </ThemeToggler>
    );
}
export default ThemeToggle;
