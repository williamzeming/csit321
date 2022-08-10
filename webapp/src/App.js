//页面的目录
import {
    Router,
    Route, Routes, Link, BrowserRouter
} from 'react-router-dom';
import React, {Component} from 'react';
import './App.css';
import Home from './page/Home';
import Login from './page/Login';
import Register from './page/Register';

class App extends Component {
    render() {
        return <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>} ></Route>
                    <Route path="/Login" element={<Login/>}></Route>
                    <Route path="/Register" element={<Register/>} component={Register}></Route>
                </Routes>
            </BrowserRouter>

        </div>
    }
}


export default App;
