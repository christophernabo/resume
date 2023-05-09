import React from 'react';

function Navbar() {
  const buttonStyle = {
    margin: '30px',
  }

  const linkStyle = {
    display: 'block',
    padding: '10px',
    color: '#000000',
    textDecoration: 'underline',
  }

  return (
    <nav>
      <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', justifyContent: 'center' }}>
        <li style={buttonStyle} ><a href="#experience" style={linkStyle}>Experience</a></li>
        <li style={buttonStyle} ><a href="#skills" style={linkStyle}>Skills</a></li>
        <li style={buttonStyle} ><a href="#education" style={linkStyle}>Education</a></li>
        <li style={buttonStyle} ><a href="#others" style={linkStyle}>Others</a></li>

      </ul>
    </nav>
  );
}

export default Navbar;

