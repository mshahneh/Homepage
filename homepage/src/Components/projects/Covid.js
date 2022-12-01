import React, { Component } from "react";
import "../CSS/projectCards.scss";

class Covid extends Component {
    render() {
        return (
            <div className="cards">
                <div className="item">
                    <p className="title">
                        Covid-19 detection
                    </p>
                    <p className="desc">
                        Detection of Covid-19 is expensive, especially in relatively poor countries. Also the tests for
                        Covid-19 are not widely available world-wide. In contrast X-Rays have been around for while. This project tries to detect Covid-19 using X-Ray images.
                    </p>
                    <p className="desc">
                        you can see the result in the image. also, you can read about it <a href={require("../../Constants/Deep_learning_project_report.pdf")}>here</a>
                    </p>
                    <img src={require("../../Images/covid-compair.png")} />

                </div>
            </div>
        );
    }
}

export default Covid;
