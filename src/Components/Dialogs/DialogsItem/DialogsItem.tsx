// Import from libs
import React from 'react';
import { NavLink } from 'react-router-dom';

// Import types
import { DialogsItemPropsType } from './DialogsItemType';

// Main code
export const DialogsItem: React.FC<DialogsItemPropsType> = ({text, id}) => {
	const path = `/dialogs/${ id }`;

	return (
		<NavLink className="dialogs__item" to={ path }>{ text }</NavLink>
	);
};