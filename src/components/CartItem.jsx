import React from 'react';
import PropTypes from "prop-types";

import Counter from "./Counter";
import MediaQuery from "./MediaQuery";

const CartItem = ({ id, title, imageUrl, curItemCount, curItemPrice, onPlusItem, onMinusItem, onRemoveItem }) => {
    const handleRemoveItem = () => {
        onRemoveItem(id);
    };

    const MediaCounter = MediaQuery("(min-width: 740px)");

    return (
        <div className="cart-item">
            <div className="cart-item__img-wrap">
                <img className="cart-item__img" src={imageUrl} alt={title} />
            </div>
            <div className="cart-item__text-wrap">
                <p className="cart-item__title">{title}</p>
                <span className="cart-item__price">{curItemPrice} грн</span>
            </div>
            <Counter
                id={id}
                curItemCount={curItemCount}
                onPlusItem={onPlusItem}
                onMinusItem={onMinusItem}
                modName="cartItem"
            />
            {
                MediaCounter ?
                    <div className="cart-item__btn-wrap">
                        <button
                            onClick={handleRemoveItem}
                            className="cart-item__btn">
                        </button>
                    </div>
                    :
                    <></>
            }
        </div>
    );
}

CartItem.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    imageUrl: PropTypes.string,
    curItemCount: PropTypes.number,
    curItemPrice: PropTypes.number,
    onPlusItem: PropTypes.func,
    onMinusItem: PropTypes.func,
    onRemoveItem: PropTypes.func,
};

export default CartItem;
