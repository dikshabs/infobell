import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import logo from './infobel.png';


console.log(logo); 

function Header() {
    return(
        <div className='header'>
            <div className='header__logo'>
                <Link to='/'>
                <img className='header__logoImg' src={logo} alt="Logo" />;
                </Link>
            </div>
            <div className='header__links'>
                <Link to= '/'>Home</Link> <br></br>
                <Link to= '/'>Service</Link> <br></br>
                <Link to= '/'>Our IP</Link> <br></br>
                <Link to= '/'>Contact</Link> <br></br>
                <Link to= '/'>Careers</Link>
            </div>
        </div>
  
 
    );
}

export default Header;

