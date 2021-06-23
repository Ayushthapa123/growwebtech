
import React from 'react';
import {Component} from 'react';
import '../css/navbar.css';
import {NavLink} from 'react-router-dom';

import {FiMenu} from 'react-icons/fi';


class Navbar extends Component {
  
    toggle() {
        let x=document.querySelector('nav ul');
        x.classList.toggle('trans-right');
    }


render() {



  return (
    <div>
 
 <nav className='navbar'>

 <div className="logo">
           <a href="/"> <img src='logo1.png' alt='log0o'/> </a>
    </div>

            <ul>
                <li><NavLink to='/' className='actives'>Home</NavLink></li>
                <li><a href='#about'>About</a></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
                <li><a href='#service'>Services</a></li>
                <li>



                </li>

            </ul>

    <div className="toggler">
            <span  onClick={this.toggle}><FiMenu/></span>
    </div>
           
        </nav>
      
    
    
    
    </div>
  );
}
}

export default Navbar;
