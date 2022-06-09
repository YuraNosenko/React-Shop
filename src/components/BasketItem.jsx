import React from 'react';

const BasketItem = (props) => {
    const {
        id,
        name,
        price,
        quantity,
        removeOrderItem = Function.prototype,
        increaseQuantity = Function.prototype,
        decreaseQuantity = Function.prototype,
    } = props;

    return (
        <li className='collection-item'>
            {name}: {price} x{' '}
            <span
                className='quantity-order'
                onClick={() => decreaseQuantity(id)}
            >
                -
            </span>
            {quantity}
            <span
                className='quantity-order'
                onClick={() => increaseQuantity(id)}
            >
                +
            </span>{' '}
            = {price * quantity}
            <span className='secondary-content'>
                <i
                    className='material-icons remove-item'
                    onClick={() => removeOrderItem(id)}
                >
                    close
                </i>
            </span>
        </li>
    );
};

export default BasketItem;
