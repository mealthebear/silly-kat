import React, { useState } from 'react';

const Header = (props) => {
  return (
    <header className="header">
      <h1 className="header-title" onClick={props.dynamicRender}>Sollypop!</h1>
      <img className="header-paw-print" src="../../../public/images/paw-print.svg" />
      <span className="about-me-link" onClick={() => props.dynamicRender(false)}>About Meh</span>
    </header>
  )
}

export default Header;
