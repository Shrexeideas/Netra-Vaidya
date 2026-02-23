import './App.css'
import { useState } from 'react'

function App() {

const [result, setResult] = useState("")

function capture(){

let confidence = Math.floor(Math.random()*30)+70

let risk=""

if(confidence>90)
risk="HIGH RISK"

else if(confidence>80)
risk="MODERATE RISK"

else
risk="LOW RISK"

setResult("Result: "+risk+" | "+confidence+"% confidence")

}

return (

<div className="phone">

<h2 className="logo">◎ NETRA-VAIDYA</h2>


<div className="camera">

<div className="circle"></div>

</div>


<p className="title">

Center the eye or patch of skin

</p>


<p className="subtitle">

Hold steady for analysis

</p>


<button className="captureBtn" onClick={capture}></button>


<p className="captureText">

TAP TO CAPTURE

</p>


<p className="result">

{result}

</p>


</div>

)

}

export default App