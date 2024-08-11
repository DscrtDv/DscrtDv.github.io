
import React, { useEffect, useState } from 'react';

const Alert = ({ severity, title, message, onClose }) => {
    const [progress, setProgress] = useState(100);

    useEffect(() => {
        const duration = 5000; // 5 seconds
        const startTime = Date.now();

        const updateProgress = () => {
            const elapsedTime = Date.now() - startTime;
            const percentage = Math.max(100 - (elapsedTime / duration) * 100, 0);
            setProgress(percentage);

            if (percentage > 0) {
                requestAnimationFrame(updateProgress);
            } else {
                onClose();
            }
        };

        requestAnimationFrame(updateProgress);

        return () => {
            setProgress(0);
        };
    }, [onClose]);

    const getColor = () => {
        switch (severity) {
            case 'success':
                return 'bg-teal-100 border-teal-500 text-teal-900';
            case 'warning':
                return 'bg-yellow-100 border-yellow-500 text-yellow-900';
            case 'error':
                return 'bg-red-100 border-red-500 text-red-900';
            default:
                return 'bg-gray-100 border-gray-500 text-gray-900';
        }
    };

    const getProgressColor = () => {
        switch (severity) {
            case 'success':
                return 'bg-teal-500';
            case 'warning':
                return 'bg-yellow-500';
            case 'error':
                return 'bg-red-500';
            default:
                return 'bg-gray-500';
        }
    };

    return (
        <div
            className={`fixed top-0 left-0 right-0 mx-10 mt-5 rounded-md p-4 border-t-4 shadow-md ${getColor()}`}
            role="alert"
        >
            <div className="flex justify-between">
                <div className="flex">
                    <div className="py-1">
                        <svg
                            className="fill-current h-6 w-6 mr-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                        </svg>
                    </div>
                    <div>
                        <p className="font-bold">{title}</p>
                        <p className="text-sm">{message}</p>
                    </div>
                </div>
                <button
                    className="text-gray-500 hover:text-gray-700 focus:outline-none"
                    onClick={onClose}
                >
                    <svg
                        className="fill-current h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                    >
                        <path d="M10 8.586l4.95-4.95 1.414 1.414L11.414 10l4.95 4.95-1.414 1.414L10 11.414l-4.95 4.95-1.414-1.414L8.586 10 3.636 5.05l1.414-1.414L10 8.586z" />
                    </svg>
                </button>
            </div>
            <div className="w-full h-0.5 bg-opacity-50 mt-3 rounded-md">
                <div
                    className={`h-0.5 ${getProgressColor()} rounded-md`}
                    style={{ width: `${progress}%`, transition: 'width 50ms linear' }}
                ></div>
            </div>
        </div>
    );
};

export default Alert;
