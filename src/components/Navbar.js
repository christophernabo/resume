import React, { useState } from "react";

function ButtonHover() {
  const [buttons, setButtons] = useState([
    { id: 1, isHovered: false, label: 'Experience' },
    { id: 2, isHovered: false, label: 'Skills' },
    { id: 3, isHovered: false, label: 'Education' },
    { id: 4, isHovered: false, label: 'Other' },
  ]);

  const handleHover = (id, isHovered) => {
    const updatedButtons = buttons.map((button) =>
      button.id === id ? { ...button, isHovered } : button
    );
    setButtons(updatedButtons);
  };

  const buttonStyle = {
    backgroundColor: '#ffffff',
    color: '#000000',
    border: 'none',
    borderRadius: '5px',
    padding: '10px',
    margin: '10px 50px 0px 30px',
    fontFamily: 'Consolas',
    fontSize: '16px',
    transition: 'background-color 0.3s ease-in-out',
  };

  return (
    <div style={{ marginTop: '30px' }}>
      {buttons.map((button) => (
        <button
          key={button.id}
          style={{
            ...buttonStyle,
            backgroundColor: button.isHovered ? "#8C8C8C" : buttonStyle.backgroundColor,
          }}
          onMouseEnter={() => handleHover(button.id, true)}
          onMouseLeave={() => handleHover(button.id, false)}
        >
          {button.label}
        </button>
      ))}
    </div>
  );
}

export default ButtonHover;
