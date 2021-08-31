import React from 'react';
import { NavLink } from 'react-router-dom';

import './DialogsItem.scss';

interface IDialogsItemProps {
	text: string;
	id: number;
}

export const DialogsItem: React.FC<IDialogsItemProps> = ({text, id}) => {
	const path = `/dialogs/${ id }`;

	return (
		<NavLink className="dialogs__item" to={ path }>{ text }</NavLink>
	);
};