import React, { Component } from "react";
import "./CSS/Tab.scss";
let menu_items = ["About Me", "Resume", "Projects", "Contact Me"];

class Tab extends Component {
    render() {
        return (<div className={"tab"}>
            {this.props.tabItems.map((item, index) =>
                <div className={`tabItem ${this.props.activeTab == index? "activeTab" : "deactiveTab"}`}
                     onClick={()=>this.props.onClick(index)}
                > {item} </div>)}
        </div>)
    }
}

export default Tab;