import React from 'react';
import {default as axios} from "axios";
import {
    createTheme,
    responsiveFontSizes,
    ThemeProvider,
} from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {styled} from '@mui/material/styles';
import Container from '@mui/material/Container';
import './Login.css'
import {AlertTitle, Alert, FormControl, InputLabel, MenuItem, NativeSelect} from "@mui/material";
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import * as PropTypes from "prop-types";
import {onHidden} from "web-vitals/dist/modules/lib/onHidden";
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {Option} from "antd/es/mentions";
import {Redirect} from "react-router-dom";
import {Label} from "@mui/icons-material";


const label = {inputProps: {'aria-label': 'Checkbox demo'}};
const url = "http://localhost:";

let theme = createTheme();
theme = responsiveFontSizes(theme);

function TransitionAlerts() {
    const [open, setOpen] = React.useState(true);
}

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


//create profile page to the website
class Profile extends React.Component {
    getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i].trim();
            if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
        }
        return "";
    }
    loadProfile = () => {
        var userID = this.getCookie("uid");
        const params = {
            uid: userID
        }
        axios.post(url + "5000/settingOnload", params).then((res) => {
            var date = new Date(res.data.res1[0].cusDOB);
            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            var day = date.getDate();
            console.log(day + "/" + month + "/" + year);
            document.getElementById("firstName").value = res.data.res1[0].firstName;
            document.getElementById("lastName").value = res.data.res1[0].lastName;
            document.getElementById("dob").value = day + "/" + month + "/" + year;
            document.getElementById("email").value = res.data.res1[0].email;
            document.getElementById("gender").value = res.data.res1[0].gender;
            document.getElementById("phoneNumber").value = res.data.res1[0].phoneNum;
            document.getElementById("password").value = res.data.res1[0].password;
        })
    }
    setProfile = () => {
        var userID = this.getCookie("uid");

        var firstName = document.getElementById("firstName").value;
        var lastName = document.getElementById("lastName").value;
        var cusDOB = document.getElementById("dob").value;
        var email = document.getElementById("email").value;
        var gender = document.getElementById("gender").value;
        var phoneNum = document.getElementById("phoneNumber").value;
        var password = document.getElementById("password").value;
        const params = {
            uid: userID,
            firstName: firstName,
            lastName: lastName,
            cusDOB: cusDOB,
            email: email,
            gender: gender,
            phoneNum: phoneNum,
            password: password
        }

        axios.post(url + "5000/settingUpdate", params).then((res) => {
            window.location.href = url + "3000";
        })
    }
    componentDidMount = () => {
        this.loadProfile();
    }

    render() {
        return (
            <div>
                <div className="bg"></div>
                <div className="bg bg2"></div>
                <div className="bg bg3"></div>
                <div className="content">
                    <Container maxWidth="sm" >
                        <Grid container rowSpacing={3} columnSpacing={{xs: 1, sm: 2, md: 3}}>
                            <Grid item xs={12} >
                                <ThemeProvider theme={theme}>
                                    <Typography align="center" variant="h2" theme={theme}>Profile</Typography>
                                </ThemeProvider>
                            </Grid>
                            <Grid item xs={12}>
                                <div className={"input-text2"}><span>First Name: </span>
                                    <TextField id="firstName" variant="standard" fullWidth
                                               className={"textField"}/></div>
                            </Grid>
                            <Grid item xs={12}>
                                <div className={"input-text2"}><span>Last Name: </span>
                                    <TextField id="lastName" variant="standard" fullWidth
                                               className={"textField"}/></div>
                            </Grid>
                            <Grid item xs={12}>
                                <div className={"input-text2"}><span>Date of Birth: </span>
                                    <TextField id="dob" variant="standard" fullWidth
                                               className={"textField"}/></div>
                            </Grid>
                            <Grid item xs={12}>
                                <div className={"input-text2"}><span>Email: </span>
                                    <TextField id="email" variant="standard" fullWidth
                                               className={"textField"}/></div>
                            </Grid>
                            <Grid item xs={12}>
                                <div className={"input-text2"}><span>Phone Number: </span>
                                    <TextField id="phoneNumber" variant="standard" fullWidth
                                               className={"textField"}/></div>
                            </Grid>
                            <Grid item xs={12}>
                                <div className={"input-text2"}><span>Gender: </span>
                                    <TextField id="gender" variant="standard" fullWidth
                                               className={"textField"}/></div>
                            </Grid>
                            <Grid item xs={12}>
                                <div className={"input-text2"}><span>Password: </span>
                                    <TextField id="password" variant="standard" type="password"fullWidth
                                               required={true} className={"textField"}/></div>
                            </Grid>
                            <Grid item xs={12}>
                                <Button fullWidth variant="contained" size={"large"}
                                        onClick={this.setProfile}>Confirm</Button>

                            </Grid>

                        </Grid>
                    </Container>
                </div>
            </div>

        )
    }


}

//
export default Profile;
