import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import { fetchRolls } from '../redux/actions/rolls';
import { addToCart } from '../redux/actions/cart';

import FoodCard from "../components/FoodCard";
import FiltersBlock from "../components/FiltersBlock";

const Rolls = () => {
    const dispatch = useDispatch();
    const items = useSelector(({ rolls }) => rolls.items);
    const { sortBy } = useSelector(({ filter }) => filter);

    React.useEffect(() => {
        dispatch(fetchRolls(sortBy))
    }, [sortBy]);

    const handleAddToCart = obj => {
        dispatch(addToCart(obj))
    };

    return (
        <div className="wrapper">
            <div className="menu-item">
                <div className="menu-item__top">
                    <h1 className="title-block">Роллы</h1>
                </div>
                <FiltersBlock />
                <div className="menu-item__items-block">
                    {
                        items && items.map(item => (
                            <FoodCard
                                onClickAdd={handleAddToCart}
                                key={item.id}
                                {...item}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Rolls;
