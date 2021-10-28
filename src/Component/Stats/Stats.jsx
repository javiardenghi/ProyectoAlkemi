import {useState,useEffect} from "react"
import { useAddContext } from '../../context/addContext'
import ProgressBar from "react-bootstrap/ProgressBar"

function Stats({stats}) {
    const {speed,intelligence,strength,durability,power,combat,altura,peso} = useAddContext()
    const [total, setTotal] = useState(0)  


    useEffect(() => {
        
        
       setTotal(speed+intelligence+strength+durability+power+combat)
    }, [speed])
    return (
        <div>
            <h3>
                velocidad : <ProgressBar now={speed} max={1000} variant="success" /> <br/>
                inteligencia = <ProgressBar now={intelligence} max={1000} variant="info"/> <br/>
                fuerza = <ProgressBar now={strength} max={1000}/><br/>
                durabilidad = <ProgressBar now={durability} max={1000} variant="dark"/><br/>
                poder = <ProgressBar now={power} max={1000} variant="warning"/><br/>
                combate = <ProgressBar now={combat} max={1000} variant="danger"/><br/>
                Altura={
                    altura.reduce((acc,el)=>acc + el , 0)/altura.length
                }<br/>
                Peso={
                    peso.reduce((acc,el)=>acc + el , 0)/peso.length
                }<br/>
                TOTAL = {total}
            </h3>
        </div>
    )
}

export default Stats
