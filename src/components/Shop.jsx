import React, { useState, useEffect } from 'react';
import { API_URL, API_KEY } from '../config';
import Alert from './Alert';
import BasketList from './BasketList';
import Cart from './Cart';
import GoodList from './GoodsList';
import Preloader from './Preloader';

const Shop = () => {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(false);
    const [order, setOrder] = useState([]);
    const [isBasketShow, setBasketShow] = useState(false);
    const [nameOfOrder, setNameOfOrder] = useState('');

    const addOrderToCart = (item) => {
        setNameOfOrder(item.name);

        const itemIndex = order.findIndex(
            (orderItem) => orderItem.id === item.id
        );

        if (itemIndex < 0) {
            const newItem = { ...item, quantity: 1 };
            setOrder([...order, newItem]);
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (itemIndex === index) {
                    return { ...orderItem, quantity: orderItem.quantity + 1 };
                } else {
                    return orderItem;
                }
            });

            setOrder(newOrder);
        }
    };

    const hideAlert = () => {
        setNameOfOrder('');
    };

    const removeOrderItem = (id) => {
        setOrder(order.filter((order) => order.id !== id));
    };

    const increaseQuantity = (id) => {
        const newOrder = order.map((orderItem) => {
            if (orderItem.id === id) {
                return { ...orderItem, quantity: orderItem.quantity + 1 };
            } else {
                return orderItem;
            }
        });

        setOrder(newOrder);
    };

    const decreaseQuantity = (id) => {
        const newOrder = order.map((orderItem) => {
            if (orderItem.id === id) {
                return {
                    ...orderItem,
                    quantity:
                        orderItem.quantity > 1 ? orderItem.quantity - 1 : 1,
                };
            } else {
                return orderItem;
            }
        });

        setOrder(newOrder);
    };

    const handleBasketShow = () => {
        setBasketShow(!isBasketShow);
    };

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then((result) => result.json())
            .then((data) => {
                data.featured && setGoods(data.featured);
                setLoading(false);
            });
    }, []);

    return (
        <main className='container content'>
            <Cart quantity={order.length} showBasket={handleBasketShow} />

            {loading ? (
                <Preloader />
            ) : (
                <GoodList goods={goods} cb={addOrderToCart} />
            )}

            {isBasketShow && (
                <BasketList
                    order={order}
                    handleBasketShow={handleBasketShow}
                    removeOrderItem={removeOrderItem}
                    increaseQuantity={increaseQuantity}
                    decreaseQuantity={decreaseQuantity}
                />
            )}

            {nameOfOrder && <Alert name={nameOfOrder} hideAlert={hideAlert} />}
        </main>
    );
};

export { Shop };
