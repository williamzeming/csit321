import "./Activities.css";
import React from 'react';
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

let theme = createTheme();
theme = responsiveFontSizes(theme);

function BasicDatePicker() {
    const [value, setValue] = React.useState<Dayjs | null>(null);
}
function ColorTab() {
    const [value, setValue] = React.useState('activities');
}

class Activities extends React.Component {

    render() {
        return (<div>
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
                <Grid container >
                    <Box  className={"tab"}>
                        <Tabs
                            value={ColorTab.value}
                            onChange={(event: React.SyntheticEvent, newValue: string) => {
                                ColorTab.setValue(newValue);}}
                            textColor="secondary"
                            indicatorColor="secondary"
                            aria-label="secondary tabs example"
                        >
                            <Tab value="home" label="Home" href={"/"}/>
                            <Tab value="profile" label="Profile" href={"/"}/>
                            <Tab value="activities" label="Activities" href={"/Activities"}/>
                            {/*  <Tab value="completed" label="Completed" href={"/"}/>
                            <Tab value="review" label="Review" href={"/"}/> */}
                        </Tabs>
                    </Box>
                </Grid><br/>
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
                <Grid container>
                    <Grid item xs={1} />
                    <Grid item xs={3}>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '25ch' },
                            }}
                            /* noValidate */
                            autoComplete="off"
                        >
                        <div>
                            <div className={"input-text"}>Name:</div>
                            {/* <TextField
                                required
                                id="outlined-required"
                                margin="dense"
                            />*/}
                            <ThemeProvider theme={theme}>
                                <TextField required={true} fullWidth id="name" variant="standard"/>
                            </ThemeProvider>
                        </div><br/>
                            <div>
                                <div className={"input-text"}>Emergency Contact:</div>
                                {/* <TextField
                                required
                                id="standard-required"
                                margin="dense"
                            />*/}
                                <ThemeProvider theme={theme}>
                                    <TextField required={true} fullWidth id="emergency contact" variant="standard"/>
                                </ThemeProvider></div><br/>
                            <div>
                                <div className={"input-text"}>Climbing Location:</div>
                                {/*<TextField
                                required
                                id="standard-required"
                                margin="dense"
                            />*/}
                                <ThemeProvider theme={theme}>
                                    <TextField required={true} fullWidth id="climbing location" variant="standard"/>
                                </ThemeProvider>
                            </div>
                        </Box><br/>
                        <div>
                            <div className={"input-text"}>Start Date: </div><br/>
                            {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    value={BasicDatePicker.value}
                                    onChange={(newValue) => {
                                        BasicDatePicker.setValue(newValue);
                                    }}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider> */}
                            <TextField style={{width:230}} InputLabelProps={{
                                shrink: true,
                            }} required={true} id="start date"
                                       variant="standard" type="date"/>
                        </div><br/>
                        <div>
                            <div className={"input-text"}>End Date: </div><br/>
                            {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    value={BasicDatePicker.value}
                                    onChange={(newValue) => {
                                        BasicDatePicker.setValue(newValue);
                                    }}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider> */}
                            <TextField style={{width:230}} InputLabelProps={{
                                shrink: true,
                            }} required={true} id="end date"
                                       variant="standard" type="date"/>
                        </div><br/>
                        <div>
                            <div className={"input-text"}>Notes: </div><br/>
                            {/*  <TextareaAutosize
                            aria-label="minimum height"
                            minRows={3}
                            placeholder="Optional..."
                            style={{ width: 200 }}
                        /> */}  <TextField
                            id="outlined-multiline-static"
                            multiline
                            rows={4}
                        />
                        </div><br/>
                        <Button variant="contained">Check In</Button>
                    </Grid>
                    <Grid item xs={1}/>

                    <Grid item xs={7} className={"mapImage"}/>
                </Grid><br/><br/>

            {/*  footer ys={3}*/}
                <Footer/>
            </div>
        );
    };
}

export default Activities;