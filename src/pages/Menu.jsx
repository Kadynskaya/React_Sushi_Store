import React from 'react';
import { Link } from "react-router-dom";

import RollsImg from '../assets/img/menu/polls.jpg';
import BakedRollsImg from '../assets/img/menu/baked-rolls.jpg';

const menuItems = [
    {
        name: 'Роллы',
        link: '/rolls',
        src: RollsImg,
    },
    {
        name: 'Запеченные роллы',
        link: '/baked-rolls',
        src: BakedRollsImg,
    },
]

const Menu = () => {
    return (
        <div className="wrapper">
            <div className="menu">
                <h1 className="title-block">Меню</h1>
                <div className="menu__items-block">
                    {
                        menuItems.map((menuItem, index) => (
                            <div className="menu__item-wrap" key={`${menuItem.name}_${index}`}>
                                <Link to={menuItem.link} className="menu__item">
                                    <img src={menuItem.src} alt={menuItem.name} className="menu__img"/>
                                    <span className="menu__title">{menuItem.name}</span>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Menu;
