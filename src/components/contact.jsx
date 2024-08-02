import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'
import Title from './title'


function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_dd_web', 'template_dd', form.current, {
            publicKey: 'j6GarXb-Lv1hoFYLf',
        }).then(() => {
            console.log('[+] Success');
        },
            (error) => {
                console.log('[!] Failed: ', error.text);
            },
        );
    };
    return (
        <div className='flex flex-col mb-10 mx-auto'>
            <div className='flex justify-center items-center'>
                <form
                    ref={form}
                    onSubmit=""
                    className='flex flex-col w-full md:w-7/12'
                >
                    <Title>Contact</Title>
                    <input
                        type='text'
                        name='name'
                        placeholder='Name'
                        className='p-2 bg-stone-100/75 dark:bg-stone-500/75 border-2 rounded-md
                        focus:outline-none border-stone-500'
                    />
                    <input
                        type='text'
                        name='email'
                        placeholder='Email'
                        className='my-4 p-2 bg-stone-100/75 dark:bg-stone-500/75 border-2 rounded-md
                        focus:outline-none border-stone-500'
                    />
                    <textarea
                        name='message'
                        placeholder='Message'
                        rows='10'
                        className='p-2 mb-4 bg-stone-100/75 dark:bg-stone-500/75 border-2 rounded-md
                        focus:outline-none border-stone-500'
                    />
                    <button
                        type='submit'
                        value='send'
                        style={{ transition: ' 0.3s ease-in-out' }}
                        className='text-center inline-block mb-5 px-8 py-3 w-max text-base
                        font-medium rounded-br-lg rounded-tl-lg text-black border-black bg-white drop-shadow-md 
                        delay-150 hover:bg-stone-900 hover:text-white
                        hover:-translate-y-1 hover:scale-110 hover:drop-shadow-lg 
                        hover:rounded-none hover:border-white border-2
                        dark:bg-stone-900 dark:border-white dark:text-white dark:hover:bg-white
                        dark:hover:border-dark dark:hover:text-stone-900
                        '>
                        Work With Me
                    </button>
                </form>
            </div>
        </div>
    )
};
export default Contact;

