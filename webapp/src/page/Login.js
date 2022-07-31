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


const label = {inputProps: {'aria-label': 'Checkbox demo'}};

let theme = createTheme();
theme = responsiveFontSizes(theme);


const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

class Login extends React.Component {

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
                                <TextField fullWidth id="filled-basic" label="Name" variant="filled"/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    id="outlined-password-input"
                                    label="Password"
                                    type="password"
                                    autoComplete="current-password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Link underline="hover" href="#">Forgotten your password?</Link>
                            </Grid>
                            <Grid item xs={12}>
                                <Stack spacing={2} direction="row">
                                    <Button fullWidth variant="contained">Login</Button>
                                    <Button fullWidth variant="outlined">Clear</Button>
                                </Stack>
                            </Grid>
                            <Grid item xs={12}>
                                <Checkbox {...label} defaultChecked/>
                                <Link href="#">Privacy Policy</Link>
                            </Grid>
                        </Grid>
                    </Container>
                </div>


            </div>

        )
    }
}

export default Login;