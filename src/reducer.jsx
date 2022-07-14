export function reducer(state, { type, payload }) {
    switch (type) {
        case 'SET_GOODS':
            return {
                ...state,
                goods: payload || [],
                loading: false,
            };

        case 'HIDE_ALERT':
            return { ...state, nameOfOrder: '' };

        case 'REMOVE_ORDER_ITEM':
            return {
                ...state,
                order: state.order.filter((order) => order.id !== payload.id),
            };

        case 'INCREASE_QUANTITY':
            const newOrder = state.order.map((orderItem) => {
                if (orderItem.id === payload.id) {
                    return { ...orderItem, quantity: orderItem.quantity + 1 };
                } else {
                    return orderItem;
                }
            });

            return {
                ...state,
                order: newOrder,
            };

        case 'DECREASE_QUANTITY':
            const newOrderItem = state.order.map((orderItem) => {
                if (orderItem.id === payload.id) {
                    return {
                        ...orderItem,
                        quantity:
                            orderItem.quantity > 1 ? orderItem.quantity - 1 : 1,
                    };
                } else {
                    return orderItem;
                }
            });

            return {
                ...state,
                order: newOrderItem,
            };

        case 'HANDLE_BASKET_SHOW':
            return {
                ...state,
                isBasketShow: !state.isBasketShow,
            };

        case 'ADD_ORDER_TO_CART':
            const itemIndex = state.order.findIndex(
                (orderItem) => orderItem.id === payload.order.id
            );

            let newOrderObj = null;

            if (itemIndex < 0) {
                const newItem = { ...payload.order, quantity: 1 };

                newOrderObj = [...state.order, newItem];
            } else {
                newOrderObj = state.order.map((orderItem, index) => {
                    if (itemIndex === index) {
                        return {
                            ...orderItem,
                            quantity: orderItem.quantity + 1,
                        };
                    } else {
                        return orderItem;
                    }
                });
            }

            return {
                ...state,
                order: newOrderObj,
                nameOfOrder: payload.order.name,
            };

        default:
            return { ...state };
    }
}
