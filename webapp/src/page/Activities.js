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
import Map from "./Map";

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
//create activity page for our website
class Activities extends React.Component {
    state = {
        show:false,
        cLat:-34.40301321337629,
        cLon:150.87876199637873,

    };


    //get parameter from cookie
    getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i].trim();
            if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
        }
        return "";
    }
    //load the initial information of the page according to whether user have activity or not
    initActivityOnload= () =>{
        var userID = this.getCookie("uid");
        const params = {
            uid: userID
        }

        axios.post(url + "5000/activityOnload", params).then((res) => {
            //have record

            if(res.data.res1.status=="none"){
                console.log("noneActivity")
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
    //user submit the plan of climbing (store the activity info to the backend)
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
    //check out the plan (user finish the climb activity) backend will update the plan info
    checkOut= () =>{
        var userID = this.getCookie("uid");
        var name = document.getElementById("name").value;
        var eContact = document.getElementById("emergency contact").value;
        var location = document.getElementById("climbing location").value;
        var startDate = document.getElementById("start date").value;
        var endDate = document.getElementById("end date").value;
        this.setState({
            show:false
        })
        const params = {
            uid: userID,
            userName:name,
            emergencyContact:eContact,
            location:location,
            startDate:startDate,
            endDate:endDate,
        }
        axios.post(url + "5000/finishActivity", params).then((res) => {
            if(res.data.res1==="update success"){
                window.location.reload();
            }
            console.log(res.data.res1)
        })
    }
//show profile Navigation Bar
    showProfile(){
        document.getElementById("profile").style.display="block";
        document.getElementById("activities").style.display="none";
    }
//show activities Navigation Bar
    showActivities(){
        document.getElementById("profile").style.display="none";
        document.getElementById("activities").style.display="block";
    }
    //get Longitude and latitude of the location according to the info from the backend
    getLocation= () =>{
        var getLoc = document.getElementById("climbing location").value;
        console.log(getLoc)
        const params = {
            loc:getLoc
        }
        axios.post(url + "5000/getLoc", params).then((res) =>{
            console.log(res.data.res1[0].Latitude);
            this.setState({
                cLat: parseFloat(res.data.res1[0].Latitude),
                cLon: parseFloat(res.data.res1[0].Longitude)
            });
        })
    }
    //Loading automatically runs after page rendering is complete
    componentDidMount = () => {
        this.initActivityOnload();
        this.getLocation();
    }
    //layout and the element of this page
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
                    <Button style={{paddingRight: 20,marginTop: 10, color:"white"}} href={"/"} underline="hover">Home</Button>
                    <Button style={{paddingRight: 20,marginTop: 10, color:"white"}} href={"/Profile"} underline="hover">Setting</Button>
                </Grid>
                <Grid item xs={3}>
                    <Button style={{paddingRight: 20,marginTop: 10, color:"white"}} href={"https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"} underline="hover">Help</Button>
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
                            <Button value="profile" style={{color:"black",marginTop:5}} href={"/PROFILE"}>Profile</Button>
                            <Button value="activities" style={{color:"black",marginTop:5}} onClick={this.showActivities}>Activities</Button>
                        </Tabs>
                    </Box>
                </Grid><br/><br/><br/>
                <hr/>
   {/*main (activities)*/}
                <div id="activities">
                <Grid container>
                <hr/><br/>
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
                                <div className={"input-text"}>Climbing Location:<Button onClick={this.getLocation}>Show Map</Button></div>
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

                    <Grid item xs={7}>
                        <div>
                            <Map lat={this.state.cLat} lng={this.state.cLon}></Map>
                            <br/>
                        </div>
                    </Grid>
                </Grid>
                </Grid><br/><br/>
                </div>


{/*footer*/}
                <br/><br/>
                <Footer/>
            </div>
        );
    };
}

export default Activities;