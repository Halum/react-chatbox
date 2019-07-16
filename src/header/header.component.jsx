import React from 'react';
import './header.style.scss';

const Header = props => {
  return (
    <div className="header" onClick={props.onClose}>
      <div className="header-title"> {props.title || 'Chat'} </div>
    </div>
  );
};

export default Header;