import React, {useState} from 'react';
import Logo from '../../images/Logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faBars } from '@fortawesome/free-solid-svg-icons';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = ({hiddenCart, toggleCart}) => {
  const [hidden, setHidden] = useState("hidden");
  const toggleNavbar = (isHidden) => {
    if (isHidden === "hidden") {
      setHidden("");
    }else{
      setHidden("hidden");
    }
  }

  return (
    <header className='header'>
      <nav className='nav'>
        <img src={Logo} alt="" />
        <div className={`transparent-layer ${hidden}`}>
          <div className='navbar'>
            <Link to="/">Shop</Link>
            <Link to="/orders">Orders</Link>
            <Link to="/inventory">Inventory</Link>
            <Link to="/about">About</Link>
          </div>
        </div>
        <button onClick={() => toggleCart(hiddenCart)} className='show-cart-btn'>
          <FontAwesomeIcon icon={faCartShopping} />
        </button>
        <button className="menu-btn" onClick={() => toggleNavbar(hidden)}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </nav>
    </header>
  );
}

export default Header;
