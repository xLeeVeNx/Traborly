// Import from libs
import React from 'react';

// Import styles
import './styles/Header.scss';

// Import images
import logo from '../../assets/images/logo.png';

// Main code
export const Header: React.FC = () => {
	return (
		<>
			<header className="header">
				<a className="logo" href="/">
					<img className="logo__image"
					     src={ logo }
					     alt="Logotype" />
				</a>
			</header>
		</>
	);
};