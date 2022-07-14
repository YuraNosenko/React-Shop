import React, { useContext } from 'react';
import GoodsItem from './GoodsItem';
import { ShopContext } from '../context';

const GoodList = () => {
    const { goods } = useContext(ShopContext);

    if (!goods.length) {
        return <h3>Nothing here!</h3>;
    }

    return (
        <div className='goods'>
            {goods.map((item) => {
                return <GoodsItem key={item.id} {...item} />;
            })}
        </div>
    );
};

export default GoodList;
