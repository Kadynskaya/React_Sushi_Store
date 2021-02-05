import { SET_SORT_BY } from "../constants";


export const setSortBy = ({ name, type, order }) => ({
    type: SET_SORT_BY,
    payload: { name, type, order }
});