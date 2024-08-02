import {Link, NavLink} from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css'


export const Navbar = () => {

    const [menuOpen, setMenuopen] = useState(false);

  return (
    <nav>

        <Link to="/" className='title'>
         Home
        </Link>

        <div className="menu" onClick={()=> setMenuopen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        
        <ul className ={menuOpen ? "open" : ""}>
          <li className='nav-item'>
            <NavLink to="/location">Location</NavLink>
          </li>
          <li>
            <NavLink to="/product">Product</NavLink>
          </li>
          <li>
            <NavLink to="/warehouse">Warehouse</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to="/forms" >Forms</NavLink>
          </li>
          
        </ul>

    </nav>
  )
}
