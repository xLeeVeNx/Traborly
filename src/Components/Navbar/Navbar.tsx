// Import from libs
import React from 'react';

// Import styles
import './styles/Navbar.scss';

// Import components
import { MenuItem } from './MenuItem/MenuItem';

// Import interfaces
import { INavbarProps } from './INavbar';

// Main code
export const Navbar: React.FC<INavbarProps> = ({MenuItemData}) => {
	return (
		<nav className="menu">
			<ul className="menu__list">
				{
					MenuItemData.map(item =>
						<MenuItem key={ item.id } sourceImage={ item.sourceImage } href={ item.href }
						          altText={ item.altText } text={ item.text } />,
					)
				}
			</ul>
		</nav>
	);
};