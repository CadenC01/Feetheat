import React from "react";
import { Link } from "react-router-dom";
// import { Search, ShoppingCartOutlined } from "@material-ui/icons";

const Navbar = ({ user, setToken, setUser, token }) => {
  return (
    <div className="navbar">
      <div className="navcont">
        <div className="navleft">
          <div className="searchcont">{/* <Search /> */}</div>
        </div>
        <div className="navcenter" link to="/src/pages/Home.js">
          FEAT HEAT
        </div>
        <div className="navright">
          <div className="menuCont">
            <Link to="/" className="menuItem">
              HOME
            </Link>
            <Link to="/Products" className="menuItem">
              ALL SHOES
            </Link>

            {user ? (
              user.isAdmin === true ? (
                <Link to="/admin" className="menuItem">
                  ADMIN
                </Link>
              ) : null
            ) : null}

            <Link to="/Cart" className="menuItem">
              CART
            </Link>
            {user ? (
              <Link
                to="/"
                onClick={() => {
                  setToken("");
                  setUser(null);
                  localStorage.removeItem("token");
                }}
                className="menuItem"
              >
                LOGOUT
              </Link>
            ) : (
              <>
                <Link to="/Login" className="menuItem">
                  SIGN IN
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
