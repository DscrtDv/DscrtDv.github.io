import React from 'react';
import p_data from '../data/portfolio_data';
import P_item from './PortfolioItem'

function Portfolio() {
    return (
        <div className='flex flex-col md:flex-row items-center justify-center'>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-4'>
                {p_data.map(project => (
                    <P_item key={project.name}
                        img_url={project.img_url}
                        title={project.title}
                        stack={project.stack}
                        link={project.link}
                    />
                ))}
            </div>
        </div >
    )
}; export default Portfolio;
