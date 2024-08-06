import './App.css'
import React, { useEffect, useState } from 'react'
import Intro from './components/intro'
import Portfolio from './components/portfolio'
import Footer from './components/footer'
import Timeline from './components/timeline'
import Contact from './components/contact'
import Particle from './components/Particles'
import { FpsView } from 'react-fps'

function App() {
    const [theme, setTheme] = useState(null);

    //theme useEffect
    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme: light)').matches) {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    }, []);


    const handleThemeSwitch = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    const sun = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            />
        </svg>
    );

    const moon = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-6 h-6"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
        </svg>
    );
    return (
        <>
            <Particle theme={theme}>
            </Particle >

            <button
                type='button'
                onClick={handleThemeSwitch}
                className='2xl:fixed absolute p-2 z-10 right-8 top-8 bg-violet-300 text-lg rounded-md dark:bg-orange-300'
            >
                {theme === 'dark' ? sun : moon}
            </button >
            <div className="bg-white h-full bg-gradient-to-br dark:bg-black text-stone-900 dark:text-stone-300 min-h-screen font-inter px-8">
                <div className="max-w-7xl mx-auto h-full">

                    <Intro />

                    <Portfolio />
                    <Timeline />
                    <Contact theme={theme} />
                    <Footer />

                </div >
            </div >


        </>
    )
};

export default App
