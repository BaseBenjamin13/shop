import React, { useState } from 'react';
import '../assets/style/NavBar.css';
import { Link } from 'react-router-dom';



function NavBar() {

    const [nav, setNav] = useState({
        cartIcon: 'https://i.imgur.com/4JpVowC.png'
    })
  
  
    return (
    <div className="navbar">
        
            <h1>Tech Excess</h1>
            <Link to={`/monitors`} >
                <h2>Monitors</h2>
            </Link>
            <Link to={`/keyboards`} >
                <h2>Keyboard</h2>
            </Link>
            <h2>Mouses</h2>
            <h2>Headphones</h2>
        
        <div className="cart-container">
            <img src={nav.cartIcon} />
        </div>
    </div>
  )
}

export default NavBar