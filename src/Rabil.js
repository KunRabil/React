import React from "react";
import App from "./App";
import {
    Link
} from "react-router-dom";
export default class Rabil extends React.Component{
    render() {
        return(
            <div>
                <Link to="/page2">Go Page2</Link>
                <span>Rabil Hello</span>
            </div>
        );
    }

}
