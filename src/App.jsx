import { useRef, useState } from "react";
import "./App.css";

function App() {

const videoRef = useRef(null);
const canvasRef = useRef(null);

const [image, setImage] = useState(null);


const startCamera = async () => {

const stream = await navigator.mediaDevices.getUserMedia({
video:true
});

videoRef.current.srcObject = stream;

};


const capture = () => {

const canvas = canvasRef.current;
const video = videoRef.current;

canvas.width = video.videoWidth;
canvas.height = video.videoHeight;

canvas.getContext("2d").drawImage(video,0,0);

const img = canvas.toDataURL("image/png");

setImage(img);


// SEND TO BACKEND
fetch("http://localhost:8080/upload",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

image:img

})

});

};


return (

<div className="phone">

<h2 className="title">NETRA-VAIDYA</h2>


<video
ref={videoRef}
autoPlay
className="camera"
/>


<canvas ref={canvasRef} style={{display:"none"}} />


<div className="btnBox">

<button onClick={startCamera} className="startBtn">
START CAMERA
</button>


<button onClick={capture} className="captureBtn">
CAPTURE
</button>

</div>


{image &&

<img src={image} className="preview"/>

}

</div>

);

}

export default App;