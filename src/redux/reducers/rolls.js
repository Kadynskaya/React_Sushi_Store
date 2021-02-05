import produce from "immer";

import { SET_ROLLS } from'../constants';

const initialState = {
    items: []
};

export default (state = initialState, action) => {
    return produce(state, draft => {
        switch (action.type) {
            case SET_ROLLS:
                draft.items = action.payload;
                break;
            default:
        }
    });
};
