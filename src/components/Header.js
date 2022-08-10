import React from 'react';
import "../styles/Header.css";

function Header () {
    return (
      <div className="header">
        <img className="logoNav" src="https://raw.githubusercontent.com/mathcodes/employeedirectory/master/src/components/blueJcircle.png" alt="blueJ logo" width="60px"/>
        <h1>Employee Directory</h1>
        <p></p>
      </div>
    )
  }

export default Header;
