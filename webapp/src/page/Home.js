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

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));



const url = "http://localhost:";

class Home extends React.Component {
    state = {
        person: null
    }
    //加载自动运行
    componentDidMount = () => {
        // this.getExample()
    }

    getExample() {
        axios.get("http://localhost:5000/test").then((res) => {
            console.log(res)
            this.setState({person: res.data})
        })
    }

    render() {
        return <div>
            <Box sx={{flexGrow: 1}}n style={{backgroundColor:"pink"}}>
                <Grid>
                    <br/>
                </Grid>
                <Stack spacing={2} alignItems={"center"}>
                    <Grid container spacing={4}>
                        <Grid item xs>
                            <img src={logo} width={80} style={{paddingLeft:10}} className={"center"}/>
                        </Grid>
                        <Grid item xs={6}>
                            <Stack spacing={2} direction="row" justifyContent={"right"} className={"center"}>
                                <Link to="/" underline="hover" >Home</Link>
                                <Link to="/" underline="hover">Community</Link>
                            </Stack>
                        </Grid>
                        <Grid item xs>
                            <Stack  direction="row">
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
            </Box>
        </div>

    }
}

export default Home;