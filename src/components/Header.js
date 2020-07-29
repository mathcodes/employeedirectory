import React from 'react';
import "../styles/Header.css";

function Header () {
    return (
      <div className="header">
        <h1>Employee Directory</h1>
        <p>Click on a header to sort the table by the corresponding column, or search by name using the search box provided.</p>
      </div>
    )
  }

export default Header;
