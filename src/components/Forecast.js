import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Chart from 'chart.js/auto';
export default function Forecast(weather) {
    console.log(weather);
    const forecastTemp = [];
    const forecastDate = []
    const today = new Date();
    const hello = "Aa"
    for (let i=0; i<3; i++){
        forecastTemp.push(weather.forecast.forecastday[i].day.avgtemp_c)
        forecastDate.push((today.getMonth() + 1).toString() + '/' + (today.getDate() + i).toString())
    }
    useEffect(() => {
        
        try { 
            const myChart = new Chart(ctx, {});
            myChart.destroy()
        }
        catch (error){}
        const ctx = document.getElementById('myChart');
        const myChart = new Chart(ctx, {
            type:"line",
            data: {
                labels: forecastDate,
                datasets: [{
                  label: 'Temperature',
                  backgroundColor: 'rgb(255, 99, 132)',
                  borderColor: 'rgb(255, 99, 132)',
                  data: forecastTemp,
                }]
              }
        });
    },[])
   
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Row>
                            <p>{weather.current.condition.text}</p>
                            <img alt={weather.current.condition.text} src={weather.current.condition.icon}></img>
                        </Row>
                        <Row xs="2">
                            <Col>
                                <p>humidity</p>
                                <h2>{weather.current.humidity}%</h2>
                            </Col>
                            <Col>
                                <p>wind speed</p>
                                <h2>{weather.current.wind_kph}km/h</h2>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Col>
                                <p>Temperature</p>
                                <h2>{weather.current.temp_c}°C</h2>
                            </Col>
                            <Col>
                                <p>Feels like</p>
                                <h2>{weather.current.feelslike_c}°C</h2>
                            </Col>
                        </Row>
                        <Row>
                            <canvas id="myChart" width="400" height="400"></canvas>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
