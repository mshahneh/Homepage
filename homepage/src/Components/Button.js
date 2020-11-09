import React, { Component } from "react";
import "./CSS/Button.scss";

class Button extends Component {
    render() {
        let active = this.props.isActive? "active-button":"deactive-button";
        console.log(this.props.text, this.props.isActive)
        return(
            <div className={"button " + active} onClick={this.props.onClick}>
                {this.props.text}
            </div>
        )
    }
}


export default Button;