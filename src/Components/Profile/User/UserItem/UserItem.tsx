// Import from libs
import React from 'react';

// Import interfaces
import { IUserItemProps } from '../../../../interface/Interfaces';

// Main code
export const UserItem: React.FC<IUserItemProps> = props => {
	return (
		<li className="profile__user-item">
			<span className="profile__user-label">{ props.label }</span>
			<span className="profile__user-value">{ props.value }</span>
		</li>
	);
};