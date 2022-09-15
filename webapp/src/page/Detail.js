import React, {Component} from 'react';
import ReactDOM from "react-dom/client";
import {default as axios} from "axios";
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Link from '@mui/material/Link';
import logo from './logo_w.png'
import "./Detail.css"
import ButtonBase from '@mui/material/ButtonBase';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Footer from './Footer';
import Map from './Map'
import key from "./key.json";
import logo1 from './logo.png'
import Star from './Star'
import Rating from "@mui/material/Rating";
const url = "http://localhost:";

class Detail extends React.Component {
    state = {
        lat: 0,
        lng: 0,
        loginState: false,
        userName: this.getCookie('fname'),
        rateValue:0,
        newValue:0
    };


    initDetailPost = () => {
        const params = {
            uid: 1
        }
        axios.post(url + "5000/initDetailPost", params).then((res) => {
            this.setState({
                lat: res.data.lat,
                lng: res.data.lng
            })
            console.log(this.state.lat)
        })
    }
    checkLogin() {
        var userID = this.getCookie("uid");
        if (userID !== "") {
            this.setState({loginState: true})
        } else {
            this.setState({loginState: false})
        }
    }

    getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i].trim();
            if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
        }
        return "";
    }
    showMap() {
        console.log(this.state.lat)
    }

    componentDidMount = () => {
        this.checkLogin();
        this.initDetailPost();

    }

    showRating= () =>{
         console.log(this.state.rateValue)
    }

    render() {
        return (
            <div>
                <Grid className={"column"} container>
                    <Grid className={"topFirstColumn"} item xs={3} md={4} lg={4}>
                        <img src={logo1} height={25} width={25} style={{paddingLeft: 10, marginBottom: 3}}
                             className={"center"}/>
                        <span className={"serif"}
                              style={{
                                  position: "relative",
                                  marginTop: 2,
                                  paddingLeft: 15,
                                  color: "white",
                                  fontSize: 30
                              }}>We Climb</span>
                    </Grid>
                    <Grid className={"topSecondColumn"} item xs={2} md={4} lg={5}
                          style={{paddingTop: 5, position: "relative"}}>
                        <Link style={{paddingRight: 20, paddingLeft: 190}} to="/" color={"white"}
                              underline="hover">Home</Link>
                        <Link style={{paddingRight: 20}} to="/" color={"white"} underline="hover">Community</Link>
                    </Grid>
                    <Grid item xs={3} md={4} lg={3}>
                        {
                            this.state.loginState ? (
                                <Stack spacing={2} direction="row" style={{paddingRight: 120}}>
                                    <Button fullWidth variant="outlined" href={"/Login"}>
                                        <div>{this.state.userName}</div>
                                    </Button>
                                    <Button fullWidth variant="outlined" href={"/Register"}>Setting</Button>
                                    <Button fullWidth variant="outlined" onClick={this.logout}
                                            href={"/"}>Logout</Button>
                                </Stack>) : (
                                <Grid style={{paddingLeft: 50, paddingRight: 10}}>
                                    <Stack spacing={2} direction="row">
                                        <Button size={"small"} fullWidth variant="outlined" href={"/Login"}>
                                            Login
                                        </Button>
                                        <Button fullWidth variant="outlined"
                                                href={"/Register"}>Register</Button>
                                    </Stack>

                                </Grid>
                            )
                        }
                    </Grid>
                </Grid>
                <Grid item md={10}>
                    NAVI
                </Grid>
                <Grid item md={10}>
                    Picture
                </Grid>
                <Grid item md={8}>
                    <Stack direction={"row"}>
                        <Stack>
                            Introduction
                        </Stack>
                        <Stack id="mountainMap">
                            <Map lat={this.state.lat} lng={this.state.lng}></Map>
                        </Stack>
                    </Stack>
                    <Stack>
                        Weather
                    </Stack>
                    <Stack>
                        Weather detail
                    </Stack>
                    <Stack>
                        Review Photos
                    </Stack>
                    <Stack direction={"row"}>
                        <Stack>
                            <span>
                                <Rating  name="rate" size={"large"} onChange={(event, newValue) => {
                                    this.setState({rateValue:newValue})}} ></Rating>
                                <br/>
                                <Button variant="contained" onClick={this.showRating}>submit</Button>
                            </span>
                        </Stack>
                        <Stack>
                            <Button fullWidth variant="contained">Write Review</Button>
                        </Stack>

                    </Stack>
                    <Stack>
                        The review
                    </Stack>
                </Grid>


                <Footer>
                </Footer>
            </div>

        )
    }
}


export default Detail;