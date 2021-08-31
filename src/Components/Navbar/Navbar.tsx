import React from 'react';

import './Navbar.scss';

import MenuItem from './MenuItem/MenuItem';

interface IMenuItem {
	id: number;
	text: string;
	href: string;
}

export const Navbar: React.FC = () => {
	const MenuItemData: IMenuItem[] = [
		{id: 1, text: 'Profile', href: '/profile'},
		{id: 2, text: 'News', href: '/news'},
		{id: 3, text: 'Messages', href: '/dialogs'},
		{id: 4, text: 'Music', href: '/music'},
		{id: 5, text: 'Settings', href: '/settings'},
	];

	return (
		<nav className="menu">
			<ul className="menu__list">
				{ MenuItemData.map(item => <MenuItem text={ item.text } href={ item.href } key={ item.id } />) }
			</ul>
		</nav>
	);
};