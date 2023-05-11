import React from "react";
import Navbar from "../UI/Navbar";
import Footer from "../UI/Footer";

function DownloadsPage() {
    return (
        <div style={{ display: 'inline-block', width: "80vw", border: "1px solid black ", margin: "10px", borderRadius: "20px" }}>
            <Navbar />
            <div style={{ margin: "10px", textAlign: "left" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ marginRight: "10px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>Diploma</div>
                    <div >View | Download</div>
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ marginRight: "10px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>Civil Service</div>
                    <div >View | Download</div>
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ marginRight: "10px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>Ubiquiti Broadband Wireless Spacialist</div>
                    <div >View | Download</div>
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ marginRight: "10px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>Principles of Graphic Design</div>
                    <div >View | Download</div>
                </div>
            </div>
            <Footer />
        </div >
    );
}

export default DownloadsPage;
