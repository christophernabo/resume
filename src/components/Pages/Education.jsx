import React from "react";
import Navbar from "../UI/Navbar";
import Footer from "../UI/Footer";

function EducationPage() {
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
                    marginBottom: "5px", textDecoration: "underline"
                }}>Bachelor of Science in Computer Engineering</h3>

                <h4 style={{
                    marginTop: "0",
                    marginBottom: "5px"
                }}>Bicol University Polangui Campus</h4>

                <ul style={{
                    listStyle: "none",
                    padding: 0
                }}>
                    <li style={{
                        marginTop: "0",
                        marginBottom: "5px"
                    }}>June 2015 to May 2020</li>
                    <li style={{
                        marginTop: "0",
                        marginBottom: "5px"
                    }}>Polangui, Albay, Philippines</li>
                    <li style={{
                        marginTop: "0",
                        marginBottom: "5px"
                    }}>Website: <a href="https://bicol-u.edu.ph/category/polangui-campus/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }} aria-label="BUPC Website"><span style={{ cursor: "pointer", color: "inherit" }} >https://bicol-u.edu.ph/category/polangui-campus/</span></a></li>
                </ul>

                <h3 style={{
                    marginTop: "45px",
                    marginBottom: "5px",
                    textDecoration: "underline"
                }}>Bachelor of Science in Computer Engineering</h3>

                <h4 style={{
                    marginTop: "0",
                    marginBottom: "5px"
                }}>Computer Arts and Technological College, Inc. (transferred to Bicol University Polangui Campus)</h4>

                <ul style={{
                    listStyle: "none",
                    padding: 0
                }}>
                    <li style={{
                        marginTop: "0",
                        marginBottom: "5px"
                    }}>June 2014 to March 2015</li>
                    <li style={{
                        marginTop: "0",
                        marginBottom: "5px"
                    }}>Legazpi City, Albay, Philippines</li>
                    <li style={{
                        marginTop: "0",
                        marginBottom: "20px"
                    }}>Website: <a href="https://www.catcollege.edu.ph/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }} aria-label="CATC Website"><span style={{ cursor: "pointer", color: "inherit" }} >https://www.catcollege.edu.ph/</span></a></li>
                </ul>

            </div>

            <Footer />

        </div >
    );
}

export default EducationPage;
