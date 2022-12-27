import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
    items: [],
    total: 0
};

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        let updatedItems;
        const updatedTotal = state.total + action.item.amount * action.item.price;

        const existingItemIndex = state.items.findIndex((item) => item.id === action.item.id);
        const existingItem = state.items[existingItemIndex];

        if (existingItem) {
            const previousItems = [...state.items];
            const updatedItem = {
                ...existingItem,
                amount: existingItem.amount + action.item.amount
            };
            previousItems[existingItemIndex] = updatedItem;
            updatedItems = [...previousItems];
        } else {
            updatedItems = state.items.concat(action.item);
        }

        return {
            items: updatedItems,
            total: updatedTotal
        }
    }
    return defaultCartState;
};

const CartProvider = props => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = item => {
        dispatchCartAction({ type: 'ADD', item: item });
    };
    const removeItemFromCartHandler = id => {
        dispatchCartAction({ type: 'REMOVE', id: id });

    };

    const cartContext = {
        items: cartState.items,
        total: cartState.total,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider;