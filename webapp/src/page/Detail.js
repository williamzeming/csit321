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
import "./Detail.css"
import ButtonBase from '@mui/material/ButtonBase';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';


class Detail extends React.Component{
    render() {
        return(
            <div>
                <Grid container>
                    <Grid item md={12}>
                        header
                    </Grid>
                    <Grid item md={10}>
                        NAVI
                    </Grid>
                    <Grid item md={10}>
                        Picture
                    </Grid>
                    <Grid item md={8}>
                        <Stack direction={"row"}>
                            <Stack>
                                Introduction
                            </Stack>
                            <Stack>
                                google
                            </Stack>
                        </Stack>
                        <Stack>
                            Weather
                        </Stack>
                        <Stack>
                            Weather detail
                        </Stack>
                        <Stack>
                            Review      Photos
                        </Stack>
                        <Stack direction={"row"}>
                            <Stack>
                                Score
                            </Stack>
                            <Stack>
                                <Button fullWidth variant="contained">Write Review</Button>
                            </Stack>

                        </Stack>
                        <Stack>
                            The review
                        </Stack>
                    </Grid>


                </Grid>
            </div>

        )
    }
}
export default Detail;