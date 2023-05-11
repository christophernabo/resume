import React from "react";

const Footer = () => {
    return (
        <div
            style={{
                position: "relative",
                bottom: 0,
                padding: "20px 0px 20px 0px",
                borderTop: "1px solid black",
                borderRadius: "0px 0px 20px 20px",
                fontFamily: "Consolas",
                fontSize: "16px",
                backgroundColor: "#ADD8E6",
            }}
        >
            <div><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }} aria-label="LinkedIn Profile"><span style={{ cursor: "pointer", color: "inherit" }} >LinkedIn</span></a> | <a href="https://www.github.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }} aria-label="LinkedIn Profile"><span style={{ cursor: "pointer", textDecoration: "none", color: "inherit" }}>Github</span></a></div>
            <div>© 2023 Christopher Nabo</div>
        </div>
    );
};

export default Footer;
