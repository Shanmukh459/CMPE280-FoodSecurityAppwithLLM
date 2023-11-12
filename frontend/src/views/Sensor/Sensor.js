import React from 'react'
import { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import { sensordata } from "./SensorData";


import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Slider from "@mui/material/Slider";
// import { Chart } from "react-google-charts";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import backendServer from "../../webConfig";
import Col from "react-bootstrap/Col";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Arrow from "@mui/icons-material/NoteAltOutlined";
import ListItemText from "@mui/material/ListItemText";
import axios from 'axios';
// import Header from "./header";
// import NavBar from "./nav";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
// const options = {
//     title: "Temperature vs Time",
//     hAxis: { title: "Temperature", viewWindow: { min: 0, max: 15 } },
//     vAxis: { title: "Date", viewWindow: { min: 0, max: 15 } },
//     legend: "none"
//   };

export default function Sensor() {

    const [temperaturedata, settemperaturdata] = useState([["Date", "Temperature"]]);
    const [humididtydata, sethumididtydata] = useState([["Date", "Humidity"]])
    const [currentSensor, setSensor] = useState([0])
    const sensorList = Object.keys(sensordata[0].Type)

    const loadData = () => {
        // Update the document title using the browser API
        let tempTemperature = temperaturedata
        for (let i = 0; i < sensordata.length; i++) {
            tempTemperature.push([sensordata[i].Date[currentSensor], sensordata[i].Cattle_temperature[currentSensor]])
            settemperaturdata(tempTemperature)
            console.log([sensordata[i].Date[currentSensor], sensordata[i].Cattle_temperature[currentSensor]])
        }
        console.log(temperaturedata)
        let humididtyTemp = humididtydata
        for (let i = 0; i < sensordata.length; i++) {
            humididtyTemp.push([sensordata[i].Date[currentSensor], sensordata[i].Cattle_humidity[currentSensor]])
            sethumididtydata(humididtyTemp)
            console.log([sensordata[i].Date[currentSensor], sensordata[i].Cattle_temperature[currentSensor]])
        }
        console.log(humididtydata)
    }

    useEffect(() => {
        loadData()
        console.log(sensorList)
    }, []);
    console.log(sensorList)
    return (
        <div>
            <div className="row">
                {/* <Header /> */}
            </div>
            <div className="row">
      
      
                </div>
                <div className="col-md-1 vl"></div>

                <div className="col-md-8">
                    <div className="mangos-container">
                        <div className="row">
                            <div className="col-md-12">
                                <div style={{ marginBottom: "20px" }}>
                                    <Chart
                                        chartType="LineChart"
                                        width="100%"
                                        height="250px"
                                        data={temperaturedata}
                                        options={{
                                            title: "Temperature",
                                            hAxis: {
                                                format: "#", // Use 'decimal' format to display integers without commas
                                            },
                                        }}
                                    />
                                </div>
                            </div>
                            {/* <div className="col-md-6">
                            </div> */}
                        </div>
                        <div className="row">
                            <div className="col-md-12"> <div style={{ marginBottom: "20px" }}>
                                <Chart
                                    chartType="LineChart"
                                    width="100%"
                                    height="250px"
                                    data={humididtydata}
                                    options={{
                                        title: "Humidity",
                                        hAxis: {
                                            format: "#", // Use 'decimal' format to display integers without commas
                                        },
                                    }}
                                />
                            </div></div>

                        </div>
                        <div className='row'>
                            {/* <div className='col-md-6'>
                                <Box sx={{ minWidth: 120 }}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Select Sensor</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={currentSensor}
                                            label="Age"
                            
                                        >  {sensorList.length>0 & sensorList.map((sens,key)=>{return (<MenuItem key = {key}>{sens}</MenuItem>)})}

                                        </Select>
                                    </FormControl>
                                </Box>
                            </div> */}
     
                        </div>
                    </div>
                </div>
            </div>




    )
}
