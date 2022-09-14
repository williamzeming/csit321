import React from 'react';
import {default as axios} from "axios";
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
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import climb from './climbPg.jpg';
import img1 from './imgM/Ironstone Mountain.jpg';
import img2 from './imgM/Mother Cummings Peak.jpg';
import img3 from './imgM/MountKosciuszko.jpg';
import climbMt from './climb2.jpeg';
import logo1 from './logo.png'

import {ImageList, ImageListItem, ImageListItemBar, InputBase} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Footer from './Footer';
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
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%'
});

const bull = (
    <Box
        component="span"
        sx={{display: 'inline-block', mx: '2px', transform: 'scale(0.8)'}}
    >
        •
    </Box>
);
//images list
var itemData = [
    {
        img: img1,
        title: 'Bouddi, Australia',
        name: 'Bouddi National Park',
    },
    {
        img: img2,
        title: 'Tasmanian, Australia',
        name: 'Cradle Mountain',
    },
    {
        img: img3,
        title: 'Alpine, Australia',
        name: 'Mount Kosciuszko',
    }
]

class Home extends React.Component {
    state = {
        person: null,
        loginState: false,
        userName: this.getCookie('fname')
    }

    //加载自动运行
    componentDidMount = () => {
        this.checkLogin();
        this.initHomePost();


    }

    initHomePost = () => {
        const params = {
            uid: this.getCookie("uid")
        }
        axios.post(url + "5000/initHomePost", params).then((res) => {
            var mountains = res.data.mountains
            //itemData[1].img = "./imgM/"+mountains.mountain1.mountain+".jpg"
            // itemData[1].img =require("./imgM/MountKosciuszko.jpg")
            // console.log(itemData)
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

    logout() {
        document.cookie = "uid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        this.setState({loginState: false})
        document.location.reload();
    }

    render() {
        return (<div>
                <Grid className={"topColumn"} container>
                    <Grid className={"topFirstColumn"} item xs={3} md={4} lg={4}>
                        <Grid className={"topFirstColumnRow"}>
                            <span>
                                 <img src={logo1} height={60} width={60} style={{paddingLeft: 10}}
                                      className={"center"}/>
                            </span>
                            <span className={"serif"} style={{
                                position: "absolute",
                                marginTop: 5,
                                paddingLeft: 15,
                                color: "white",
                                fontSize: 60
                            }}>We Climb</span>
                            <Stack spacing={1}>
                                <Grid style={{paddingTop: 30}}>
                                    <span className={"headFont"}>Explore new places</span>
                                </Grid>
                                <Grid>
                                    <span style={{fontSize: 30, paddingLeft: 50, color: "white", paddingTop: 80}}>with We Climb</span>
                                </Grid>
                                <Grid style={{paddingLeft: 50, paddingTop: 30}}>
                                    <Button variant="contained" href={"/Login"}>GET STARTED</Button>
                                </Grid>
                            </Stack>
                        </Grid>

                    </Grid>
                    <Grid className={"topSecondColumn"} item xs={2} md={4} lg={5}
                          style={{paddingTop: 200, position: "relative"}}>
                        <Grid style={{paddingLeft: 70, position: "absolute", alignContent: "center"}}>
                            <Paper
                                component="form"
                                sx={{p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, height: 50}}
                            >
                                <InputBase
                                    sx={{ml: 1, flex: 1}}
                                    placeholder="Search"
                                />
                                <IconButton type="button" sx={{p: '10px'}} aria-label="search">
                                    <SearchIcon/>
                                </IconButton>
                            </Paper>
                        </Grid>

                    </Grid>
                    <Grid item xs={3} md={4} lg={3}>
                        <Stack direction="row" spacing={2}>
                            <Stack spacing={2} direction="row" style={{paddingTop: 7}}>
                                <Link style={{paddingRight: 20}} to="/" underline="hover">Home</Link>
                                <Link style={{paddingRight: 20}} to="/" underline="hover">Community</Link>
                            </Stack>
                            {
                                this.state.loginState ? (
                                    <Stack spacing={2} direction="row" style={{paddingRight: 120}}>
                                        <Button fullWidth variant="contained" href={"/Login"}>
                                            <div>{this.state.userName}</div>
                                        </Button>
                                        <Button fullWidth variant="outlined" href={"/Register"}>Setting</Button>
                                        <Button fullWidth variant="outlined" onClick={this.logout}
                                                href={"/"}>Logout</Button>
                                    </Stack>) : (
                                    <Grid style={{paddingRight: 10}}>
                                        <Stack spacing={2} direction="row">

                                            <Button fullWidth variant="contained" href={"/Login"}>
                                                Login
                                            </Button>
                                            <Button fullWidth variant="outlined"
                                                    href={"/Register"}>Register</Button>


                                        </Stack>
                                    </Grid>


                                )
                            }
                        </Stack>
                    </Grid>
                </Grid>
                {/*main content*/}
                <Grid container>
                    <Grid item xs={2}/>
                    <Grid item xs={8}>
                        <Grid item my={1}/>
                        <hr/>
                        {/*part1 sign up*/}
                        <Grid container my={2} spacing={5}>
                            <Grid item xs={1}/>
                            <Grid item xs={6} style={{display: "flex"}}>
                                <ButtonBase sx={{width: 400, height: 300}}>
                                    <Img alt="climb" src={climb}/>
                                </ButtonBase>
                            </Grid>
                            {
                                this.state.loginState ? (
                                    <Grid item xs={4}>
                                        <p className={"text1"}>Build your own trip?</p>
                                        <Button variant="contained">Start</Button>
                                    </Grid>) : (
                                    <Grid item xs={4}>
                                        <p className={"text1"}>Build your own trip?</p>
                                        <Button variant="contained">Sign Up</Button>
                                    </Grid>
                                )
                            }
                            <Grid item xs={1}/>
                        </Grid>
                        <hr/>
                        {/*part2 instruction*/}
                        <Grid container my={2}>
                            <Grid item xs={2}/>
                            <Grid container xs={12} md={9} spacing={4}>
                                <Grid item xs={4}>
                                    <Card>
                                        <CardContent>
                                            <Typography variant="h5" component="div">
                                                Detailed Guide
                                            </Typography><br/>
                                            <Typography variant="body2">
                                                We provide detailed routes,you can plan your route according to the
                                                guidelines.
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={4} md={4}>
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
                                <Grid item xs={4}>
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
                            <p className={"Text"} align={"center"}>About us</p>
                            <p className={"text1"} align={"center"}>Have no idea for climbing?</p><br/>
                            <Grid container spacing={3}>
                                <Grid item xs={1}/>
                                <Grid item xs={10}>
                                    <ImageList cols={3} gap={8}>
                                        {itemData.map((item) => (
                                            <ImageListItem key={item.img}>
                                                {/*<img src={`${item.img}?w=248&fit=crop&auto=format`}*/}
                                                {/*     srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}*/}
                                                {/*     alt={item.title}*/}
                                                {/*     loading="lazy"*/}
                                                {/*/>*/}
                                                < img src={item.img} alt={item.title} loading="lazy"/>
                                                <ImageListItemBar align={"center"}
                                                                  title={item.title}
                                                                  subtitle={item.name}
                                                />
                                            </ImageListItem>
                                        ))}
                                    </ImageList>
                                </Grid>
                                <Grid item xs={1}/>
                            </Grid>
                        </Grid>
                        <hr/>
                        {/*part4 customer review*/}
                        <Grid container my={2} spacing={5}>
                            <Grid item xs={1}/>
                            <Grid item xs={4}>
                                <p className={"Text"}>What they say</p>
                                <p className={"text1"}>Customer Reviews</p>
                                <p className={"text2"}>We encourage each customer to leave review about their climbing
                                    journey and what they would like to suggest to other climbers.</p>
                                <Button variant="contained">All Reviews</Button>
                            </Grid>
                            <Grid item xs={6}>
                                <ButtonBase sx={{width: 400, height: 320}}>
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
                <Grid class={"botton"}>
                    <Grid style={{paddingTop: 50}}>
                        <br/>

                        <br/>
                        <Grid textAlign={"center"} style={{fontSize: 20, color: "white"}}>
                            Explore world with us
                        </Grid>
                        <br/>
                        <Grid textAlign={"center"} style={{color: "white"}}>
                            If you would like more information about our website, you can contact us by
                            <br/>
                            phone or follow us on our social media.
                        </Grid>
                        <br/>
                        <Grid textAlign={"center"}>
                            <Button variant="contained" href={"/Login"}>
                                About us
                            </Button>
                        </Grid>
                        <br/>
                    </Grid>
                </Grid>
                {/*footer*/}
               <Footer>

               </Footer>
            </div>
        );
    };
}

export default Home;