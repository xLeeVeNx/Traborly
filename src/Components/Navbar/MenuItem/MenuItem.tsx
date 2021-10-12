// Import from libs
import React from 'react';
import { NavLink } from 'react-router-dom';

// Import types
import { MenuItemPropsType } from './MenuItemType';

// Main code
export const MenuItem: React.FC<MenuItemPropsType> = props => {
	return (
		<li className="menu__item">
			<NavLink className="menu__link" to={ props.href }>
				<img className="menu__icon" src={ props.sourceImage } alt={ props.altText } />
				<span className="menu__text">{ props.text }</span>
			</NavLink>
		</li>
	);
};