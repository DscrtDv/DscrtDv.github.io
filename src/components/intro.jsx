import React from 'react';
import { ReactTyped } from 'react-typed';
import Particle from './Particles';

function Intro() {
    return (
        <div className='font-mont flex flex-col items-center justify-center text-center text-pretty pt-20 pb-6
        min-h-screen max-w-full overflow-hidden p-6'>
            <h1 className='floating self-start text-4xl lg:text-8xl md:text-7xl xs:text-5xl mb-1 md:mb-3 font-bold pb-10'>Tim Censier</h1>
            <p className=' self-center font-open pb-10 pl-20 relative w-[max-content] max-auto text-base md:text-2xl lg:text-3xl mb-3 font-medium'>
                I'm a{" "}
                <ReactTyped className='text-violet-500 dark:text-orange-300'
                    strings={["Software Engineering Student", "Web Developer", "Linux fanatic", "Rock Climber", "Musician"]}
                    typeSpeed={100}
                    loop
                    backSpeed={20}
                    cursorChar='|'
                    showCursor={true}
                />
            </p>
            <p className='font-open place-self-end text-base max-w-4xl mb-6 font-bold text-left lg:text-xl'>
                If there is one thing I can say about myself, it is that I am a generalist. Starting in software engineering,
                passing by video games and music, without forgetting rock climbing, the range of my passions has allowed me to become
                a fast learner, finding interest in pretty much everything.
            </p>

        </div>
    )
};

export default Intro;


