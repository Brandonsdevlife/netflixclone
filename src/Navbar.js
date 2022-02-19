
import './navbar.css'
import React, { useState, useEffect } from 'react';




function Navbar() {
    
    const [show, handleShow] = useState(true)

    useEffect(() => {
      window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true)
        } else handleShow(false);
    });
      return () => {
        window.removeEventListener("scroll")
      };
    }, []);
    

  return (
    <div className={`nav ${show && "nav__black"}`}>

            <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
            alt="Netflix Logo" className='nav__logo'/>

            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
            alt="Netflix Avatar" className="nav__avatar" />

    </div>
    

  )
}

export default Navbar