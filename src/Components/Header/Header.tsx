import React from 'react';

import './Header.scss';

const Header: React.FC = () => {
    return (
        <>
            <header className="header">
                <a className="logo" href="#">
                    <img className="logo__image"
                         src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/BMW_logo_%28gray%29.svg/2048px-BMW_logo_%28gray%29.svg.png"
                         alt="Logotype"/>
                </a>
            </header>
        </>
    );
};

export default Header;