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
import Detail from './page/Detail';
import Footer from './page/Footer';
class App extends Component {
    render() {
        return <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/Login" element={<Login/>}></Route>
                    <Route path="/Register" element={<Register/>} component={Register}></Route>
                    <Route path="/Detail" element={<Detail/>} component={Detail}></Route>
                    <Route path="/Footer" element={<Footer/>} component={Footer}></Route>
                </Routes>
            </BrowserRouter>

        </div>
    }
}


export default App;
