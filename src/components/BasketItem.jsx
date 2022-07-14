import React, { useContext } from 'react';
import { ShopContext } from '../context';

const BasketItem = (props) => {
    const { id, name, price, quantity } = props;

    const { removeOrderItem, increaseQuantity, decreaseQuantity } =
        useContext(ShopContext);

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
