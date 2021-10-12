// Import from libs
import React from 'react';

// Import types
import { DialogsMessagePropsType } from './DialogsMessageType';

// Main code
export const DialogsMessage: React.FC<DialogsMessagePropsType> = props => {
	return (
		<div className="dialogs__message">{ props.text }</div>
	);
};