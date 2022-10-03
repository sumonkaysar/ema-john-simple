import React, {useState} from 'react';
import Logo from '../../images/Logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faBars } from '@fortawesome/free-solid-svg-icons';
import './Header.css'

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
            <a href="/shop">Shop</a>
            <a href="/orders">Orders</a>
            <a href="/inventory">Inventory</a>
            <a href="/about">About</a>
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
