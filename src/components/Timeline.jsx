import React from 'react';
import T_item from './TimelineItem'
import t_data from '../data/timeline_data'
import Title from './Title'

function Timeline() {
    return (
        <div className='flex flex-col md:flex-row justify-center my-20 bg-white dark:bg-black bg-opacity-1'>
            <div className='w-full md:w-7/1'>
                <Title>Timeline</Title>
                {t_data.map(item => (
                    <T_item
                        year={item.year}
                        title={item.title}
                        place={item.place}
                        duration={item.duration}
                        desc={item.details}
                    />
                ))}
            </div>
        </div >
    )
};
export default Timeline;

