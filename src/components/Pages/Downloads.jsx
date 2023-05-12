import React from "react";
import Navbar from "../UI/Navbar";
import Footer from "../UI/Footer";

function DownloadsPage() {
    return (
        <div style={{
            display: 'inline-block',
            width: "80vw",
            border: "1px solid black ",
            margin: "10px",
            borderRadius: "20px"
        }}>

            <Navbar />

            <div style={{
                margin: "10px",
                textAlign: "left"
            }}>

                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                }}>
                    <div style={{
                        marginRight: "10px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap"
                    }}>Resume</div>
                    <div ><a href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none" }}
                        aria-label="View File">
                        <span style={{
                            cursor: "pointer",
                            color: "inherit"
                        }} >View
                        </span>
                    </a> | <a href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none" }}
                        aria-label="Download File">
                            <span style={{
                                cursor: "pointer",
                                color: "inherit"
                            }} >Download</span>
                        </a>
                    </div>
                </div>

                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                }}>
                    <div style={{
                        marginRight: "10px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap"
                    }}>Diploma</div>
                    <div ><a href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none" }}
                        aria-label="View File">
                        <span style={{
                            cursor: "pointer",
                            color: "inherit"
                        }} >View
                        </span>
                    </a> | <a href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none" }}
                        aria-label="Download File">
                            <span style={{
                                cursor: "pointer",
                                color: "inherit"
                            }} >Download</span>
                        </a>
                    </div>
                </div>

                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                }}>
                    <div style={{
                        marginRight: "10px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap"
                    }}>Civil Service</div>
                    <div ><a href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none" }}
                        aria-label="View File">
                        <span style={{
                            cursor: "pointer",
                            color: "inherit"
                        }} >View
                        </span>
                    </a> | <a href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none" }}
                        aria-label="Download File">
                            <span style={{
                                cursor: "pointer",
                                color: "inherit"
                            }} >Download</span>
                        </a>
                    </div>
                </div>

                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                }}>
                    <div style={{
                        marginRight: "10px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap"
                    }}>Ubiquiti Broadband Wireless Specialist</div>
                    <div ><a href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none" }}
                        aria-label="View File">
                        <span style={{
                            cursor: "pointer",
                            color: "inherit"
                        }} >View
                        </span>
                    </a> | <a href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none" }}
                        aria-label="Download File">
                            <span style={{
                                cursor: "pointer",
                                color: "inherit"
                            }} >Download</span>
                        </a>
                    </div>
                </div>
            </div>

            <Footer />

        </div >
    );
}

export default DownloadsPage;
