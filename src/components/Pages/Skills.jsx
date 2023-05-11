import React from "react";
import Navbar from "../UI/Navbar";
import Footer from "../UI/Footer";

function SkillsPage() {
    return (
        <div style={{ display: 'inline-block', width: "80vw", border: "1px solid black ", margin: "10px", borderRadius: "20px" }}>
            <Navbar />
            <h1>Welcome to the Skills Page</h1>
            <Footer />
        </div>
    );
}

export default SkillsPage;
