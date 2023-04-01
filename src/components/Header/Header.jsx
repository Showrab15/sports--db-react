import React from 'react';
import logo from '../../assets/Kolkata-Knight-Riders-Logo-PNG.png';
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
<img className='img' src={logo} alt="" />

<div>
<a href="./Header.jsx">Home</a>
<a href="../Shop/Shop.jsx">Features</a>
<a href="../Shop/Shop.jsx">Shop</a>
</div>
        </nav>
    );
};

export default Header;