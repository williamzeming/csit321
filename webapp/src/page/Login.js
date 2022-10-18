import React from 'react';
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
import axios from "axios";
import {Alert} from "@mui/material";


const label = {inputProps: {'aria-label': 'Checkbox demo'}};
const url = "http://localhost:";
// const url = "http://192.168.0.13:";
let theme = createTheme();
theme = responsiveFontSizes(theme);


const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


//create login page for customer to log in our website
class Login extends React.Component {
    state = {
        showElem: false
    };
    //pass the login information to the back end
    postLogin = () => {
        const params = {
            email: document.getElementById("userName").value,
            pw: document.getElementById("pw").value
        }
        console.log(params)
        axios.post(url + "5000/login", params).then((res) => {
            console.log(res)
            if (res.data.statusCode === 0) {
                console.log("password error")
                this.setState({showElem: true})
            }else {
                document.cookie="uid="+res.data.uid+";path=/";
                document.cookie="fname="+res.data.fname+";path=/";
                window.location.href = url + "3000"
            }
        })
    }
    //clear the input of user
    clearInput(){
        document.getElementById("userName").value =""
        document.getElementById("pw").value = ""
    }
    //the layout and the element of the page
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
                                    <Typography align="center" variant="h2">Welcome</Typography>
                                </ThemeProvider>
                            </Grid>

                            <Grid item xs={12}>
                                <TextField fullWidth id="userName" label="E-Mail" variant="filled"/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    id="pw"
                                    label="Password"
                                    type="password"
                                    autoComplete="current-password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Link underline="hover" href="/Register">Forgotten your password?</Link>
                            </Grid>
                            <Grid item xs={12}>
                                {
                                    this.state.showElem ? (
                                        <Alert severity="error">
                                            Password Error
                                        </Alert>
                                    ) : null
                                }
                            </Grid>
                            <Grid item xs={12}>
                                <Stack spacing={2} direction="row">
                                    <Button fullWidth variant="contained" onClick={this.postLogin}>Login</Button>
                                    <Button fullWidth variant="outlined"
                                            onClick={this.clearInput}>Clear</Button>
                                </Stack>
                            </Grid>

                            <Grid item xs={12}>
                                <Checkbox {...label} defaultChecked/>
                                <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">Privacy
                                    Policy</Link>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </div>

        )
    }
}

export default Login;