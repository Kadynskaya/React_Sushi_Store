import React, {useState} from 'react';
import Modal from 'react-modal';
import {useDispatch, useSelector} from "react-redux";
import { Link } from "react-router-dom";

import CartItem from "../components/CartItem";
import Button from "../components/Button";

import { plusCartItem, minusCartItem, removeCartItem, clearCart } from '../redux/actions/cart';

const customStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.75)',
        zIndex: 100
    },
    content : {
        position: 'fixed',
        top: '20vh',
        left: 0,
        right: 0,
        bottom: 'initial',
        margin: '0 auto',
        border: 'none',
        boxShadow: 'rgba(0,0,0,0.1) 0px 16px 60px 20px',
        background: '#fff',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        outline: 'none',
        padding: '30px',
        maxWidth: '350px',
        zIndex: 101
    }
};

Modal.setAppElement('#root');

const Cart = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const { items, totalCount, totalPrice } = useSelector(({ cart }) => cart);

    const addedItem = Object.keys(items).map(key => items[key].curItems[0]);

    const dispatch = useDispatch();
    const onPlus = id => dispatch(plusCartItem(id));
    const onMinus = id => dispatch(minusCartItem(id));
    const onRemove = id => dispatch(removeCartItem(id));
    const handleClearCart = () => dispatch(clearCart());
    const handleModal = () => {
        setModalIsOpen(!modalIsOpen);
    };

    return (
        <div className="wrapper">
            <div className="cart">
                <p className="cart__warning">Внимание! Минимальная сумма заказа для доставки составляет 150
                    грн</p>
                {
                    totalCount ?
                        <>
                            <h1 className="title-block cart__title">Ваш заказ</h1>
                            <div className="cart__clear-wrap">
                                <span onClick={handleModal} className="cart__clear-cart">Очистить корзину</span>
                            </div>
                            <Modal
                                isOpen={modalIsOpen}
                                style={customStyles}
                            >
                                <div className="modal">
                                    <button onClick={handleModal} className="modal__close">
                                    </button>
                                    <p className="modal__title">Очистить корзину?</p>
                                    <div className="modal__btn-wrap">
                                        <Button onClick={handleClearCart} modName="redRadiusBtn">Очистить</Button>
                                        <Button onClick={handleModal} modName="redRadiusBtn">Отмена</Button>
                                    </div>
                                </div>
                            </Modal>
                            <div className="cart__order">
                                {
                                    addedItem.map(obj => (
                                            <CartItem
                                                key={obj.id}
                                                id={obj.id}
                                                title={obj.title}
                                                imageUrl={obj.imageUrl}
                                                curItemCount={items[obj.id].curItemsCount}
                                                curItemPrice={items[obj.id].curItemsPrice}
                                                onPlusItem={onPlus}
                                                onMinusItem={onMinus}
                                                onRemoveItem={onRemove}
                                            />
                                    ))
                                }
                            </div>
                            <div className="cart__total-wrap">
                                <p className="cart__total-text">Итого заказ:</p>
                                <span className="cart__total-price">{totalPrice} грн</span>
                            </div>
                        </>
                    :
                        <>
                            <div className="cart__empty">
                                <div className="cart__text-wrap">
                                    <div className="cart__text">Ваша корзина пуста ...</div>
                                    <div className="cart__text">... добавьте в нее вкусную еду!</div>
                                </div>
                                <Link className="cart__btn-link" to="/">
                                    <Button modName="redRadiusBtn">Перейти в меню</Button>
                                </Link>
                            </div>
                        </>
                }
            </div>
        </div>
    );
};

export default Cart;
