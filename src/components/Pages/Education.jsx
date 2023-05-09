import React from "react";
import Navbar from "../UI/Navbar";
import Footer from "../UI/Footer";

function EducationPage() {
    return (
        <div style={{ display: 'inline-block', justifyContent: 'center', minHeight: "80vh", minWidth: "80vw", border: "1px solid black ", margin: "10px", borderRadius: "20px" }}>
            <Navbar />
            <h1>Welcome to the Education Page</h1>
            <Footer />
        </div>
    );
}

export default EducationPage;
