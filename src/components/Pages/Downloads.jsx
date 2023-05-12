import React, { useState } from "react";
import Navbar from "../UI/Navbar";
import Footer from "../UI/Footer";
import ReactDocViewer from '@cyntler/react-doc-viewer';

function DownloadsPage() {
    const [showViewer, setShowViewer] = useState(false);

    const handleViewDocument = () => {
        setShowViewer(true);
    };

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

                <h3 style={{
                    marginTop: "20px",
                    marginBottom: "5px",
                    textDecoration: "underline"
                }}>PDF Resume</h3>

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
                    <div > <a
                        href="Files/Christopher Nabo Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none" }}
                        aria-label="View File"
                        onClick={handleViewDocument}
                    >
                        <span style={{
                            cursor: "pointer",
                            color: "inherit"
                        }}>
                            View
                        </span>
                    </a> | <a href="Files/Christopher Nabo Resume.pdf"
                        download
                        style={{ textDecoration: "none" }}
                        aria-label="Download File">
                            <span style={{
                                cursor: "pointer",
                                color: "inherit"
                            }} >Download</span>
                        </a>
                    </div>
                </div>

                <h3 style={{
                    marginTop: "20px",
                    marginBottom: "5px",
                    textDecoration: "underline"
                }}>Academic Qualifications</h3>

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
                    <div > <a
                        href="Files/Christopher Nabo Diploma.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none" }}
                        aria-label="View File"
                        onClick={handleViewDocument}
                    >
                        <span style={{
                            cursor: "pointer",
                            color: "inherit"
                        }}>
                            View
                        </span>
                    </a> | <a href="Files/Christopher Nabo Diploma.pdf"
                        download
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
                    }}>Transcript of Records (Available upon request)</div>
                    <div >
                        <a onClick={() => window.location.href = 'mailto:christopher.nabo07@gmail.com?subject=Request%20for%20Transcript%20of%20Records'}
                            style={{ textDecoration: "none" }}
                            aria-label="Download File">
                            <span style={{
                                cursor: "pointer",
                                color: "#0000FF"
                            }} >Request</span>
                        </a>
                    </div>
                </div>

                <h3 style={{
                    marginTop: "20px",
                    marginBottom: "5px",
                    textDecoration: "underline"
                }}>Certifications</h3>

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
                    }}>Certificate of Eligibility - Career Service Professional Examination</div>
                    <div ><a
                        href="Files/Christopher Nabo Certificate of Eligibility - Career Service Professional Examination.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none" }}
                        aria-label="View File"
                        onClick={handleViewDocument}
                    >
                        <span style={{
                            cursor: "pointer",
                            color: "inherit"
                        }}>
                            View
                        </span>
                    </a> | <a href="Files/Christopher Nabo Certificate of Eligibility - Career Service Professional Examination.pdf"
                        download
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
                    }}>Ubiquiti Networks Training Certification - Ubiquiti Broadband Wireless Specialist</div>
                    <div ><a
                        href="Files/Christopher Nabo Ubiquiti Networks Training Certification - Ubiquiti Broadband Wireless Specialist.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none" }}
                        aria-label="View File"
                        onClick={handleViewDocument}
                    >
                        <span style={{
                            cursor: "pointer",
                            color: "inherit"
                        }}>
                            View
                        </span>
                    </a> | <a href="Files/Christopher Nabo Ubiquiti Networks Training Certification - Ubiquiti Broadband Wireless Specialist.pdf"
                        download
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
                    }}>Certificate in Principles of Graphic Design (Pending)</div>
                </div>
            </div>


            <Footer />

        </div >
    );
}

export default DownloadsPage;
