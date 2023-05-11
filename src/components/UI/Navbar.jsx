import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function Navbar() {
  const [buttons, setButtons] = useState([
    { id: 0, label: "Home", link: "/" },
    { id: 1, label: "Experience", link: "/experience" },
    { id: 2, label: "Skills", link: "/skills" },
    { id: 3, label: "Education", link: "/education" },
    { id: 4, label: "Other", link: "/other" }
  ]);

  const [activeButton, setActiveButton] = useState(null);

  const history = useHistory();

  useEffect(() => {
    const activeLink = localStorage.getItem("activeLink");
    if (activeLink) {
      const updatedButtons = buttons.map((button) =>
        button.link === activeLink ? { ...button, isHovered: true } : button
      );
      setButtons(updatedButtons);
      setActiveButton(activeLink);
    } else {
      const updatedButtons = buttons.map((button) =>
        button.label === "Home" ? { ...button, isHovered: true } : button
      );
      setButtons(updatedButtons);
      localStorage.setItem("activeLink", "/");
      setActiveButton("/");
    }
  }, [localStorage]);

  const handleHover = (id, isHovered) => {
    const updatedButtons = buttons.map((button) =>
      button.id === id ? { ...button, isHovered } : button
    );
    setButtons(updatedButtons);
  };

  const handleClick = (link) => {
    const updatedButtons = buttons.map((button) =>
      button.link === link ? { ...button, isHovered: true, isActive: true } : { ...button, isHovered: false, isActive: false }
    );
    setButtons(updatedButtons);
    localStorage.setItem("activeLink", link);

    if (link !== history.location.pathname) {
      history.push(link);
    } else {
      window.location.reload();
    }
  };

  const buttonStyle = {
    backgroundColor: "transparent",
    border: "none",
    borderRadius: "10px",
    padding: "10px",
    margin: "10px 50px 10px 50px",
    fontFamily: "Consolas",
    fontSize: "16px",
    transition: "background-color 0.3s ease-in-out",
    cursor: "pointer"
  };


  return (
    <div style={{ borderBottom: "1px solid black", backgroundColor: "#ADD8E6", borderRadius: "20px 20px 0px 0px", }}>
      {buttons.map((button) => (
        <button
          key={button.id}
          className={button.isActive ? "active" : ""}
          style={{
            ...buttonStyle,
            backgroundColor: button.isActive ? "#6EBACB" : (button.isHovered || button.link === history.location.pathname) ? "#6EBACB" : "transparent"
          }}
          onMouseEnter={() => handleHover(button.id, true)}
          onMouseLeave={() => handleHover(button.id, false)}
          onClick={() => handleClick(button.link)}
        >
          {button.label}
        </button>
      ))}
    </div>
  );
}

export default Navbar;
