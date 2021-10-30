import Card from "react-bootstrap/Card"
import { useAddContext } from '../../context/addContext'
import Button from "react-bootstrap/Button"

function MyTeam({props}) {
    const {delete_Pj} = useAddContext()

    function clear (){
        delete_Pj(props)
    }
    return (
<>
    <Card align="center" >
    <div >
    <Card.Img variant="top" src={props.image.url} style={{ width: '15rem'}} align="center"/>
    </div>
    <Card.Body>
      <Card.Title>{props.name}</Card.Title>
      <Card.Text>
        Speed: {props.powerstats.speed}<br/>
        Intelligence: {props.powerstats.intelligence}<br/>
        Strength: {props.powerstats.strength}<br/>
        Durability: {props.powerstats.durability}<br/>
        Power: {props.powerstats.power}<br/>
        Combat: {props.powerstats.combat}<br/>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <div style={{textAlign:"center"}}>
        <small className="text-muted">{props.biography.alignment}</small>
      </div>
    </Card.Footer>
    <Button onClick={clear}>
        Elminar
    </Button>
  </Card>
</>
    )
}

export default MyTeam
