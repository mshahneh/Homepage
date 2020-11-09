import React, { Component } from "react";
import "./CSS/Menu.scss";
import FaHome from "react-icons/lib/go/home";
import FileAlt from "react-icons/lib/go/file-media";
import CheckList from "react-icons/lib/go/checklist";
import Mail from "react-icons/lib/go/mail";
import Button from './Button';
import styles from '../Constants/_ConstantStyles.scss'
let menu_items = ["About Me", "Resume", "Projects", "Contact Me"];

class Menu extends Component {
    render() {
        let barColor = styles.screenColors.split(' ')[this.props.selectedScreen].substring(0, 7);
        return(
            <div id={"Menu"} >
                <div onClick={() => this.props.click(0)} className={"left"}> Mohammad Reza Zare Shahneh </div>
                <div className={"right"}> {menu_items.map((item, index) =>
                    <Button onClick={() => this.props.click(index)}
                            text={item}
                            isActive={index === this.props.selectedScreen}
                    />)}
                </div>
            </div>
        );
    }
}

export default Menu;

// <div className="RightPanel">
//     <div
//         style={{
//             padding: "0",
//             margin: "0",
//             position: "relative"
//         }}
//     >
//         <img
//             style={{
//                 width: "100%",
//                 position: "relative",
//                 margin: 0,
//                 padding: 0
//             }}
//             src={require("./Images/mohammadreza.jpg")}
//         />
//         <p>Mohammad Reza</p>
//     </div>
//     <ul>
//         <li
//             className={
//                 this.state.selectedScreen === 1
//                     ? "ActiveRitem"
//                     : "Ritem"
//             }
//             onClick={() => {
//                 this.setState({ selectedScreen: 1 });
//                 window.history.pushState(null, "aboutme", "/aboutme");
//             }}
//         >
//             <FaHome className="panelIcon" />
//             ABOUT ME
//         </li>
//         <li
//             className={
//                 this.state.selectedScreen === 2
//                     ? "ActiveRitem"
//                     : "Ritem"
//             }
//             onClick={() => {
//                 this.setState({ selectedScreen: 2 });
//                 window.history.pushState(null, "resume", "/resume");
//             }}
//         >
//             <FileAlt className="panelIcon" /> RESUME
//         </li>
//         <li
//             className={
//                 this.state.selectedScreen === 3
//                     ? "ActiveRitem"
//                     : "Ritem"
//             }
//             onClick={() => {
//                 this.setState({ selectedScreen: 3 });
//                 window.history.pushState(null, 'projects', '/projects');
//             }}
//         >
//             <CheckList className="panelIcon" /> PROJECTS
//         </li>
//         <li
//             className={
//                 this.state.selectedScreen === 4
//                     ? "ActiveRitem"
//                     : "Ritem"
//             }
//             onClick={() => {
//                 this.setState({ selectedScreen: 4 });
//                 window.history.pushState(null, "contactme", "/contactme");
//             }}
//         >
//             <Mail className="panelIcon" />
//             CONTACT
//         </li>
//     </ul>
// </div>