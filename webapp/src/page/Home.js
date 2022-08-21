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
import ButtonBase from '@mui/material/ButtonBase';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import climb from './climbPg.jpg';
import img1 from './bouddi.jpg';
import img2 from './cradleM.jpg';
import img3 from './mountKeira.jpg';
import climbMt from './climb2.jpeg';
import logo1 from './logo.jpg'

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const url = "http://localhost:";

//climbPg image style
const Img = styled('img')({
    margin:'auto',
    display:'block',
    maxWidth:'100%',
    maxHeight: '100%'
});

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);


class Home extends React.Component {
    state = {
        person: null,
        loginState: false
    }
    // button1 = "LOGIN1";
    // button2 = "REGISTER1"
    //加载自动运行
    componentDidMount = () => {
        this.checkLogin();

        // this.getExample()

    }

    getExample() {
        axios.get("http://localhost:5000/test").then((res) => {
            console.log(res)
            this.setState({person: res.data})
        })
    }
//className={"backgroundIMG"}

    checkLogin(){
        var userID = this.getCookie("uid");
        if (userID !== ""){
            this.setState({loginState: true})
        }else {
            this.setState({loginState: false})
        }
    }
    getCookie(cname) {
        var name = cname + "=";
        var ca   = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i].trim();
            if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
        }
        return "";
    }

    render() {
        return( <div >
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
                                {
                                    this.state.loginState ? (
                                        <Stack spacing={2} direction="row" justifyContent={"left"}>
                                            <Button fullWidth variant="contained" href={"/Login"}>
                                                userName
                                            </Button>
                                            <Button fullWidth variant="outlined" href={"/Register"}>Setting</Button>
                                        </Stack>) : (
                                        <Stack spacing={2} direction="row" justifyContent={"left"}>
                                            <Button fullWidth variant="contained" href={"/Login"}>
                                                Login
                                            </Button>
                                            <Button fullWidth variant="outlined" href={"/Register"}>Register</Button>
                                        </Stack>
                                    )
                                }


                            </Stack>
                        </Grid>
                    </Grid>
                </Stack>
                <Grid>
                    <br/>
                    <br/>
                    <br/>
                    <Stack spacing={4} direction={"row"}>

                    </Stack>
                    <br/>
                    <br/>
                    <br/>

                </Grid>
            </Box>
                <hr/>
            {/*main content*/}
            <Grid container>
                <Grid item xs={2}/>
                <Grid item xs={8}>
                    <Grid item my={1}/><hr/>
                    {/*part1 sign up*/}
                    <Grid container my={3} spacing={4}>
                        <Grid item xs={1}/>
                        <Grid item xs={4}>
                            <ButtonBase sx={{width:400, height:320}}>
                                <Img alt="climb" src={climb}/>
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={6}>
                           <p class={"text1"}>Build your own trip?</p>
                            <Button variant="contained">Sign Up</Button>
                        </Grid>
                        <Grid item xs={1}/>
                    </Grid>
                    <hr/>
                    {/*part2 instruction*/}
                    <Grid container my={2}>
                        <Grid item xs={2}/>
                        <Grid container xs={9} spacing={4}>
                            <Grid item xs={3}>
                                <Card>
                                    <CardContent>
                                        <Typography variant="h5" component="div">
                                            Detailed Guide
                                        </Typography><br/>
                                        <Typography variant="body2">
                                            We provide detailed routes,you can plan your route according to the guidelines.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={3}>
                                <Card>
                                    <CardContent>
                                        <Typography variant="h5" component="div">
                                            Transport
                                        </Typography><br/>
                                        <Typography variant="body2">
                                            Choose a more suitable transportation based on the route of Google Maps.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={3}>
                                <Card>
                                    <CardContent>
                                        <Typography variant="h5" component="div">
                                                Camp Fire
                                        </Typography><br/>
                                        <Typography variant="body2">
                                            Climbers can organize camp fire in permitted areas.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                        <Grid item xs={2}/>
                    </Grid>
                    <hr/>
                    {/*part3 mountain images*/}
                    <Grid item my={3}>
                        <p class={"smText"} align={"center"}>About us</p>
                        <p class={"text1"} align={"center"}>Have no idea for climbing?</p><br/>
                        <Grid container spacing={1}>
                        <Grid item xs={4}>
                            <ButtonBase sx={{width:300, height:300}}>
                                <Img alt="img1" src={img1}/>
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={4}>
                            <ButtonBase sx={{width:300, height:300}}>
                                <Img alt="img2" src={img2}/>
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={4}>
                            <ButtonBase sx={{width:300, height:300}}>
                                <Img alt="img3" src={img3}/>
                            </ButtonBase>
                        </Grid>
                        </Grid>
                    </Grid>
                    <hr/>
                    {/*part4 customer review*/}
                    <Grid container my={2} spacing={5}>
                        <Grid item xs={1}/>
                        <Grid item xs={4}>
                            <p class={"smText"}>What they say</p>
                            <p class={"text1"}>Customer Reviews</p>
                            <p class={"text2"}>We encourage each customer to leave review about their climbing journey and what they would like to suggest to other climbers.</p>
                            <Button variant="contained">All Reviews</Button>
                        </Grid>
                        <Grid item xs={6}>
                            <ButtonBase sx={{width:400, height:320}}>
                                <Img alt="climbMt" src={climbMt}/>
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={1}/>
                    </Grid>
                    <hr/>
                    <Grid item my={1}/>
                </Grid>
                <Grid item xs={2}/>
            </Grid>
                <hr/>
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
                        <img src={logo1} width={30} height={30} style={{paddingRight: 10, paddingLeft: 10}}/>
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
                        Call us: 123-456-7890
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
        );
    };
}

export default Home;