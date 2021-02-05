import React from 'react';
import classNames from 'classnames';
import PropTypes from "prop-types";

const Button = ({ children, onClick, modName}) => {
    return (
        <button
            onClick={onClick}
            className={classNames('button', {
                [`button--${modName}`]: modName
            })}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.any,
    onClick: PropTypes.func,
    modName: PropTypes.string,
};

export default Button ;
