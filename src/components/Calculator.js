import React,{useState} from 'react'

export default function Calculator() {
    const [total, setTotal] = useState(0)
    function handleShow(e){
        const button = e.target.value;
        setTotal(button)
    }
    return (
        
        <div style={{display:'flex',flexDirection:'column'}}>
            <div style={{fontSize:'100px', height:'16.5vh',width:'100%', textAlign:'right'}}>{total}</div>
            <div style={{display:'flex',flexDirection:'row',height:'16.5vh',width:'100%'}}>
                <div style={{width:'25%'}}><button onClick={handleShow} style={{height:'16.5vh',width:'100%', fontSize:'100px'}}>AC</button></div>
                <div style={{width:'25%'}}><button onClick={handleShow} style={{height:'16.5vh',width:'100%', fontSize:'100px'}}>+/-</button></div>
                <div style={{width:'25%'}}><button style={{height:'16.5vh',width:'100%', fontSize:'100px'}}>%</button></div>
                <div style={{width:'25%'}}><button style={{height:'16.5vh',width:'100%', fontSize:'100px'}}>÷</button></div>
            </div>
            <div style={{display:'flex',flexDirection:'row',height:'16.5vh',width:'100%'}}>
                <div style={{width:'25%'}}><button value={7} onClick={handleShow} style={{height:'16.5vh',width:'100%', fontSize:'100px'}}>7</button></div>
                <div style={{width:'25%'}}><button value={8} onClick={handleShow} style={{height:'16.5vh',width:'100%', fontSize:'100px'}}>8</button></div>
                <div style={{width:'25%'}}><button value={9} onClick={handleShow} style={{height:'16.5vh',width:'100%', fontSize:'100px'}}>9</button></div>
                <div style={{width:'25%'}}><button style={{height:'16.5vh',width:'100%', fontSize:'100px'}}>x</button></div>
            </div>
            <div style={{display:'flex',flexDirection:'row',height:'16.5vh',width:'100%'}}>
                <div style={{width:'25%'}}><button value={6} onClick={handleShow} style={{height:'16.5vh',width:'100%', fontSize:'100px'}}>4</button></div>
                <div style={{width:'25%'}}><button value={5} onClick={handleShow} style={{height:'16.5vh',width:'100%', fontSize:'100px'}}>5</button></div>
                <div style={{width:'25%'}}><button value={4} onClick={handleShow} style={{height:'16.5vh',width:'100%', fontSize:'100px'}}>6</button></div>
                <div style={{width:'25%'}}><button style={{height:'16.5vh',width:'100%', fontSize:'100px'}}>-</button></div>
            </div>
            <div style={{display:'flex',flexDirection:'row',height:'16.5vh',width:'100%'}}>
                <div style={{width:'25%'}}><button value={3} onClick={handleShow} style={{height:'16.5vh',width:'100%', fontSize:'100px'}}>1</button></div>
                <div style={{width:'25%'}}><button value={2} onClick={handleShow} style={{height:'16.5vh',width:'100%', fontSize:'100px'}}>2</button></div>
                <div style={{width:'25%'}}><button value={1} onClick={handleShow} style={{height:'16.5vh',width:'100%', fontSize:'100px'}}>3</button></div>
                <div style={{width:'25%'}}><button style={{height:'16.5vh',width:'100%', fontSize:'100px'}}>+</button></div>
            </div>
            <div style={{display:'flex',flexDirection:'row',height:'16.5vh',width:'100%'}}>
                <div style={{width:'50%'}}><button value={0} onClick={handleShow} style={{height:'16.5vh',width:'100%', fontSize:'100px'}}>0</button></div>
                <div style={{width:'25%'}}><button style={{height:'16.5vh',width:'100%', fontSize:'100px'}}>.</button></div>
                <div style={{width:'25%'}}><button style={{height:'16.5vh',width:'100%', fontSize:'100px'}}>=</button></div>
            </div>
        </div>
        
    )
}
