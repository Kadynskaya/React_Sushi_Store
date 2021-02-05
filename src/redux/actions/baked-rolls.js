import axios from 'axios';

import { SET_BAKED_ROLLS } from '../constants';

export const fetchBakedRolls = () => (dispatch) => {
    axios
        .get('/baked-rolls')
        .then(({ data }) => {
            dispatch(setBakedRolls(data));
        })
};

export const setBakedRolls = (items) => ({
    type: SET_BAKED_ROLLS,
    payload: items
});