//页面的目录
import {
    Router,
    Route, Routes
}                           from 'react-router-dom';
import React, { Component } from 'react';
import './App.css';
import Home from './page/Home';

class App extends Component {
    render(){
        return <div>
            <h1>page home</h1>
            <Home/>
        </div>
    }
}

export default App;
