import produce from "immer";

import { SET_BAKED_ROLLS } from '../constants';

const initialState = {
    items: []
};

export default (state = initialState, action) => {
    return produce(state, draft => {
        switch (action.type) {
            case SET_BAKED_ROLLS:
                draft.items = action.payload;
                break;
            default:
        }
    });
};