// Import from libs
import React from 'react';

// Import styles
import './styles/Logo.scss';

// Import images
import logo from '../../assets/images/logo.png';

// Main code
export const Logo: React.FC = () => {
	return (
		<a className="logo" href="/">
			<img className="logo__image"
			     src={ logo }
			     alt="Logotype" />
		</a>
	);
};