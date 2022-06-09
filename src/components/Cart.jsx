import React from 'react';

const Cart = (props) => {
    const { quantity = 0, showBasket = Function.prototype } = props;

    return (
        <div className='cart blue darken-4 white-text' onClick={showBasket}>
            <i className='material-icons small'>shopping_cart</i>
            {quantity ? <span>{quantity}</span> : null}
        </div>
    );
};

export default Cart;
