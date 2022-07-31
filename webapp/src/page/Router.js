//引入react jsx写法的必须
import React from 'react';
//引入需要用到的页面组件
import Home from '/Home';
import Register from '/Register';
//引入一些模块
import {BrowserRouter, BrowserRouter as Router, Link, Route} from "react-router-dom";
import {Switch} from "antd";

function router(){
    return (
        <BrowserRouter>
            <Link to ="/Home">Home</Link>
            <Link to ="/Register">Register</Link>
            <Switch>
                <Route path="/Home" exact component={Home}></Route>
                <Route path="/Register" exact component={Register}></Route>
            </Switch>
        </BrowserRouter>);
}

export default router;