import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Row, Col} from 'react-bootstrap';
import Forecast from './Forecast.js';

export default function Weather() {
    const [location, setLocation] = useState("");
    const [weather, setWeather] = useState();
    const [validated, setValidated] = useState(false);
    const today = new Date()
    const currentHour = today.getHours().toString()
    
    const fetchData = () => {
        fetch(`http://api.weatherapi.com/v1/forecast.json?key=dd184de2dae24772aeb83413210909&q=${location}&days=7&hour=${currentHour}&aqi=yes&alerts=no`)
            .then(response => {
                if (!response.ok) throw new Error;
                setValidated(false);
                return response.json();
            })
            .catch((error) => {
                console.log(error);
                setValidated(true)
            })
            .then(data => {if (!validated)
                { setWeather(data) }});

    }
    const handleClick = (e) => {
        e.preventDefault();
        fetchData();
    }
    
    return (
        <div>

            <Form noValidate validated={validated} style={{ padding: "10px 0px 0px 10px" }}>
                <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
                    <Form.Label column sm={2}>Your city</Form.Label>
                    <Col sm={10}>
                        <Form.Control style={{ marginBottom: "10px", width: "200px" }} autoFocus autoComplete="off" type="email" isInvalid={validated} placeholder="enter your city" onChange={(e) => { setLocation(e.target.value) }}/>
                    
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid city.
                        </Form.Control.Feedback>

                    </Col>
                    <Button style={{display:"none"}} variant="primary" size="sm" type="submit" onClick={handleClick}></Button>
                    <p>{Date().toLocaleString()}</p>
                </Form.Group>
            </Form>
            {weather ? <Forecast {...weather} /> : "no weather"}
            {/* <p>Powered by <a href="https://www.weatherapi.com/" title="Weather API">WeatherAPI.com</a></p> */}
        </div>
    )
}
