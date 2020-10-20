import React, { useState } from 'react';

const Footer = (props) => {
  return (
    <footer className="generic-section footer-section">
      {props.footerData.map((column, index) => {
        return <div className="footer-column">
          <h3 className="column-title">{column.columnName}</h3>
          {column.columnItems.map((item, index) => {
            return <div>
                <a 
                className="column-link" 
                href={item.url} 
                target="_blank">
                  <p className="column-item">{item.name}</p>
                </a>
              </div>
          })}
        </div>
      })}
      <div className="footer-note-container">
        <p className="footer-note">Meow meow meow!</p>
        <img className="paw-print-svg" src="../../../public/images/paw-print.svg" />
      </div>
    </footer>
  )
}

export default Footer;
