// Import from libs
import React from 'react';

// Import styles
import './styles/Header.scss';
import { Logo } from '../Logo/Logo';

// Main code
export const Header: React.FC = () => {
	return (
		<>
			<header className="header">
				<Logo />
			</header>
		</>
	);
};