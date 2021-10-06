// Import from libs
import React from 'react';
import { NavLink } from 'react-router-dom';

// Import interfaces
import { IDialogsItem } from './IDialogsItem';

// Main code
export const DialogsItem: React.FC<IDialogsItem> = ({text, id}) => {
	const path = `/dialogs/${ id }`;

	return (
		<NavLink className="dialogs__item" to={ path }>{ text }</NavLink>
	);
};