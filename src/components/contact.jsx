import React, { useRef, createRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";
import Alert from "./Alert";
import Title from "./title";

export const Contact = ({ theme }) => {

    const [alertMessage, setAlertMessage] = useState({ severity: '', title: '', message: '' });
    const [showAlert, setShowAlert] = useState(false);
    const [formValue, setFormValue] = useState({
        user_name: "",
        message: "",
        user_email: "",
    });

    const refCaptcha = createRef();
    const form = useRef();

    const submitForm = (e) => {
        e.preventDefault();
        const token = refCaptcha.current.getValue();

        const params = {
            ...formValue,
            "g-recaptcha-response": token,
        };

        switch (true) {
            case formValue.user_name === "":
                setAlertMessage({ severity: 'warning', title: 'Empty Name', message: 'Name cannot be blank' });
                setShowAlert(true);
                break;

            case formValue.user_email === "":
                setAlertMessage({ severity: 'warning', title: 'Empty Email', message: 'Email address cannot be blank' });
                setShowAlert(true);
                break;

            case formValue.user_email === "":
                setAlertMessage({ severity: 'warning', title: 'Empty message', message: 'Email address cannot be blank' });
                setShowAlert(true);
                break;

            case token === undefined:
                setAlertMessage({ severity: 'error', title: 'reCAPTCHA Error', message: 'reCAPTCHA error' });
                setShowAlert(true);
                break;

            default:
                emailjs
                    .sendForm(
                        import.meta.env.VITE_MAIL_SERVICE_ID,
                        import.meta.env.VITE_MAIL_TEMPLATE_ID,
                        form.current,
                        import.meta.env.VITE_MAIL_PUBLIC_KEY
                    )
                    .then(
                        (response) => {
                            if (response.status === 200) {
                                setAlertMessage({ severity: 'success', title: 'Success', message: 'Sent successfully' });
                                setShowAlert(true);
                                setFormValue({
                                    user_name: "",
                                    message: "",
                                    user_email: "",
                                });
                                refCaptcha.current.reset();
                            }
                            // console.log("SUCCESS!", response.status, response.text);
                        },
                        (err) => {
                            setAlertMessage({ severity: 'error', title: 'Send Error', message: `Failed: ${err.text}` });
                            setShowAlert(true);
                            setFormValue({
                                user_name: "",
                                message: "",
                                user_email: "",
                            });
                            refCaptcha.curconst[showAlert, setShowAlert] = useState(false); rent.reset();
                            console.log("FAILED...", err.text);
                        }
                    );
        }
    };

    return (
        <div className='flex flex-col mb-10 mx-auto'>
            {showAlert && (
                <Alert
                    severity={alertMessage.severity}
                    title={alertMessage.title}
                    message={alertMessage.message}
                    onClose={() => setShowAlert(false)}
                />
            )}
            <div className='flex justify-center items-center'>
                <form
                    ref={form}
                    onSubmit={submitForm}
                    className='flex flex-col w-full md:w-7/12'
                >
                    <Title>Contact</Title>
                    <input
                        type='text'
                        name='user_name'
                        placeholder='Name'
                        value={formValue.user_name}
                        className='p-2 bg-stone-100/75 dark:bg-stone-500/75 border-2 rounded-md
                        focus:outline-none border-stone-500'
                        onChange={(e) =>
                            setFormValue({ ...formValue, user_name: e.target.value })
                        }
                    />
                    <input
                        type='email'
                        name='user_email'
                        placeholder='Email'
                        value={formValue.user_email}
                        className='my-4 p-2 bg-stone-100/75 dark:bg-stone-500/75 border-2 rounded-md
                        focus:outline-none border-stone-500'
                        onChange={(e) =>
                            setFormValue({ ...formValue, user_email: e.target.value })
                        }
                    />
                    <textarea
                        name='message'
                        placeholder='Message'
                        value={formValue.message}
                        rows='10'
                        className='p-2 mb-4 bg-stone-100/75 dark:bg-stone-500/75 border-2 rounded-md
                        focus:outline-none border-stone-500'
                        onChange={(e) =>
                            setFormValue({ ...formValue, message: e.target.value })
                        }
                    />
                    <ReCAPTCHA
                        sitekey={import.meta.env.VITE_SITE_KEY}
                        ref={refCaptcha}
                        onChange={() => setStatus(null)}
                        theme={theme === 'dark' ? 'dark' : 'light'}
                        className='mb-5'
                    />
                    <button
                        type='submit'
                        value='Send'
                        style={{ transition: '0.3s ease-in-out' }}
                        className='text-center inline-block mb-5 px-8 py-3 w-max text-base
                        font-medium rounded-br-lg rounded-tl-lg text-black border-black bg-white drop-shadow-md 
                        delay-150 hover:bg-stone-900 hover:text-white
                        hover:-translate-y-1 hover:scale-110 hover:drop-shadow-lg 
                        hover:rounded-none hover:border-white border-2
                        dark:bg-stone-900 dark:border-white dark:text-white dark:hover:bg-white
                        dark:hover:border-dark dark:hover:text-stone-900
                        '>
                        Send
                    </button>
                </form>
            </div>
        </div>
    )
};

export default Contact;
