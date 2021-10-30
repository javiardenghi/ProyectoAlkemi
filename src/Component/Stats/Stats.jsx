import {useState,useEffect} from "react"
import { useAddContext } from '../../context/addContext'
import ProgressBar from "react-bootstrap/ProgressBar"
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';

function Stats({stats}) {
    const {speed,intelligence,strength,durability,power,combat,altura,peso} = useAddContext()
    const [total, setTotal] = useState(0)  

    useEffect(() => { 
       setTotal(speed+intelligence+strength+durability+power+combat)
    }, [speed])
    return (
        <div style={{alignContent:"center", paddingLeft:10}}>
        
                <div style={{display:"flex"}}>
                    <div style={{paddingLeft: 10, textAlign:"center"}}>
                        <h3 >Altura:</h3>
                        <div style={{ width: 100, height: 100 }}>
                            <CircularProgressbar maxValue={500} value={(altura.reduce((acc,el)=>acc + el , 0)/altura.length).toFixed()} text={`${(altura.reduce((acc,el)=>acc + el , 0)/altura.length).toFixed()}`} />
                        </div> 
                    </div>
                    <div style={{paddingLeft: 25,textAlign:"center"}}>
                        <h3>Peso:</h3>
                        <div style={{ width: 100, height: 100 }}>
                            <CircularProgressbar maxValue={200} value={(peso.reduce((acc,el)=>acc + el , 0)/peso.length).toFixed()} text={`${(peso.reduce((acc,el)=>acc + el , 0)/peso.length).toFixed()}`} /> <br/>
                        </div>
                    </div>
                </div>
            <h3>
                Speed : <ProgressBar now={speed} max={1000} variant="success" /> <br/>
                Intelligence : <ProgressBar now={intelligence} max={1000} variant="info"/> <br/>
                Strength : <ProgressBar now={strength} max={1000}/><br/>
                Durability : <ProgressBar now={durability} max={1000} variant="dark"/><br/>
                Power : <ProgressBar now={power} max={1000} variant="warning"/><br/>
                Combat : <ProgressBar now={combat} max={1000} variant="danger"/><br/>
                TOTAL : {total}
            </h3>
        </div>
    )
}
export default Stats
