import React, {Component} from 'react';
import ReactDOM from "react-dom/client";
import {default as axios} from "axios";
import { useParams  } from "react-router-dom";
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
import TextField from '@mui/material/TextField';
import img3 from './imgM/MountKosciuszko.jpg';
const url = "http://localhost:";

class Detail extends React.Component {
    state = {
        lat: 0,
        lng: 0,
        loginState: false,
        userName: this.getCookie('fname'),
        rateValue:0
    };


    initDetailPost = () => {
        document.getElementById("mountName").innerHTML=this.getCookie("loc");
        document.getElementById("mountImage").src=require("./imgM/"+this.getCookie("loc")+".jpg");
        const params = {
            loc : this.getCookie("loc")
        }
        axios.post(url + "5000/detailOnload", params).then((res) => {
            this.setState({
                // lat: res.data.lat,
                // lng: res.data.lng
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
    logout() {
        document.cookie = "uid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        this.setState({loginState: false})
        document.location.reload();
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
    showURL= () => {
        let location = this.getCookie("loc")
        console.log(location);
    }
    componentDidMount = () => {
        this.checkLogin();
        this.initDetailPost();
    }

    finish= () =>{
        var userID = this.getCookie("uid");
        if (userID == ""){
            alert("Please login")
        }
        var text=document.getElementById("text").value;
        console.log(this.state.rateValue+text)
    }
    render() {
        return (
            <div>
                <Button onClick={this.showURL}>show url</Button>
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

                <Grid container className={"container"}>
                    <Grid item md={1} ></Grid>
                    <Grid item md={10} className={"circle"}>
                        <img id="mountImage" src={require("./imgM/mountKeira.jpg")} className={"image"} title={"Mount Keira"} style={{borderRadius:20}}/>
                        <span id="mountName" style={{color:"white",fontSize:80,left:290,top:100,position:"absolute"}}>Mount Keira</span>
                        <span style={{fontSize:100,left:290,top:150,position:"absolute"}}>
                            <Rating id="showRating" size={"large"} value={4} readOnly={true}></Rating>
                        </span>
                    </Grid>
                    <Grid item md={1} ></Grid>


                    <Grid container md={12}><br/></Grid>

                <Grid container >
                    <Grid item md={1} ></Grid>
                    <Grid item md={7}className={"circle"}>
                        <Stack direction="column">
                            <Stack style={{fontSize:20}} >
                            Try this 6.8km loop trail near Mount Keira, New South Wales.<br/>
                            Generally considered a moderately challenging route, it takes an average of 2h 20min to complete.
                            </Stack>
                            <br/>


                            <Stack className={"temp"} style={{fontSize:25,fontWeight:500}}>
                             Weather
                            </Stack>
                            <br/>
                            <Stack className={"temp"}>
                             Weather content
                            </Stack>
                            <br/>
                            <Stack className={"temp"} style={{fontSize:25,fontWeight:500}}>
                                Reviews History
                            </Stack>
                            <br/>
                            <Stack>
                                history
                            </Stack>
                            <br/>
                            <Stack className={"temp"} style={{fontSize:25,fontWeight:500}}>
                                Your Review
                            </Stack>
                            <br/>
                            <Stack>
                                <Rating  name="rate" size={"large"} onChange={(event, newValue) => {
                                    this.setState({rateValue:newValue})}} ></Rating>

                            </Stack>
                            <br/>
                            <Stack>
                                <Stack spacing={2} direction="row" style={{paddingRight: 120}}>
                                    <TextField id="text" label="Please write your comment" variant="outlined" fullWidth multiline maxRows={5}></TextField>
                                    <Button  variant="outlined" onClick={this.finish}
                                           >Finish</Button>
                                </Stack>

                            </Stack>
                        </Stack>


                    </Grid>

                    <Grid item md={3}  className={"circle1"}>
                            <Map lat={this.state.lat} lng={this.state.lng}></Map>
                    </Grid>
                    <Grid item md={1} ></Grid>
                </Grid>



                </Grid>
                <br/>
                <Footer>
                </Footer>
            </div>

        )
    }
}


export default Detail;