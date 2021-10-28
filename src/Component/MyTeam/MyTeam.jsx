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
    <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>{props.name}</Card.Title>
      <Card.Text>
        {props.powerstats.speed}<br/>
        {props.powerstats.intelligence}<br/>
        {props.powerstats.strength}<br/>
        {props.powerstats.durability}<br/>
        {props.powerstats.power}<br/>
        {props.powerstats.combat}<br/>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
    <Button onClick={clear}>
        Elminar
    </Button>
  </Card>
</>
    )
}

export default MyTeam
