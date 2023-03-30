import React from 'react';
import logo from '../../assets/Kolkata-Knight-Riders-Logo-PNG.png';
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
<img className='img' src={logo} alt="" />

<div>
<a href="./home">Home</a>
<a href="./features">Features</a>
<a href="./shop">Shop</a>
</div>
        </nav>
    );
};

export default Header;