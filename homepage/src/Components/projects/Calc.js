import React, { Component } from "react";
import "../CSS/projectCards.scss";

class Calc extends Component {
    render() {
        return (
            <div className="cards">
                <div className="item">
                    <p className="title">graphical calculator</p>
                    <p className="desc" > This calculator is completely written in Java from scratch. Every element is overidden and designed by myself to make it look more like the android calculator (at the moment)</p>
                    <p className="desc" > Clicking on the left edge would open more complex math functions and clicking on the right edge opens a panel that interpolates points and would draw the equation</p>
                    <img src={require("../../Images/calc1.jpg")} />
                </div>
            </div>
        );
    }
}

export default Calc;
