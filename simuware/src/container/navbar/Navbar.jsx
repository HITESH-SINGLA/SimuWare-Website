import React from 'react';
// import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/2.png';
const Navbar = () => {
  // const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar-container">
      <div className="navbar-links">
        <div className="navbar-logo">
          {/* Logo */}
          <img src={logo} />
        </div>
        <div className="navbar-links-container">
          {/* Links */}
          <p><a href="#blog">Download</a></p>
          <p><a href="#features">Documentation</a></p>
          
          
        </div>
      </div>
      <div className="navbar-sign">
        {/* Sign in/up */}
      </div>
      {/* <div className="navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className="menu-dropdown">
            <div className="menu-links">
              <p><a href="#blog">Download</a></p>
              <p><a href="#features">Documentation</a></p>
          
          </div>
        )}
      </div> */}
    </div>
  );
};

export default Navbar;
