import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import logoSvg from '../assets/img/logo.png';

const Header = () => {
    const { totalCount } = useSelector(({cart}) => cart);

    return (
        <header className="header">
            <div className="wrapper header__wrap">
                <Link to="/" className="header__logo">
                    <img src={logoSvg} alt="SushiWok Logo" />
                </Link>
                <Link to="/cart">
                    <div className="header__cart" title="Cart">
                        <svg id="icon-basket" viewBox="0 0 96 96">
                            <g>
                                <path d="M70.9,37.2c-0.2-0.3-0.5-0.5-0.9-0.5H44c-0.6,0-1,0.4-1,1s0.4,1,1,1h24.3c-6.4,11-9.9,11-12.3,11h-9
                                    c-7.4,0-7.8-1.7-9.2-9c-0.2-1.2-0.5-2.6-0.8-4.2c-2.2-10.1-10.9-10.3-11-10.3l0,0c-0.5,0-1,0.4-1,1s0.4,1,1,1c0.3,0,7.2,0.2,9,8.7
                                    c0.3,1.5,0.6,2.9,0.8,4.1c0.5,2.8,1.7,6.8,1.7,6.9v3.7c0,2.1,1.3,6.1,5.9,6.1h18c0.6,0,1-0.4,1-1s-0.4-1-1-1h-18
                                    c-3.7,0-3.9-3.7-3.9-4.1v-1.5c1.5,1.1,3.8,1.6,7.4,1.6h9c3.7,0,8-1,14.9-13.5C71,37.9,71,37.5,70.9,37.2z">

                                </path>
                                <circle className="st0" cx="42.7" cy="64.9" r="3">
                                </circle>
                                <circle className="st0" cx="59" cy="64.9" r="3">
                                </circle>
                            </g>
                        </svg>
                        {
                            totalCount > 0 &&
                                <span className="header__total-count">{totalCount}</span>
                        }
                    </div>
                </Link>
            </div>
        </header>
    )
}

export default Header;