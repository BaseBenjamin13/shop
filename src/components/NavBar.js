import React, { useState } from 'react'
import '../assets/style/NavBar.css';



function NavBar() {

    const [nav, setNav] = useState({
        cartIcon: 'https://i.imgur.com/4JpVowC.png'
    })
  
  
    return (
    <div className="navbar">
        
            <h1>Tech Excess</h1>
            <h2>Monitors</h2>
            <h2>Keyboard</h2>
            <h2>Mouses</h2>
            <h2>Headphones</h2>
        
        <div>
            <img src={nav.cartIcon} />
        </div>
    </div>
  )
}

export default NavBar