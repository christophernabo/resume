import React, { useState } from "react";
import Navbar from "../UI/Navbar";
import Footer from "../UI/Footer";

const ExperiencePage = () => {
    const [showFullList, setShowFullList] = useState(false);
    const [showFullList1, setShowFullList1] = useState(false);

    const toggleList = () => {
        setShowFullList(!showFullList);
    }

    const toggleList1 = () => {
        setShowFullList1(!showFullList1);
    }

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
                }}>Web Application Tester/Software Full Stack Developer</h3>

                <h4 style={{
                    marginTop: "0",
                    marginBottom: "5px"
                }}>Department of Science and Technology - Advanced Science and Institute (DOST-ASTI)</h4>

                <h4 style={{
                    marginTop: "0",
                    marginBottom: "5px"
                }}>March 2022 to April 2023</h4>

                <h4 style={{
                    marginTop: "0",
                    marginBottom: "5px"
                }}>Quezon City, National Capital Region, Philippines</h4>

                <p>Responsibilities as a Web Application Tester:</p>

                <ul>
                    {showFullList ? (
                        <>
                            <li>Understand and review software document (user stories, validation document, test plan, test design, etc.) in preparation for testing;</li>
                            <li>Inform the test lead about what all resources will be required for software testing;</li>
                            <li>Develop and document test cases for testing and learn to prioritize testing activities;</li>
                            <li>Execute test cases to verify bug-free functionality of new and existing features;</li>
                            <li>Discover, research, and document project bugs and defects;</li>
                            <li>Product support, investigating potential live issues and bugs;</li>
                            <li>Work directly with the programming and design teams to investigate and reproduce complex issues; and</li>
                            <li>Identify, report and document software defects using provided templates.</li>
                            <li style={{ listStyleType: "none" }}>
                                <a style={{
                                    color: "blue",
                                    cursor: "pointer"
                                }}
                                    onClick={toggleList}><span style={{ fontSize: "18px" }}>&laquo;</span> See less </a>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>Understand and review software document (user stories, validation document, test plan, test design, etc.) in preparation for testing;</li>
                            <li>Inform the test lead about what all resources will be required for software testing;</li>
                            <li>Develop and document test cases for testing and learn to prioritize testing activitie;</li>
                            <li style={{ listStyleType: "none" }}>
                                <a style={{
                                    color: "blue",
                                    cursor: "pointer"
                                }}
                                    onClick={toggleList}>See more <span style={{ fontSize: "18px" }}>&raquo;</span></a>
                            </li>
                        </>
                    )}
                </ul>

                <p>Responsibilities as a Software Full Stack Developer:</p>

                <ul>
                    {showFullList1 ? (
                        <>
                            <li>Install and configure local Django installation for back-end development;</li>
                            <li>Install and configure Anaconda Python package manager for Python back-end development;</li>
                            <li>Implement Django-based Web application back-end functionalities that will integrate with developed front-end solutions;</li>
                            <li>Implement Django-based API application endpoints;</li>
                            <li>Install and configure local installations of NGINX, GUnicorn, and PostgreSQL for integration with the back-end source code;</li>
                            <li>Perform unit tests for written back-end source code;</li>
                            <li>Collaborate with business analyst, front-end developer, and API designer in identifying back-end functionalities that need to be implemented;</li>
                            <li>Collaborate with the AI engineers in integrating the developed machine learning models into the API application;</li>
                            <li>Collaborate with the system administrator in deploying the developed Django-based Web application and API application;</li>
                            <li>Develop technical documentation of written back-end source code for the Web application and API application;</li>
                            <li>Participate in regular Scrum stand-up meetings with the system development team to give status updates on assigned software development tasks;</li>
                            <li>Design user interaction models, workflows and user interfaces;</li>
                            <li>Collaborate with business analyst and back-end developers to define the user experience;</li>
                            <li>Perform hands-on programming tasks, such as prototyping, feature development, bug fixing, testing across multiple browsers/platforms;</li>
                            <li>Implement best practices for coding in accordance to W3C standards, great usability and exceptional quality, with awareness of client needs and priorities;</li>
                            <li>Design and implement web applications;</li>
                            <li>Translate exchange specifications and build systems' prototype; and</li>
                            <li>Ensure system features behave according to specifications by conducting unit test, integration test and regression test.</li>
                            <li style={{ listStyleType: "none" }}>
                                <a style={{
                                    color: "blue",
                                    cursor: "pointer"
                                }}
                                    onClick={toggleList1}><span style={{ fontSize: "18px" }}>&laquo;</span> See less </a>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>Install and configure local Django installation for back-end development;</li>
                            <li>Install and configure Anaconda Python package manager for Python back-end development;</li>
                            <li>Implement Django-based Web application back-end functionalities that will integrate with developed front-end solutions;</li>
                            <li style={{ listStyleType: "none" }}>
                                <a style={{
                                    color: "blue",
                                    cursor: "pointer"
                                }}
                                    onClick={toggleList1}>See more <span style={{ fontSize: "18px" }}>&raquo;</span></a>
                            </li>
                        </>
                    )}
                </ul>

                <p>Shared Responsibilities:</p>

                <ul>
                    <li>Write documentation of the software, e.g. test plan, testcases, bug reports, user manual, technical documentation;</li>
                    <li>Participate in events and other activities (e.g., exhibits, meetings, and seminars) needed for the project;</li>
                    <li>Handle minor task tickets that may be specific to software programmer, software tester, or business analyst; and</li>
                    <li>Proactively collaborate with other team members in delivering software requirements.</li>
                </ul>

                <h3 style={{
                    marginTop: "50px",
                    marginBottom: "5px",
                    textDecoration: "underline"
                }}>IT Personnel (On-the-job Training)</h3>

                <h4 style={{
                    marginTop: "0",
                    marginBottom: "5px"
                }}>Bicol University Polangui Campus - Engineering Department</h4>

                <h4 style={{
                    marginTop: "0",
                    marginBottom: "5px"
                }}>June 2019 to September 2019</h4>

                <h4 style={{
                    marginTop: "0",
                    marginBottom: "5px"
                }}>Polangui, Albay, Philippines</h4>

                <p>Responsibilities:</p>

                <ul>
                    <li>Maintain the running condition of computer units in the department's laboratory;</li>
                    <li>Perform software installation, computer reformatting, computer assembly and disassembly;</li>
                    <li>Keep an inventory of the computers and their peripheral devices; and</li>
                    <li>Create local area network among the computers and switches.</li>
                </ul>

            </div>

            <h4 style={{
                marginLeft: "10px",
                marginTop: "50px",
                textAlign: "left",
                marginBottom: "20px"
            }}>NOTE: Character references are available upon request.</h4>

            <Footer />

        </div>
    );
};

export default ExperiencePage;
