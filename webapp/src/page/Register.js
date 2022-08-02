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



const label = {inputProps: {'aria-label': 'Checkbox demo'}};

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
            showElem:false
        };
        this.checkPw= this.checkPw.bind(this);
    }

    checkPw() {
        var pw1 = document.getElementById("first-pd").value;
        var pw2 = document.getElementById("second-pd").value;
        var result = document.getElementById("check-pd");

        if(pw1==pw2){
            this.setState({showElem: false})
        }else{
            console.log("not match");
            //result.innerHTML = "Password does not match!";
            this.setState({showElem: true})
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
                                    <TextField  required={true}  fullWidth id="standard-basic" label="Please input your last name" variant="standard"/>
                                </ThemeProvider>
                            </Grid>
                            <Grid item xs={12}>
                                <ThemeProvider theme={theme}>
                                    <TextField  required={true}  fullWidth id="standard-basic" label="Please input your first name" variant="standard"/>
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
                                        autoFocus={false}
                                        onBlur={this.checkPw}
                                    />
                                </Stack>
                            </Grid>
                            <Grid item>
                                {
                                    this.state.showElem?(
                                        <Alert   severity="error" >
                                            Password does not match!
                                        </Alert>
                                    ):null
                                }

                            </Grid>

                            <Grid item xs={12}>
                                <TextField  required={true}  fullWidth id="standard-basic" label="Please input your date of birth" variant="standard" type="date"/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField  required={true}  fullWidth id="standard-basic" label="Please input your email" variant="standard"/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField required={true}  fullWidth id="standard-basic" label="Please input your phone number" variant="standard" type="number"/>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth>
                                    <InputLabel  required={true} variant="standard" htmlFor="uncontrolled-native" theme={theme}>
                                        Gender
                                    </InputLabel>
                                    <NativeSelect>
                                        <option value={1}>Male</option>
                                        <option value={0}>Female</option>
                                    </NativeSelect>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <Button fullWidth variant="contained" size={"large"}>Submit</Button>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </div>

        )
    }

}

export default Register;