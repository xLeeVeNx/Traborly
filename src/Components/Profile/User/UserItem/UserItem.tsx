// Import from libs
import React from 'react';

// Import interfaces
import { IUserItemProps } from '../../../../interface/Interfaces';

// Main code
export const UserItem: React.FC<IUserItemProps> = props => {
	return (
		<p className="profile__user-item">{ props.text }</p>
	);
};