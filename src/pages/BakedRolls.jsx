import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import { fetchBakedRolls } from '../redux/actions/baked-rolls';
import { addToCart } from "../redux/actions/cart";

import FiltersBlock from "../components/FiltersBlock";
import FoodCard from "../components/FoodCard";

const BakedRolls = () => {
    const dispatch = useDispatch();
    const items = useSelector(({ bakedRolls }) => bakedRolls.items);

    React.useEffect(() => {
        dispatch(fetchBakedRolls())
    }, []);

    const handleAddToCart = obj => {
        dispatch(addToCart(obj))
    };

    return (
        <div className="wrapper">
            <div className="menu-item">
                <div className="menu-item__top">
                    <h1 className="title-block">Запеченные роллы</h1>
                </div>
                <FiltersBlock />
                <div className="menu-item__items-block">
                    {
                        items && items.map(item => (
                            <FoodCard
                                key={item.id}
                                {...item}
                                onClickAdd={handleAddToCart}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default BakedRolls;
