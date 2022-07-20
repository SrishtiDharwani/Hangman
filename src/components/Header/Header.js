import React from "react";
import "./Header.css";

function Header() {
  return (
    <React.Fragment>
      <div className="head">
        <span className="headerStyle">H </span>
        <span className="headerStyle">A </span>
        <span className="headerStyle">N </span>
        <span className="headerStyle">G </span>
        <span className="headerStyle">M </span>
        <span className="headerStyle">A </span>
        <span className="headerStyle">N </span>
      </div>

      <br></br>
      <h3>Find the hidden word!</h3>
    </React.Fragment>
  );
}

export default Header;
