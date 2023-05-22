import React, { useState } from "react";
import News from "../Assets/news.png";
import Weather from "../Assets/weather.png";
import Navbar from "../UI/Navbar";
import Footer from "../UI/Footer";

function ProjectsPage() {
    const [, setShowViewer] = useState(false);

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
                marginBottom: "50px",
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
                    }}><b>• PH Online Weather Search</b></div>
                    <div > <a
                        href="https://646b1cb44661a800086e5075--funny-madeleine-802369.netlify.app/"
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
                <p>A web application that allows you to explore real-time weather information about different cities and towns. This is very useful for those who are planning to travel or just want to stay updated on the weather conditions of specific locations.
                </p>
                <div style={{ marginTop: "10px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <img src={Weather} alt="" style={{ maxWidth: "50vw", height: "auto" }} />
                </div>
            </div>


            <div style={{
                margin: "10px",
                marginBottom: "30px",
                textAlign: "left"
            }}>

                <div style={{
                    display: "inline-block",
                    alignItems: "center"
                }}>
                    <div style={{
                        marginRight: "10px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap"
                    }}><b>• PH Online News Today</b> (not deployed at the moment)</div>
                </div>
                <p>A web application that allows you to browse the top 20 latest news from the Philippines covering various topics. The site is updated regularly and automatically.
                </p>
                <div style={{ marginTop: "10px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <img src={News} alt="" style={{ maxWidth: "50vw", height: "auto" }} />
                </div>
            </div>

            <Footer />

        </div >
    );
}

export default ProjectsPage;
