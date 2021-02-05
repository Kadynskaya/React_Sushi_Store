import axios from 'axios';

import { SET_ROLLS } from '../constants';

export const fetchRolls = (sortBy) => (dispatch) => {
    axios
        .get(`/rolls?_sort=${sortBy.type}&_order=${sortBy.order}`)
        .then(({ data }) => {
            dispatch(setRolls(data));
        })
};

export const setRolls = (items) => ({
    type: SET_ROLLS,
    payload: items
});