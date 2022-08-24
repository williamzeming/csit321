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
import {AlertTitle,Alert, FormControl, InputLabel, MenuItem, NativeSelect} from "@mui/material";
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import * as PropTypes from "prop-types";
import {onHidden} from "web-vitals/dist/modules/lib/onHidden";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {Option} from "antd/es/mentions";
import {Redirect} from "react-router-dom";


const label = {inputProps: {'aria-label': 'Checkbox demo'}};
const url = "http://localhost:";

let theme = createTheme();
theme = responsiveFontSizes(theme);

function TransitionAlerts() {
    const [open, setOpen] = React.useState(true);}

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));



class Register extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showElem:false,
            showSub:false,
            showEmail:false
        };
        this.checkPw= this.checkPw.bind(this);
        this.checkSb= this.checkSb.bind(this);
    }

    checkPw() {
        var pw1 = document.getElementById("first-pd").value;
        var pw2 = document.getElementById("second-pd").value;
        if(pw1==pw2){
            this.setState({showElem: false})
        }else{
            this.setState({showElem: true})
        }
    }

    checkSb(){
        var lastName = document.getElementById("last-name").value;
        var firstName = document.getElementById("first-name").value;
        var firstPd = document.getElementById("first-pd").value;
        var secondPd = document.getElementById("second-pd").value;
        var birth = document.getElementById("birth").value;
        var email = document.getElementById("email").value;
        var phoneNumber = document.getElementById("phone-number").value;
        var gender = document.getElementById("gender");
        var index = gender.selectedIndex;
        var value = gender.options[index].value;
        var text = gender.options[index].text;
        var temp ="default";
        // console.log(text,lastName,firstName,firstPd,secondPd,birth,phoneNumber,email);

        if(lastName==""||firstName==""||firstPd==""||secondPd==""||birth==""||email==""||phoneNumber==""||value==temp){
            this.setState({showSub: true})

            // window.open(url+"3000/Login")
        }else{
            this.setState({showSub: false})
            const params = {
                lastName: lastName,
                firstName: firstName,
                firstPd: firstPd,
                birth: birth,
                email: email,
                phoneNumber: phoneNumber,
                gender: text
            }
            axios.post(url + "5000/register", params).then((res) => {
                if(res.data.error==="already exists"){
                    console.log(res.data.error)
                    this.setState({showEmail: true})
                }else{
                    this.setState({showEmail: false})
                    window.open(url+"3000/Login")
                }


            })
        }

    }

    render() {
        return (
            <div>
                <div className="bg"></div>
                <div className="bg bg2"></div>
                <div className="bg bg3"></div>
                <div className="content">
                    <Container maxWidth="sm">
                        <Grid container rowSpacing={3} columnSpacing={{xs: 1, sm: 2, md: 3}}>
                            <Grid item xs={12}>
                                <ThemeProvider theme={theme}>
                                    <Typography align="center" variant="h2" theme={theme}>Register</Typography>
                                </ThemeProvider>
                            </Grid>
                            <Grid item xs={12}>
                                <ThemeProvider theme={theme} >
                                    <TextField  required={true}  fullWidth id="last-name" label="Please input your last name" variant="standard"/>
                                </ThemeProvider>
                            </Grid>
                            <Grid item xs={12}>
                                <ThemeProvider theme={theme}>
                                    <TextField  required={true}  fullWidth id="first-name" label="Please input your first name" variant="standard"/>
                                </ThemeProvider>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    id="first-pd"
                                    label=" Please input your Password"
                                    type="password"
                                    variant="standard"
                                    required={true}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Stack spacing={2} direction="row">
                                    <TextField
                                        fullWidth
                                        id="second-pd"
                                        label="Please confirm your Password"
                                        type="password"
                                        variant="standard"
                                        required={true}
                                        onBlur={this.checkPw}
                                    />
                                </Stack>
                            </Grid>
                            <Grid item xs={12}>
                                {
                                    this.state.showElem?(
                                        <Alert severity="error" >
                                            Password does not match!
                                        </Alert>

                                    ):null
                                }
                            </Grid>
                            <Grid item xs={12}>
                                <TextField  InputLabelProps={{
                                    shrink: true,
                                }}required={true}  fullWidth id="birth" label="Please input your date of birth" variant="standard" type="date"/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField  required={true}  fullWidth id="email" label="Please input your email" variant="standard"/>
                            </Grid>
                            <Grid item xs={12}>
                                {
                                    this.state.showEmail?(
                                        <Alert severity="error" >
                                            This email has already been registered!
                                        </Alert>
                                    ):null
                                }
                            </Grid>
                            <Grid item xs={12}>
                                <TextField required={true}  fullWidth id="phone-number" label="Please input your phone number" variant="standard"/>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth>
                                    <InputLabel  required={true} variant="standard" htmlFor="uncontrolled-native" theme={theme}>
                                        Gender
                                    </InputLabel>
                                    <NativeSelect id="gender" defaultValue={"default"}>
                                        <option value={-1} value={"default"} disabled>Please select your gender</option>
                                        <option value={1}>Male</option>
                                        <option value={0}>Female</option>

                                    </NativeSelect>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <Button fullWidth variant="contained" size={"large"} onClick={this.checkSb}>Submit</Button>
                            </Grid>
                            <Grid item xs={12}>
                                {
                                    this.state.showSub?(
                                        <Alert severity="error" >
                                            Please input your whole information!
                                        </Alert>
                                    ):null
                                }
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </div>

        )
    }


}
//
export default Register;
