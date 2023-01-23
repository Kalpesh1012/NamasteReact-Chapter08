import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [isloggedin, setIsLoggedIn] = useState(false);
  return (
    <div className="header" key="d1">
      <img
        src="https://content3.jdmagicbox.com/comp/navi-mumbai/l4/022pxx22.xx22.180901093644.i4l4/catalogue/khao-piyo-sojao-nerul-navi-mumbai-home-delivery-restaurants-j7ab4cza91.jpg"
        alt="logo"
      />
      <ul className="list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link>Cart</Link>
        </li>
      </ul>
      {isloggedin ? (
        <button className="Log-in" onClick={() => setIsLoggedIn(false)}>
          Log In
        </button>
      ) : (
        <button className="Log-out" onClick={() => setIsLoggedIn(true)}>
          Log Out
        </button>
      )}
    </div>
  );
};
export default Header;
