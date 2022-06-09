import React from 'react';
import GoodsItem from './GoodsItem';

const GoodList = (props) => {
    const { goods = [], cb = Function.prototype } = props;

    if (!goods.length) {
        return <h3>Nothing here!</h3>;
    }

    return (
        <div className='goods'>
            {goods.map((item) => {
                return <GoodsItem key={item.id} {...item} cb={cb} />;
            })}
        </div>
    );
};

export default GoodList;
