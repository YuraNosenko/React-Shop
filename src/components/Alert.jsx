import React, { useEffect, useContext } from 'react';
import { ShopContext } from '../context';

const Alert = () => {
    const { hideAlert, nameOfOrder } = useContext(ShopContext);

    useEffect(() => {
        const timerId = setTimeout(hideAlert, 3000);

        return () => {
            clearTimeout(timerId);
        };
        //eslint-disable-next-line
    }, [nameOfOrder]);

    return (
        <div className='toast-container'>
            <div className='toast'>{nameOfOrder} added to Basket.</div>
        </div>
    );
};

export default Alert;
