import "./Activities.css";
import React, {useState} from 'react';
import logo1 from "./logo.png";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Footer from './Footer'
import {createTheme, responsiveFontSizes, ThemeProvider} from "@mui/material/styles";
import {default as axios} from "axios";
import Avatar from "@mui/material/Avatar";

const url = "http://localhost:";
let theme = createTheme();
theme = responsiveFontSizes(theme);
/*
function BasicDatePicker() {
    const [value, setValue] = React.useState<Dayjs | null>(null);
} */
function ColorTab() {
    const [value, setValue] = React.useState('activities');
}

class Activities extends React.Component {
    state = {
        show:false
    };
    componentDidMount = () => {
        this.initActivityOnload();
    }
    getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i].trim();
            if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
        }
        return "";
    }
    initActivityOnload= () =>{
        var userID = this.getCookie("uid");
        const params = {
            uid: userID
        }

        axios.post(url + "5000/activityOnload", params).then((res) => {
            //have record

            if(res.data.res1.status=="none"){
                console.log("123")
                this.setState({
                    show:false
                })

            }else {
                this.setState({
                    show:true
                })
                var startDate=new Date(res.data.res1[0].startDate)
                var startMonth=startDate.getMonth()+1

                var endDate=new Date(res.data.res1[0].endDate)
                var endMonth=endDate.getMonth()+1
                document.getElementById("name").value=res.data.res1[0].userName
                document.getElementById("emergency contact").value=res.data.res1[0].emergencyContact
                document.getElementById("climbing location").value=res.data.res1[0].location
                document.getElementById("start date").outerText=startDate.getFullYear()+"/"+startMonth+"/"+startDate.getDate()
                document.getElementById("end date").outerText=endDate.getFullYear()+"/"+endMonth+"/"+endDate.getDate()
                document.getElementById("note").value=res.data.res1[0].notes

            }




        })

    }

    checkIn= () =>{
        this.setState({
            show:true
        })
        var userID = this.getCookie("uid");
        var name = document.getElementById("name").value;
        var eContact = document.getElementById("emergency contact").value;
        var location = document.getElementById("climbing location").value;
        var startDate = document.getElementById("start date").value;
        var endDate = document.getElementById("end date").value;
        var note = document.getElementById("note").value;
        const params = {
            uid: userID,
            userName:name,
            emergencyContact:eContact,
            location:location,
            startDate:startDate,
            endDate:endDate,
            notes:note
        }

        axios.post(url + "5000/setActivity", params).then((res) => {

            console.log("115"+res.data.res1)

        })

    }
    checkOut= () =>{
        var userID = this.getCookie("uid");
        this.setState({
            show:false
        })
        const params = {
            uid: userID
        }
        axios.post(url + "5000/finishActivity", params).then((res) => {
            if(res.data.res1==="update success"){
                window.location.reload();
            }
            console.log(res.data.res1)
        })
    }

//show profile
    showProfile(){
        document.getElementById("profile").style.display="block";
        document.getElementById("activities").style.display="none";
    }
//show activities
    showActivities(){
        document.getElementById("profile").style.display="none";
        document.getElementById("activities").style.display="block";
    }

    render() {
        return (<div className={"sty"}>
                {/*navigation bar  ys={1}*/}
            <Grid container className={"navBar"} >
                <Grid item xs={3}>
                    <Grid>
                        <span>
                             <img src={logo1} height={45} width={45} style={{paddingLeft: 25}}
                                  className={"center"}/>
                        </span>
                        <span className={"serif"} style={{
                            position: "absolute",
                            marginTop: 15,
                            paddingLeft: 15,
                            color: "white",
                            fontSize: 25
                        }}>We Climb</span>
                    </Grid>
                </Grid>
                <Grid item xs={6} className={"navBar1"}>
                    <Button style={{paddingRight: 20,marginTop: 10, color:"white"}} to="/" underline="hover">Home</Button>
                    <Button style={{paddingRight: 20,marginTop: 10, color:"white"}} to="/" underline="hover">Community</Button>
                    <Button style={{paddingRight: 20,marginTop: 10, color:"white"}} to="/" underline="hover">Setting</Button>
                </Grid>
                <Grid item xs={3}>
                    <Button style={{paddingRight: 20,marginTop: 10, color:"white"}} to="/" underline="hover">Help</Button>
                </Grid>
            </Grid><br/>
     {/*tab bar ys={2} sx={{ width: '30%' }}*/}
                <Grid className={"row1"} container >
                    <Box  className={"tab"}>
                        <Tabs
                            value={ColorTab.value}
                            onChange={(event: React.SyntheticEvent, newValue: string) => {
                                ColorTab.setValue(newValue);}}
                            textColor="secondary"
                            indicatorColor="secondary"
                            aria-label="secondary tabs example"
                        >
                            <Button value="home" style={{color:"black",marginTop:5}} href={"/"} >Home</Button>
                            <Button value="profile" style={{color:"black",marginTop:5}} onClick={this.showProfile}>Profile</Button>
                            <Button value="activities" style={{color:"black",marginTop:5}} onClick={this.showActivities}>Activities</Button>
                        </Tabs>
                    </Box>
                </Grid><br/>
                <hr/><br/>
   {/*main (activities)*/}
                <div id="activities">
                <Grid container>
                <hr/>
  {/*search bar xs={2} */}
                {/*  <Grid container xs={2} className={"search"}>
                    <Paper
                        component="form"
                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                    >
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search activities..."
                        inputProps={{ 'aria-label': 'search activities ' }}
                    />
                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                    </Paper>
                </Grid> <hr/><br/> */}
   {/*main ys={4}*/}<br/>
                <Grid className={"row2"} container >
                    <Grid item xs={1} />
                    <Grid item xs={3}>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '25ch' },
                            }}
                            autoComplete="off"
                        >
                        <div>
                            <div className={"input-text"}>Name:</div>
                            <ThemeProvider theme={theme}>
                                <TextField required={true} fullWidth id="name" variant="standard"/>
                            </ThemeProvider>
                        </div><br/>
                            <div>
                                <div className={"input-text"}>Emergency Contact:</div>
                                <ThemeProvider theme={theme}>
                                    <TextField required={true} fullWidth id="emergency contact" variant="standard"/>
                                </ThemeProvider></div><br/>
                            <div>
                                <div className={"input-text"}>Climbing Location:</div>
                                <ThemeProvider theme={theme}>
                                    <TextField required={true} fullWidth id="climbing location" variant="standard"/>
                                </ThemeProvider>
                            </div>
                        </Box><br/>
                        <div>
                            <div className={"input-text"}>Start Date: </div><br/>
                            <TextField style={{width:230}} InputLabelProps={{
                                shrink: true,
                            }} required={true} id="start date"
                                       variant="standard" type="date"/>
                        </div><br/>
                        <div>
                            <div className={"input-text"}>End Date: </div><br/>
                            <TextField style={{width:230}} InputLabelProps={{
                                shrink: true,
                            }} required={true} id="end date"
                                       variant="standard" type="date"/>
                        </div><br/>
                        <div>
                            <div className={"input-text"}>Notes: </div><br/>
                            <TextField
                            id="note"
                            multiline
                            rows={4}
                        />
                        </div><br/>
                        { this.state.show?(
                            <Button variant="contained" onClick={this.checkOut}>Check Out</Button>
                            ):(
                            <Button variant="contained" onClick={this.checkIn}>Check In</Button>
                        )

                        }

                    </Grid>
                    <Grid item xs={1}/>

                    <Grid item xs={7} className={"mapImage"}/>
                </Grid>
                </Grid><br/><br/>
                </div>

   {/*main (profile)*/}
                <br/><br/>
                <div id="profile" style={{display:"none"}}>
                    <Grid container>
                        <Grid item xs={2}/>
                        <Grid item xs={8} className={"mainContent"} >
                              <Box className={"bgImg"}>
                        <Grid item ys={3} />
                            <Grid item ys={8} >
                                <Grid item ys={2} >
                                <Avatar src={logo1} className={"avatar"} sx={{ width: 56, height: 56 }}/>
                                <div className={"profile-head"}>
   {/*Profile change to username*/}
                                    <Typography variant="h5" style={{fontWeight:"medium", color:"white"}}>Profile</Typography>
                                    <i className={"profile-text"}>Update your personal details. </i>
                                </div>
                                </Grid><br/>
                                <Grid ys={10} >
                                <Grid item  className={"input"}>
                                    <label>
                                        <div className={"input-text2"}><span>Username: </span>
                                        <TextField id="username" variant="standard" className={"textField"}/></div>
                                    </label><br/>
                                    <label>
                                        <div className={"input-text2"}><span>Phone Number:</span>
                                        <TextField id="phone" variant="standard" className={"textField"}/></div>
                                    </label><br/>
                                    <label>
                                        <div className={"input-text2"}><span>Address:</span>
                                        <TextField id="address" variant="standard" className={"textField"}/></div>
                                    </label><br/>
                                    <label>
                                        <div className={"input-text2"}><span>Email:</span>
                                        <TextField id="email" variant="standard" className={"textField"}/></div>
                                    </label><br/>
                                    <label>
                                        <div className={"input-text2"}><span>New Password:</span>
                                        <TextField id="password" variant="standard" type="password" required={true} className={"textField"}/></div>
                                    </label><br/><br/>

            {/*  footer ys={3}*/}
                <Footer />
                                </Grid>
                                    <Box style={{textAlign:"center"}}>
                                    <Button variant="contained" >SAVE</Button>
                                    </Box><br/>
                                </Grid>

                            </Grid>
                             </Box>
                        </Grid>
                        <Grid item xs={2}/>
                    </Grid>
                </div><br/><br/><br/>

{/*footer*/}
                <br/><br/>
                <Footer/>
            </div>
        );
    };
}

export default Activities;