// Import from libs
import React from 'react';

// Import interfaces
import { IDialogsMessageProps } from './IDialogsMessage';

// Main code
export const DialogsMessage: React.FC<IDialogsMessageProps> = props => {
	return (
		<div className="dialogs__message">{ props.text }</div>
	);
};