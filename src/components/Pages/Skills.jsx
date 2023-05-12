import React from "react";
import Navbar from "../UI/Navbar";
import Footer from "../UI/Footer";

function SkillsPage() {
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
                }}>QA Testing</h3>
                <ul>

                    <li>Manual Testing</li>
                    <ul>
                        <li>Unit Testing</li>
                        <li>Smoke Testing</li>
                        <li>Functional Testing</li>
                        <li>Regression Testing</li>
                        <li>User Acceptance Testing</li>
                    </ul>

                    <li style={{ marginTop: "5px" }}>Automation Testing</li>
                    <ul>
                        <li>Java (Katalon Studio)</li>
                        <li>Robot Framework (PyCharm)</li>
                        <li>API Testing (Postman)</li>
                    </ul>

                    <li style={{ marginTop: "5px" }}>Issue Tracking and Project Management</li>
                    <ul>
                        <li>Jira</li>
                    </ul>

                    <li style={{ marginTop: "5px" }}>Test Management</li>
                    <ul>
                        <li>TestRail</li>
                    </ul>
                </ul>

                <h3 style={{
                    marginTop: "50px",
                    marginBottom: "5px",
                    textDecoration: "underline"
                }}>Web Development</h3>
                <ul>
                    <li>Frontend</li>
                    <ul>
                        <li>HTML5 + CSS3 + JavaScript</li>
                        <li>ReactJS</li>
                        <li>Material UI</li>
                    </ul>

                    <li style={{ marginTop: "5px" }}>Backend</li>
                    <ul>
                        <li>Django</li>
                        <li>Django REST Framework</li>
                    </ul>

                    <li style={{ marginTop: "5px" }}>Relational Database Management Systems</li>
                    <ul>
                        <li>PostgreSQL (pgAdmin)</li>
                        <li>MySQL (MySQL Workbench)</li>
                    </ul>

                    <li style={{ marginTop: "5px" }}>Version Control System</li>
                    <ul>
                        <li>Git (GitLab, GitHub)</li>
                    </ul>

                    <li style={{ marginTop: "5px" }}>Virtualization and Containerization</li>
                    <ul>
                        <li>Docker</li>
                        <li>Ubuntu</li>
                        <li>CentOS</li>
                    </ul>
                </ul>

                <h3 style={{
                    marginTop: "50px",
                    marginBottom: "5px",
                    textDecoration: "underline"
                }}>Visual Design</h3>
                <ul>
                    <li>UI/UX Design (Figma, Adobe XD, Adobe Illustrator)</li>
                    <li>Graphic Design (Adobe Illustrator)</li>
                </ul>

                <h3 style={{
                    marginTop: "50px",
                    marginBottom: "5px",
                    textDecoration: "underline"
                }}>Language Proficiency</h3>
                <ul>
                    <li>Bicol (native)</li>
                    <li>Filipino/Tagalog (native)</li>
                    <li>English (advanced)</li>
                </ul>

            </div>

            <Footer />

        </div >
    );
}

export default SkillsPage;
