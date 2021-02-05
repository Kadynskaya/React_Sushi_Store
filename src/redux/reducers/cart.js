import produce from "immer";
import { get } from 'lodash';

import {
    ADD_TO_CART,
    PLUS_CART_ITEM,
    MINUS_CART_ITEM,
    REMOVE_CART_ITEM,
    CLEAR_CART
} from '../constants';

const initState = {
    items: {},
    totalCount: 0,
    totalPrice: 0
};

const getTotalPrice = arr => arr.reduce((sum, obj) => obj.price + sum, 0);

const getTotalSum = (obj, path) => {
    return Object.values(obj).reduce((sum, obj) => {
        const value = get(obj, path);
        return sum + value;
    }, 0);
}

export default (state = initState, action) => {
    return produce(state, draft => {
        switch (action.type) {
            case ADD_TO_CART:
                if(!draft.items[action.payload.id]) {
                    draft.items[action.payload.id] = {curItems: [], curItemsCount: 0, curItemsPrice: 0};
                }
                draft.items[action.payload.id].curItems.push(action.payload);
                draft.items[action.payload.id].curItemsCount = draft.items[action.payload.id].curItems.length;
                draft.items[action.payload.id].curItemsPrice = getTotalPrice(draft.items[action.payload.id].curItems);
                break;
            case PLUS_CART_ITEM:
                draft.items[action.payload].curItems.push(draft.items[action.payload].curItems[0]);
                draft.items[action.payload].curItemsCount = draft.items[action.payload].curItems.length;
                draft.items[action.payload].curItemsPrice = getTotalPrice(draft.items[action.payload].curItems);
                break;
            case MINUS_CART_ITEM:
                if(draft.items[action.payload].curItems.length > 1) {
                    draft.items[action.payload].curItems.shift();
                    draft.items[action.payload].curItemsCount = draft.items[action.payload].curItems.length;
                    draft.items[action.payload].curItemsPrice = getTotalPrice(draft.items[action.payload].curItems);
                } else {
                    delete draft.items[action.payload];
                }
                break;
            case REMOVE_CART_ITEM:
                delete draft.items[action.payload];
                break;
            case CLEAR_CART:
                draft.items = {};
                break;
            default:
        }

        draft.totalCount = getTotalSum(draft.items, 'curItemsCount');
        draft.totalPrice = getTotalSum(draft.items, 'curItemsPrice');
    });
};
