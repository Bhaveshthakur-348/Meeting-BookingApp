import { Button } from "@material-ui/core";
import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__icon">
        <img
          src="https://www.apkmirror.com/wp-content/uploads/2019/02/5c6e7c58cb9c4.png"
          alt="image"
        />
        {/* <h1>Booking System</h1> */}
      </div>

      <div className="header__right">
        <Button variant="contained" color="secondary">
          LogOut
        </Button>
      </div>
    </div>
  );
}
export default Header;
