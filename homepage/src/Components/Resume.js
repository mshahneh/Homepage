import React, { Component } from "react";
import "./CSS/Resume.scss";
import FaPDF from "react-icons/lib/fa/file-pdf-o";
import Tab from "./Tab";

class Resume extends Component {
    constructor(props) {
        super();
        this.state = {
            selectedTab:0
        }
    }
    tab_item_click(num){
        this.setState({ selectedTab: num });
        // window.history.pushState(null, menuItems[num], `/${menuItems[num]}`);
    }
    render() {
        return (
            <div id="resume">
                <div className="title">
                    <h1>Resume</h1>
                    <a href={require("../Constants/CV.pdf")}>
                        <FaPDF style={{ color: "#944" }} /> Download PDF version
                    </a>
                </div>
                {/*<div className={"title"}>*/}
                {/*    <h1>Resume</h1>*/}
                {/*    <Tab tabItems={["CV", "resume"]}*/}
                {/*         onClick={(x) => this.tab_item_click(x)}*/}
                {/*         activeTab={this.state.selectedTab}/>*/}
                {/*</div>*/}
                <div id="resume-main">
                    <div className="resume-row">
                        <p>Research Interests</p>
                        <div>
                            <div className="item">
                                <p className="content">Computer Vision</p>
                                <p className="content">Algorithms </p>
                                <p className="content">
                                    Computation Theory and complexity
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="resume-row">
                        <p>Education</p>
                        <div>
                            <div className="item">
                                <p className="title">
                                    University of California Riverside, Riverside,
                                    USA (2019 - Present)
                                </p>
                                <p className="content">
                                    M.Sc in Computer Science GPA:
                                    3.95/4
                                </p>
                            </div>
                            <div className="item">
                                <p className="title">
                                    Sharif University of Technology, Tehran,
                                    Iran (2014 - 2019)
                                </p>
                                <p className="content">
                                    B.Sc in Computer Science GPA:
                                    17.35/20
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="resume-row">
                        <p>Honors and Awards</p>
                        <div>
                            <div className="item">
                                <p className="content">
                                    <span>Silver medal </span>
                                    in the Iranian National Olympiad in
                                    Informatics (2013)
                                </p>
                                <p className="content">
                                    UCR’s Graduate Fellowship Award (2019-2020)
                                </p>
                                <p className="content">
                                    ranked 4th in Iran’s national university entrance exam (Konkour) for masters degree(2019)
                                </p>
                                <p className="content">
                                    Scholarship from Iran's National Elites Foundation for the first year of university
                                </p>
                                <p className="content">
                                    Ranked 6<sup>th</sup> in the ACM-IPC
                                    Contest, Shiraz, Iran (2014)
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="resume-row">
                        <p>Research Experience</p>
                        <div>
                            <div className="item">
                                <p className="title">
                                    Generalizing Geographically Weighted Regression Model (ongoing)
                                </p>
                                <p className="content">
                                    With Prof. Oymak and Prof. Magdy
                                </p>
                                <p className="content">
                                    Improving the speed and accuracy of a spatially-varrying coefficient model
                                </p>
                            </div>
                            <div className="item">
                                <p className="title">
                                    Detecting and Recognizing Persian texts in
                                    Images (Summer 2018 - Winter 2019)
                                </p>
                                <p className="content">
                                    under supervision of Dr. Mostafa Kamali
                                </p>
                                <p className="content">
                                    An end-to-end trainable scene text detector with our own synthetic text generator engine without any humanlabelled data
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="resume-row">
                        <p>Teaching Experience</p>
                        <div>
                            <div className="item">
                                <p className="title">Teaching Assistant at UCR</p>
                                <p className="content">
                                    Introduction to Programming (Fall 2020)
                                </p>
                            </div>
                            <div className="item">
                                <p className="title">Teaching Assistant at SUT</p>
                                <p className="content">
                                    Advanced Programming, Dr. Boomari, Spring
                                    2016
                                </p>
                                <p className="content">
                                    Design and Analysis of Algorithms, Dr.
                                    Khazaei, Spring 2017
                                </p>
                                <p className="content">
                                    Data structures, Dr. Khazaei, Fall 2017
                                </p>
                                <p className="content">
                                    Design and Analysis of Algorithms, Dr.
                                    Zarei, Spring 2018
                                </p>
                                <p className="content">
                                    Automata and Language Theory, Dr. Khazaei,
                                    Fall 2018
                                </p>
                                <p className="content">
                                    Data structures, Dr. Foroughmand, Fall 2018
                                </p>
                                <p className="content">
                                    Basic Programming, Dr. Zarei, Winter 2018
                                </p>
                            </div>
                            <div className="item">
                                <p className="title">
                                    Algorithm and Programming Teacher
                                </p>
                                <p className="content">
                                    Teaching C++ programming, Algorithms, and
                                    Problem Solving Strategies to high school
                                    students preparing for Olympiad in
                                    Informatics (2015-2017)
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="resume-row">
                        <p>Working Experience</p>
                        <div>
                            <div className="item">
                                <p className="title"> Designing question</p>
                                <p className="content">
                                    for the first round of the 25
                                    <sup>th</sup> Iranian National Olympiad in
                                    Informatics (2016)
                                </p>
                            </div>
                            <div className="item">
                                <p className="title">Front-End Developer</p>
                                <p className="content">
                                    A website about mobile application statistic
                                    for{" "}
                                    <a href="http://ronash.co">
                                        Ronash Corporation{" "}
                                    </a>
                                </p>
                            </div>
                            <div className="item">
                                <p className="title">
                                    Summer internship at Rahnema Corporation
                                </p>
                                <p className="content">
                                    Developing a location based social media app
                                    for android, summer 2017
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="resume-row">
                        <p>Skills</p>
                        <div>
                            <div className="item">
                                <p className="title">Programming Languages</p>
                                <p className="content">
                                    Expert in: C++, Java, MATLAB, React
                                </p>
                                <p className="content">
                                    Experience in : phyton, R, Java Script,
                                    React native, CSS, HTML
                                </p>
                            </div>
                            <div className="item">
                                <p className="title">Team Work</p>
                                <p className="content">
                                    Experience in working with Scrum framework
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="last-row">
                        <p>Interests</p>
                        <div>
                            <div className="item">
                                <p className="content">Painting</p>
                                <p className="content">Video Games</p>
                                <p className="content">Soccer</p>
                                <p className="content">Playing Guitar</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Resume;
