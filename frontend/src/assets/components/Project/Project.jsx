import React from 'react'
import Navbar  from '../Navbar/Navbar'
import { useState,useRef,useEffect } from 'react'
import './Project.css'
import { useHref } from 'react-router'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

function Project() {



const [logs,setLogs] = useState([])
const [error, setError] = useState(null);

const [projectdata,setData] = useState([])
const [dataerror, setDataerror] = useState(null);

const fetchLogs = async () =>{
try{

const response = await fetch ("https://abhicode.in/logs.php")
const data = await response.json();
setLogs(data)
}
catch(err){
setError(err.message);
}
};

useEffect(() => {
fetchLogs()
}, []);



useEffect(() => {
  const fetchData = async () =>{
try{

const response = await fetch ("https://abhicode.in/data.php")
const data = await response.json();
setData(data)
}
catch(err){
setDataerror(err.message);
}
  };
fetchData()
}, []);



const trajectory_data = [
  { x: 0, y: 0,  z: 0 },
  { x: 1, y: 2,  z: 1 },
  { x: 2, y: 4,  z: 3 },
  { x: 3, y: 7,  z: 6 },
  { x: 4, y: 11, z: 10 },
  { x: 5, y: 16, z: 15 },
  { x: 6, y: 22, z: 21 },
  { x: 7, y: 29, z: 28 },
  { x: 8, y: 37, z: 36 },
  { x: 9, y: 46, z: 45 },
  { x: 10, y: 56, z: 55 }
];


  return (

<>
<Navbar/>



<div className="project-container">


<div className="datadiv">
<h4>DATA</h4>

<div>



{projectdata.map((data, index) => (
<div className="data-entry" key={index}>
  <div className="data-row">
    <span className="data-label">Timestamp:</span>
    <span className="data-value">{data.timestamp}</span>
  </div>

  <div className="data-row">
    <span className="data-label">Spacecraft:</span>
    <span className="data-value">{data.spacecraft}</span>
  </div>

  <div className="data-row">
    <span className="data-label">Position (x, y, z):</span>
    <span className="data-value">
      {data.position.x}, {data.position.y}, {data.position.z}
    </span>
  </div>

  <div className="data-row">
    <span className="data-label">Velocity (vx, vy, vz):</span>
    <span className="data-value">
      {data.velocity.vx}, {data.velocity.vy}, {data.velocity.vz}
    </span>
  </div>

  <div className="data-row">
    <span className="data-label">Fuel Level:</span>
    <span className="data-value">{data.fuel_level_percent}%</span>
  </div>

  <div className="data-row">
    <span className="data-label">Debris Alert:</span>
    <span className="data-value">{data.debris_alert}</span>
  </div>

  <div className="data-row">
    <span className="data-label">Radiation Level:</span>
    <span className="data-value">{data.radiation_level}</span>
  </div>

  <div className="data-row">
    <span className="data-label">Status:</span>
    <span className="data-value">{data.status}</span>
  </div>
</div>



))}



</div>



</div>

<div className="trajectorydiv">
<h4>Trajectory</h4>

<LineChart width={600} height={400} data={trajectory_data}>
<Line type="monotone" dataKey="y" stroke="#ff7300" dot={false} />
<CartesianGrid stroke="#ccc" />
<XAxis dataKey="x" />
<YAxis />
<Tooltip />
</LineChart>

</div>

<div className="fueldiv">
<h4>Fuel</h4>
</div>


<div className="radiationdiv">
<h4>Radiation</h4>
</div>


<div className="humanlogsdiv">
<h4>Mission Logs</h4>
<button className="refreshbtn" onClick={fetchLogs}>  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-arrow-repeat"
    viewBox="0 0 16 16"
  >
    <path
      d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"
    ></path>
    <path
      fill-rule="evenodd"
      d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
    ></path>
  </svg> Refresh</button>
<div>
{error && <p>Error: {error}</p>}
{logs.map((log, index) => (
<div className="log-entry" key={index}>
<span className="log-time">{log.time}</span>
<span className="log-message">{log.message}</span>
</div>
))}
</div>

</div>


</div>



</>
  )
}

export default Project
