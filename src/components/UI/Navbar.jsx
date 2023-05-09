import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Navbar() {
  const [buttons, setButtons] = useState([
    { id: 0, isHovered: false, label: "Home", link: "/" },
    { id: 1, isHovered: false, label: "Experience", link: "/experience" },
    { id: 2, isHovered: false, label: "Skills", link: "/skills" },
    { id: 3, isHovered: false, label: "Education", link: "/education" },
    { id: 4, isHovered: false, label: "Other", link: "/other" }
  ]);

  const history = useHistory();

  const handleHover = (id, isHovered, link) => {
    if (link !== history.location.pathname) {
      const updatedButtons = buttons.map((button) =>
        button.id === id ? { ...button, isHovered } : button
      );
      setButtons(updatedButtons);
    }
  };

  const handleClick = (link) => {
    if (link !== history.location.pathname) {
      history.push(link);
    }
  };

  const buttonStyle = {
    backgroundColor: "#ffffff",
    color: "#000000",
    border: "none",
    borderRadius: "5px",
    padding: "10px",
    margin: "10px 50px 0px 30px",
    fontFamily: "Consolas",
    fontSize: "16px",
    transition: "background-color 0.3s ease-in-out"
  };

  return (
    <div style={{ marginTop: "30px" }}>
      {buttons.map((button) => (
        <button
          key={button.id}
          style={{
            ...buttonStyle,
            backgroundColor: button.isHovered
              ? "#8C8C8C"
              : buttonStyle.backgroundColor,
            textDecoration:
              button.link === history.location.pathname ? "underline" : "none",
            pointerEvents:
              button.link === history.location.pathname ? "none" : "auto"
          }}
          onMouseEnter={() => handleHover(button.id, true, button.link)}
          onMouseLeave={() => handleHover(button.id, false, button.link)}
          onClick={() => handleClick(button.link)}
        >
          {button.label}
        </button>
      ))}
    </div>
  );
}

export default Navbar;
