import React from "react";

const Footer = () => {
    return (
        <div
            style={{
                position: "relative",
                bottom: 0,
                margin: "20px 0px 20px 0px",
                borderTop: "1px solid black",
                fontFamily: "Consolas",
                fontSize: "16px"
            }}
        >
            <div style={{ marginTop: "20px" }}>LinkedIn | Github</div>
            <div>© 2023 Christopher Nabo</div>
        </div>
    );
};

export default Footer;
