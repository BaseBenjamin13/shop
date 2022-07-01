import React, { useState } from 'react';
import '../assets/style/NavBar.css';
import { Link } from 'react-router-dom';



function NavBar() {

    const [nav, setNav] = useState({
        cartIcon: 'https://i.imgur.com/4JpVowC.png'
    })
  
  
    return (
    <div className="navbar">
        
            <Link to={`/`} className="nav-link">
                <h1>Tech Excess</h1>
            </Link>
            <Link to={`/monitors`} className="nav-link">
                <h2>Monitors</h2>
            </Link>
            <Link to={`/keyboards`} className="nav-link">
                <h2>Keyboard</h2>
            </Link>
            <Link to={`/mouses`} className="nav-link">
                <h2>Mouses</h2>
            </Link>
            <Link to={`/`} className="nav-link">
                <h2>Headphones</h2>
            </Link>
        
        <div className="cart-container">
            <img src={nav.cartIcon} />
        </div>
    </div>
  )
}

export default NavBar