import React from 'react';
import {default as axios} from "axios";
import {Link} from "react-router-dom";

class Login extends React.Component {

    render() {
        return (
            <div>Login
                <Link to="/">Home</Link>
            </div>

        )
    }
}

export default Login;