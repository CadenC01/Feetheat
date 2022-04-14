import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <div>
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/Login" className="link">
          Login
        </Link>
        <Link to="/Register" className="link">
          Register
        </Link>
        <Link to="/Products" className="link">
          Products
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
