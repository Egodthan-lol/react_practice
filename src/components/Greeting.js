import React,{useState} from 'react'
export default function Greeting() {
    const [isClicked,setClicked] = useState(false)
    const handleClick = (e) => {
        e.preventDefault();
        var h1 = document.getElementById('h1')
        h1.textContent = 'hello'
        setClicked(true)
    }
    return (
        <div >
            <div id='greeting' style={{height:300,width:1000,display:'flex',backgroundColor:'#000000',color:'#FFFFFF',justifyContent:'center',textAlign:'center',alignContent:'center'}}>
            <h1 id='h1'>This is a greeting</h1>
            </div>
            <button disabled={isClicked} onClick={handleClick}> chang text</button>

        </div>
    )
}
