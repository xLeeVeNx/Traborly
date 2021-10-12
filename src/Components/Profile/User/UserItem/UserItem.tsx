// Import from libs
import React from 'react';

// Import types
import { UserItemPropsType } from './UserItemType';

// Main code
export const UserItem: React.FC<UserItemPropsType> = props => {
	return (
		<li className="profile__user-item">
			<span className="profile__user-label">{ props.label }</span>
			<span className="profile__user-value">{ props.value }</span>
		</li>
	);
};