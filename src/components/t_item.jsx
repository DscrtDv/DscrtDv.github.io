import React from "react";

function T_item({ year, title, place, duration, desc }) {
    return (
        <ol className='flex flex-col md:flex-row relative border-l border-stone-200 dark:border-white'>
            <li className="mb-10 ml-4">
                {/* <div className="absolute w-2 h-3 bg-stone-200 dark:bg-stone-500 rounded-full mt-1.5-left-1.5
                border border-white dark:border-none"/> */}
                <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
                    <span className='inline-block px-2 py-1 font-semibold text-white dark:text-stone-900 bg-stone-900 dark:bg-white
                        rounded-md'>
                        {year}
                    </span>
                    <h3 className="text-lg font-semibold text-stone-900 dark:text-white">
                        {title}
                    </h3>
                    <h2 className="text-lg text-stone-900 dark:text-white">
                        {place}
                    </h2>
                    <div className="my-1 text-sm font-normal leading-none text-stone-400 dark:text-stone-200">
                        {duration}
                    </div>
                </p>
                <p className='my-2 text-base font-normal text-stone-500 dark:text-stone-200'>
                    {desc}
                </p>
            </li>
        </ol >
    )
};

export default T_item;
