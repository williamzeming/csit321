import React from 'react';
import {default as axios} from "axios";
import {BrowserRouter, Route} from 'react-router-dom'
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Link from '@mui/material/Link';
import logo from './logo_w.png'
import "./Home.css"
import logo1 from './logo.jpg'




const url = "http://localhost:";

class Home extends React.Component {
    state = {
        person: null
        //loginState: "in"
    }
    // button1 = "LOGIN1";
    // button2 = "REGISTER1"
    //加载自动运行
    componentDidMount = () => {
        //this.checkLogin();

        // this.getExample()

    }

    getExample() {
        axios.get("http://localhost:5000/test").then((res) => {
            console.log(res)
            this.setState({person: res.data})
        })
    }
    // checkLogin(){
    //     if (this.state.loginState == "out"){
    //
    //     }else {
    //         document.getElementById("Button1").innerText = this.button1;
    //         document.getElementById("Button2").innerText = this.button2;
    //         //document.getElementById("Button3").innerHTML = '<Button fullWidth variant="outlined" href={"/Register"}>Register</Button>';
    //     }
    // }

    render() {
        return <div>
            <Box sx={{flexGrow: 1}} className={"backgroundIMG"}>
                <Grid>
                    <br/>
                </Grid>
                <Stack spacing={2} alignItems={"center"}>
                    <Grid container spacing={4}>
                        <Grid item xs>
                            <img src={logo} width={80} style={{paddingLeft: 10}} className={"center"}/>
                        </Grid>
                        <Grid item xs={6}>
                            <Stack spacing={2} direction="row" justifyContent={"right"} className={"center"}>
                                <Link to="/" underline="hover">Home</Link>
                                <Link to="/" underline="hover">Community</Link>
                            </Stack>
                        </Grid>
                        <Grid item xs>
                            <Stack direction="row">
                                <Stack spacing={2} direction="row" justifyContent={"left"}>
                                    <Button fullWidth variant="contained" href={"/Login"}>
                                        Login
                                    </Button>
                                    <Button fullWidth variant="outlined" href={"/Register"}>Register</Button>
                                </Stack>
                            </Stack>
                        </Grid>
                    </Grid>
                </Stack>
                <Grid>
                    <br/>
                    <br/>
                    <br/>
                    <Stack spacing={4} direction={"row"}>
                        <Stack item xs>

                        </Stack>
                        <Stack item xs={6}>
                            <h1>WELCOME</h1>
                        </Stack>
                        <Stack item xs>

                        </Stack>
                    </Stack>
                    <br/>
                    <br/>
                    <br/>

                </Grid>
            </Box>
            {/*footer*/}
            <footer>
                <Grid style={{background: "pink"}}>
                    <Grid textAlign={"center"}>
                        About us
                    </Grid>
                    <br/>
                    <Grid textAlign={"center"}>
                        Explore world with us
                    </Grid>
                    <Grid textAlign={"center"}>
                        If you would like more information about our website, you can contact us by
                        <br/>
                        phone or follow us on our social media.
                    </Grid>
                    <br/>
                    <Grid textAlign={"center"}>
                        <button>
                            About us
                        </button>

                    </Grid>
                </Grid>

                <br/>
                <br/>
                <Grid className={"backgroundBlack"}>
                    <Grid className={"backgroundBlack_firstColumn"}>
                        <img src={logo1} width={30} height={30} style={{paddingRight:10,paddingLeft:10}} />
                            We Climb
                    </Grid>
                    <Grid className={"backgroundBlack_secondColumn"}>
                        Learn More
                        <br/>
                        <br/>
                        <br/>
                        About Lift
                        <br/>
                        <br/>
                        Press Releases
                        <br/>
                        <br/>
                        Environment
                        <br/>
                        <br/>
                        Jobs
                        <br/>
                        <br/>
                        Privacy Policy
                        <br/>
                        <br/>
                        Contact Us
                    </Grid>
                    <Grid className={"backgroundBlack_thirdColumn"}>
                        Contact Us
                        <br/>
                        <br/>
                        Call us:    123-456-7890
                    </Grid>
                    <Grid className={"backgroundBlack_fourthColumn"}>
                        Social
                    </Grid>
                </Grid>
                <Grid className={"backgroundBlack_row"}>
                    <br/>
                    <br/>
                    <div className="link-top"></div>
                    @ 2022 We Climb | All Rights Reserved
                </Grid>

            </footer>
        </div>

    }
}

export default Home;