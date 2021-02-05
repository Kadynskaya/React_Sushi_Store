import { combineReducers } from "redux";

import rolls from './rolls';
import bakedRolls from './baked-rolls';
import cart from './cart';
import filter from './filter';


const rootReducer = combineReducers({
    rolls,
    bakedRolls,
    cart,
    filter
})

export default rootReducer;