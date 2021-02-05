import produce from 'immer';

import { SET_SORT_BY } from "../constants";

const initialState = {
    sortBy: {
        name: 'По популярности',
        type: 'popular',
        order: 'desc'
    }
};

export default (state= initialState, action) => {
    return produce(state, draft => {
        switch (action.type) {
            case SET_SORT_BY:
                draft.sortBy = action.payload;
                break;
            default:
        }
    });
};
