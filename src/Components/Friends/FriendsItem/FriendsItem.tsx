// Import from libs
import React from 'react';

// Import types
import { FriendsItemPropsType } from './FriendsItemType';

// Main code
export const FriendsItem: React.FC<FriendsItemPropsType> = props => {
	return (
		<div className="friends__item">
			<img className="friends__item-img" src={ props.sourceImage } alt={ props.altText } />
			<span className="friends__item-text">{ props.fullName }</span>
		</div>
	);
};