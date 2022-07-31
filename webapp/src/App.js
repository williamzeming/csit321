//页面的目录
import {
    Router,
    Route, Routes, Link, BrowserRouter
} from 'react-router-dom';
import React, { Component } from 'react';
import './App.css';
import Home from './page/Home';

import Register from './page/Register';
import ReactDOM from 'react-dom'
import {Switch} from "antd";
class App extends Component {
    render(){
        return <div>
            123456
            <BrowserRouter>
                <Link to ="/Home">Home</Link>
                <Link to ="/Register">Register</Link>
                <Routes>
                    <Route exact path="/Home" element={<Home/>}></Route>
                    <Route exact path="/Register" element={<Register/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    }
}


export default App;
