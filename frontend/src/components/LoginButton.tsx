import React from "react";
import { Link } from "react-router-dom";

class Button extends React.Component {
    constructor(props:any) {
        super(props);
    }

    render() {
        return (
            <button className="Button Login-button" >
                <Link to="/login">Login</Link>
            </button>
        )
    }
}

export default Button;