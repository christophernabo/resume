import React from "react";
import Navbar from "../UI/Navbar";
import Footer from "../UI/Footer";

function OtherPage() {
    return (
        <div style={{ display: 'inline-block', width: "80vw", border: "1px solid black ", margin: "10px", borderRadius: "20px" }}>
            <Navbar />
            <h1>Welcome to the Other Page</h1>
            <Footer />
        </div>
    );
}

export default OtherPage;
