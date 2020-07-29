import React from 'react';
import "../styles/Header.css";

function Header () {
    return (
      <div className="header">
        <h1>Employee Directory</h1>
        <p>Click headers to sort table by columns. Type to filter through names.</p>
      </div>
    )
  }

export default Header;
