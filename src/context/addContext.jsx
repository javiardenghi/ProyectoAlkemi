import { createContext, useContext, useState} from 'react';

const AddContext = createContext()
export const useAddContext = () => useContext(AddContext)

function AddContextProvider({children}) {
    const [heroe, setHeroe] = useState([])
    const [id, setId] = useState([])

    const [speed, setSpeed] = useState(0)
    const [intelligence, setIntelligence] = useState(0)
    const [strength, setStrength] = useState(0)
    const [durability, setDurability] = useState(0)
    const [power, setPower] = useState(0)
    const [combat, setCombat] = useState(0)

    const [altura, setAltura] = useState([])
    const [peso, setPeso] = useState([])

    function addHeroe(e){
        setId([...id,e.id])
        if(heroe.length == 6){
            alert("Equipo completo")
        }else{
            if(id.includes(e.id)){
                alert(`${e.name} is already in your team`)
             }else{
                 setHeroe([...heroe,e])
                 updateStats(e)     
             }
        }
   }

    function delete_Pj(elemento){
        const newHeroe = heroe.filter(e=> e.id != elemento.id)
        const newId = heroe.filter(e=> e.id != elemento.id)
        setId(newId)
        setHeroe(newHeroe)

        setSpeed(speed - Number(elemento.powerstats.speed))
        setIntelligence(intelligence - Number(elemento.powerstats.intelligence))
        setStrength(strength - Number(elemento.powerstats.strength))
        setDurability(durability - Number(elemento.powerstats.durability))
        setPower(power - Number(elemento.powerstats.power))
        setCombat(combat - Number(elemento.powerstats.combat))

        const newh=  altura.filter(e=> e != elemento.appearance.height[1].replace("cm",""))
        const newp=  peso.filter(e=> e != elemento.appearance.weight[1].replace("kg",""))
        
        setPeso(newp)
        setAltura(newh)
    }

    function updateStats(el){
        if(el.powerstats.speed == "null"){
            setSpeed(0 + speed)
        }else{
            setSpeed(Number(el.powerstats.speed) + speed)
        }
        if(el.powerstats.intelligence == "null"){
            setIntelligence(0 + intelligence)
        }else{
            setIntelligence(Number(el.powerstats.intelligence) + intelligence)
        }
        if(el.powerstats.strength == "null"){
            setStrength(0 + strength)
        }else{
        setStrength(Number(el.powerstats.strength) + strength)
        }
        if(el.powerstats.durability == "null"){
            setDurability(0 + durability)
        }else{
            setDurability(Number(el.powerstats.durability) + durability)    
        }
        if(el.powerstats.power == "null"){
            setPower(0 + power)
        }else{
            setPower(Number(el.powerstats.power) + power)
        }
        if(el.powerstats.combat == "null"){
            setCombat(0 + combat)
        }else{
            setCombat(Number(el.powerstats.combat) + combat)
        }
        setAltura([...altura,Number(el.appearance.height[1].replace("cm",""))])
        setPeso([...peso,Number(el.appearance.weight[1].replace("kg",""))])
    }
    return(
        <AddContext.Provider value={{addHeroe, heroe, delete_Pj,updateStats,speed,intelligence,strength,durability,power,combat,altura,peso}}>
            {children}
        </AddContext.Provider>
    )
}

export default AddContextProvider