import React, { useContext } from 'react';
import { ShopContext } from '../context';

const Cart = (props) => {
    const { quantity = 0 } = props;
    const { handleBasketShow } = useContext(ShopContext);

    return (
        <div
            className='cart blue darken-4 white-text'
            onClick={handleBasketShow}
        >
            <i className='material-icons small'>shopping_cart</i>
            {quantity ? <span>{quantity}</span> : null}
        </div>
    );
};

export default Cart;
