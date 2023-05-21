import React, { useState } from "react";
import Navbar from "../UI/Navbar";
import Footer from "../UI/Footer";

function ProjectsPage() {
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
                }}>Projects Aside from this Online Resume</h3>

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
                    }}>PH Online Weather Search</div>
                    <div > <a
                        href="https://646a35de50c3070008efde0a--funny-madeleine-802369.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none" }}
                        aria-label="View File"
                        onClick={handleViewDocument}
                    >
                        <span style={{
                            cursor: "pointer",
                            color: "inherit",
                            marginRight: "10px"
                        }}>
                            View
                        </span>
                    </a>
                    </div>
                </div>
            </div>

            <Footer />

        </div >
    );
}

export default ProjectsPage;
