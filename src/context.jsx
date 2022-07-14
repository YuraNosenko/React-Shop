import { createContext, useReducer } from 'react';
import { reducer } from './reducer';

export const ShopContext = createContext();

const initialState = {
    goods: [],
    loading: false,
    order: [],
    isBasketShow: false,
    nameOfOrder: '',
};

export const ContextProvider = ({ children }) => {
    const [value, dispatch] = useReducer(reducer, initialState);

    value.hideAlert = () => {
        dispatch({ type: 'HIDE_ALERT' });
    };

    value.removeOrderItem = (itemID) => {
        dispatch({ type: 'REMOVE_ORDER_ITEM', payload: { id: itemID } });
    };

    value.increaseQuantity = (itemID) => {
        dispatch({ type: 'INCREASE_QUANTITY', payload: { id: itemID } });
    };

    value.decreaseQuantity = (itemID) => {
        dispatch({ type: 'DECREASE_QUANTITY', payload: { id: itemID } });
    };

    value.handleBasketShow = () => {
        dispatch({ type: 'HANDLE_BASKET_SHOW' });
    };

    value.addOrderToCart = (item) => {
        dispatch({ type: 'ADD_ORDER_TO_CART', payload: { order: item } });
    };

    // value.handleLoadingShow = (handle) => {
    //     dispatch({ type: 'TOGGLE_LOADING', payload: { loading: handle } });
    // };

    value.setGoods = (data) => {
        dispatch({ type: 'SET_GOODS', payload: data });
    };

    return (
        <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
    );
};
