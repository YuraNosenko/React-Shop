import React, { useEffect } from 'react';

const Alert = (props) => {
    const { name, hideAlert = Function.prototype } = props;

    useEffect(() => {
        const timerId = setTimeout(hideAlert, 3000);
        return () => {
            clearTimeout(timerId);
        };
        //eslint-disable-next-line
    }, [name]);

    return (
        <div className='toast-container'>
            <div className='toast'>{name} added to Basket.</div>
        </div>
    );
};

export default Alert;
