// Import from libs
import React from 'react';
import { NavLink } from 'react-router-dom';

// Import styles
import './DialogsItem.scss';

// Import interfaces
import { IDialogsItemProps } from '../../../interface/Interfaces';

// Main code
export const DialogsItem: React.FC<IDialogsItemProps> = ({text, id}) => {
	const path = `/dialogs/${ id }`;

	return (
		<NavLink className="dialogs__item" to={ path }>{ text }</NavLink>
	);
};