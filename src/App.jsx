import { useRef, useState } from "react";
import "./App.css";

function App() {

const videoRef = useRef(null);
const canvasRef = useRef(null);

const [result,setResult] = useState("");

async function startCamera(){

const stream = await navigator.mediaDevices.getUserMedia({video:true});

videoRef.current.srcObject = stream;

}

async function capture(){

const canvas = canvasRef.current;
const video = videoRef.current;

canvas.width = video.videoWidth;
canvas.height = video.videoHeight;

const ctx = canvas.getContext("2d");

ctx.drawImage(video,0,0);

const imageData = canvas.toDataURL("image/png");


// SEND TO BACKEND

const response = await fetch("http://localhost:8080/analyze",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

image:imageData

})

});

const data = await response.json();

setResult(data.result);

}


return(

<div className="phone">

<h2 className="logo">NETRA-VAIDYA</h2>

<div className="cameraBox">

<video ref={videoRef} autoPlay></video>

</div>

<canvas ref={canvasRef} style={{display:"none"}}></canvas>

<button className="startBtn" onClick={startCamera}>
START CAMERA
</button>

<button className="captureBtn" onClick={capture}>
CAPTURE
</button>

<p className="result">{result}</p>

</div>

)

}

export default App;