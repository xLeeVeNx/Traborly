// Import from libs
import React from 'react';

// Import styles
import './FriendsItem.scss';

// Import interfaces
import { IFriendsItemProps } from '../../../interface/Interfaces';

// Main code
export const FriendsItem: React.FC<IFriendsItemProps> = props => {
	return (
		<div className="friends__item">
			<img className="friends__item-img" src={ props.sourceImage } alt={ props.altText } />
			<span className="friends__item-text">{ props.fullName }</span>
		</div>
	);
};