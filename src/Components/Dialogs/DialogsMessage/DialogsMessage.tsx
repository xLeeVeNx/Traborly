// Import from libs
import React from 'react';

// Import styles
import './DialogsMessage.scss';

// Import interfaces
import { IDialogsMessageProps } from '../../../interface/Interfaces';

// Main code
export const DialogsMessage: React.FC<IDialogsMessageProps> = props => {
	return (
		<div className="dialogs__message">{ props.text }</div>
	);
};