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
import "./Footer.css"
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
import Home from "./Home";

class Footer extends React.Component{

    render(){
        return(<div>
                <Grid>
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

                    <Grid className={"backgroundBlack"}>
                        <Grid className={"backgroundBlack_firstColumn"}>
                            <img src={logo1} width={50} height={50} style={{paddingRight: 10, paddingLeft: 10}}/>
                            <div style={{paddingTop: 10}}>We Climb</div>
                        </Grid>
                        <Grid className={"backgroundBlack_secondColumn"}>
                            <Stack spacing={1}>
                                <Link href="#" color="inherit" underline={'hover'}>
                                    Environment
                                </Link>
                                <Link href="#" color="inherit" underline={'hover'}>
                                    Press Releases
                                </Link>
                                <Link href="#" color="inherit" underline={'hover'}>
                                    Privacy Policy
                                </Link>
                            </Stack>
                        </Grid>
                        <Grid className={"backgroundBlack_thirdColumn"}>
                            <Stack spacing={1}>
                                <Link href="#" color="inherit" underline={'hover'}>
                                    Contact Us
                                </Link>
                                <Link href="#" color="inherit" underline={'hover'}>
                                    041244321
                                </Link>
                            </Stack>
                        </Grid>
                        <Grid className={"backgroundBlack_fourthColumn"}>
                            <Link href="#" color="inherit" underline={'hover'}>
                                Learn More
                            </Link>
                        </Grid>
                    </Grid>
                    <Grid className={"backgroundBlack_row"}>
                        <br/>
                        <br/>
                        <div className="link-top"></div>
                        @ 2022 We Climb | All Rights Reserved
                    </Grid>
                </Grid>
            </div>
        );
    };
}
export default Footer;