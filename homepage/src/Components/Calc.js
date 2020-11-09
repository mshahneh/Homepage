import React, { Component } from "react";
import "./CSS/projectCards.scss";

class Art extends Component {
    render() {
        return (
            <div className="cards">
                <div className="item">
                    <p className="title">graphical calculator</p>
                    <p className="desc" />
                    <img src={require("../Images/cal1.jpg")} />
                </div>
            </div>
        );
    }
}

export default Art;
