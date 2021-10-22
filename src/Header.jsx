import React from 'react';
import "./css/header.css"


const Header = (props) => {
  return (
    <header>
      <div className="logoNtitle">
        <img style={{ maxWidth: 30, maxHeight: 30 }} src='https://mediaconnect.appypie.com/media/icons/128x128/1530516045226_aircall_logo.png' alt="aircall" />
        <h1 style={{ fontFamily: 'roboto', fontSize: 18, fontWeight: '500' }}>
          {props.heading}
        </h1>
      </div>
    </header>
  );
};

export default Header;
