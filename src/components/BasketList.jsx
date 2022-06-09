import React from 'react';
import BasketItem from './BasketItem';

const BasketList = (props) => {
    const {
        order = [],
        handleBasketShow = Function.prototype,
        removeOrderItem = Function.prototype,
        increaseQuantity = Function.prototype,
        decreaseQuantity = Function.prototype,
    } = props;

    const totalPrice = order.reduce((sum, element) => {
        return (sum += element.price * element.quantity);
    }, 0);

    return (
        <ul className='collection basket-list'>
            <li className='collection-item active'>Basket</li>

            {order.length ? (
                order.map((item) => (
                    <BasketItem
                        {...item}
                        key={item.id}
                        removeOrderItem={removeOrderItem}
                        increaseQuantity={increaseQuantity}
                        decreaseQuantity={decreaseQuantity}
                    />
                ))
            ) : (
                <li className='collection-item'>Basket is empty</li>
            )}

            <li className='collection-item'>Price: {totalPrice}</li>

            <i
                className='material-icons basket-close'
                onClick={handleBasketShow}
            >
                close
            </i>
        </ul>
    );
};

export default BasketList;
