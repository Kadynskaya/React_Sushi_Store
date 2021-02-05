import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import PropTypes from "prop-types";

import Button from "./Button";
import Counter from "./Counter";
import {minusCartItem, plusCartItem} from "../redux/actions/cart";

const FoodCard = ({ id, title, composition, imageUrl, price, weight, newProduct, promotion, promotionPrice, onClickAdd }) => {
    const cartItems = useSelector(({cart}) => cart.items);

    const dispatch = useDispatch();
    const onPlus = id => dispatch(plusCartItem(id));
    const onMinus = id => dispatch(minusCartItem(id));

    const onAdd = () => {
        const obj = {
            id,
            title,
            imageUrl,
            price: promotionPrice ? promotionPrice : price,
        };
        onClickAdd(obj);
    }

    return (
        <div className="food-card">
            <div className="food-card__top">
                <div className="food-card__img-wrap">
                    <img className="food-card__img" src={imageUrl} alt={title} />
                </div>
                {
                    newProduct && <p className="food-card__new">new</p>
                }
            </div>
            <div className="food-card__description">
                <h2 className="food-card__title">{title}</h2>
                <div>
                    {
                        promotion && <span className="food-card__promotion">акция, </span>
                    }
                    <span className="food-card__composition">{composition}</span>
                    <span className="food-card__weight"> {weight} г</span>
                </div>
            </div>
            <div className="food-card__bottom">
                <div className="food-card__priceBlock">
                    {
                        promotion && <div className="food-card__salePrice">{promotionPrice} грн</div>
                    }
                    <div className={`food-card__price ${promotion ? 'sale' : ''}`}>{price} грн</div>
                </div>
                {
                    cartItems[id] ?
                        <Counter
                            id={id}
                            curItemCount={cartItems[id].curItemsCount}
                            onPlusItem={onPlus}
                            onMinusItem={onMinus}
                            modName="foodCard"
                        />
                        :
                        <Button onClick={onAdd} modName="redRadiusBtn">
                            <div>в корзину</div>
                            <div className="food-card__btn-icon">
                                <svg
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                        fill="#DA0002"
                                    />
                                </svg>
                            </div>
                        </Button>
                }
            </div>
        </div>
    );
};

FoodCard.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    composition: PropTypes.string,
    imageUrl: PropTypes.string,
    price: PropTypes.number,
    weight: PropTypes.number,
    onClickAdd: PropTypes.func,
};

export default FoodCard;
