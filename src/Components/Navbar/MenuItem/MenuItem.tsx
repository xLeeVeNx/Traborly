// Import from libs
import React from 'react';
import { NavLink } from 'react-router-dom';

// Import styles
import './MenuItem.scss';

// Import interfaces
import { IMenuItemProps } from '../../../interface/Interfaces';

// Main code
export const MenuItem: React.FC<IMenuItemProps> = props => {
	return (
		<li className="menu__item">
			<NavLink className="menu__link" to={ props.href }>
				<img className="menu__icon" src={ props.sourceImage } alt={ props.altText } />
				<span className="menu__text">{ props.text }</span>
			</NavLink>
		</li>
	);
};