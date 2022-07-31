import React from 'react';
import {default as axios} from "axios";
import {withRouter} from "react-router";
import {BrowserRouter, Link, Route} from 'react-router-dom'
import {Button, DatePicker, Switch, version} from "antd";
import Register from "./Register";
//import "antd/dist/antd.css";
//import "../index.css";
class Home extends React.Component {
    state = {
        person:null
    }
    加载自动运行
    componentDidMount = () => {
        // this.getExample()
    }
    getExample(){
        axios.get("http://localhost:5000/test").then((res) => {
            console.log(res)
            this.setState({person:res.data})
        })
    }

    render() {
        return <div>
                <h1>Home</h1>
        </div>

    }
}

export default Home;