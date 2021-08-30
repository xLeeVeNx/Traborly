import React from 'react';
import {NavLink} from 'react-router-dom';

interface IMenuItemProps {
    text: string;
    href: string;
}

const MenuItem: React.FC<IMenuItemProps> = props => {
    return (
        <li className="menu__item">
            <NavLink className="menu__link" to={props.href}>{props.text}</NavLink>
        </li>
    )
};

export default MenuItem;