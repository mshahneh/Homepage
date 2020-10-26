import React, { Component } from "react";
import "./CSS/projectCards.css";

class Art extends Component {
    render() {
        return (
            <div className="cards">
                <div className="item">
                    <p className="title">my Paintings</p>
                    <p className="desc">
                        using pointillism method, containing thousands of points
                    </p>
                    <img src={require("../Images/painting1.jpg")} />
                    <img src={require("../Images/painting2.jpg")} />
                    <p className="desc">drawing with straight lines</p>
                    <img src={require("../Images/painting3.jpg")} />
                    <p className="desc">modern warfare</p>
                    <img src={require("../Images/painting4.jpg")} />
                </div>
            </div>
        );
    }
}

export default Art;
