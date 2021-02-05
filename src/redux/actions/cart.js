import { ADD_TO_CART,
        PLUS_CART_ITEM,
        MINUS_CART_ITEM,
        REMOVE_CART_ITEM,
        CLEAR_CART } from '../constants';


export const addToCart = (addedObj) => ({
    type: ADD_TO_CART,
    payload: addedObj
});

export const plusCartItem = (id) => ({
    type: PLUS_CART_ITEM,
    payload: id
});

export const minusCartItem = (id) => ({
    type: MINUS_CART_ITEM,
    payload: id
});

export const removeCartItem = (id) => ({
    type: REMOVE_CART_ITEM,
    payload: id
});

export const clearCart = () => ({
    type: CLEAR_CART
});