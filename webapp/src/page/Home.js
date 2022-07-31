import React from 'react';
import {default as axios} from "axios";
import {BrowserRouter, Link, Route} from 'react-router-dom'

class Home extends React.Component {
    state = {
        person: null
    }
    加载自动运行
    componentDidMount = () => {
        // this.getExample()
    }

    getExample() {
        axios.get("http://localhost:5000/test").then((res) => {
            console.log(res)
            this.setState({person: res.data})
        })
    }

    render() {
        return <div>
            <Link to="/Login">Login</Link>
            <br/>
            <Link to="/Register">Register</Link>
        </div>

    }
}

export default Home;