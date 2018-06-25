import React, {Component} from "react";
import "./Navbar.css";

class Navbar extends Component {
render() {
    return (
        <div>
            <nav className="navbar navbar-default">
            <ul>
            <li className="brand">
                Clicky Game
            </li>
            <li className="text">
                Click an image to begin!
            </li>
            <li className="score">
                Score:{this.props.score}
            </li>
            </ul>
            </nav>
        </div>
    );
}
}

export default Navbar;