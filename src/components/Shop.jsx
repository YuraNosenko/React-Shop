import React, { useEffect, useContext } from 'react';
import { API_URL, API_KEY } from '../config';
import Alert from './Alert';
import BasketList from './BasketList';
import Cart from './Cart';
import GoodList from './GoodsList';
import Preloader from './Preloader';

import { ShopContext } from '../context';

const Shop = () => {
    const { setGoods, loading, order, isBasketShow, nameOfOrder } =
        useContext(ShopContext);

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then((result) => result.json())
            .then((data) => {
                setGoods(data.featured);
            });
        //eslint-disable-next-line
    }, []);

    return (
        <main className='container content'>
            <Cart quantity={order.length} />

            {loading ? <Preloader /> : <GoodList />}

            {isBasketShow && <BasketList />}

            {nameOfOrder && <Alert />}
        </main>
    );
};

export { Shop };
