import React from 'react';
import './Header.css';
import Logo from './b767c0be9af3401c80c862ead9239dd0.png'

const Header = () => {
    return (
        <div className="Headers">
            <img className="Header_Logo" src={Logo} alt="" />
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Review</a>
                <a href="/manageInventory">ManageInventory</a>
            </nav>
        </div>
    );
};

export default Header;