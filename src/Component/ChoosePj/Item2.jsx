import React from 'react'
import  Card  from 'react-bootstrap/Card'
import  Button  from 'react-bootstrap/Button'
import { useAddContext } from '../../context/addContext'

function Item2({el}) {
  const {addHeroe} = useAddContext()

  function add (){
    addHeroe(el)   
  }
    return (
        <>

  <Card style={{ width: '18rem'}} align="center">
  <div >
    <Card.Img variant="top" src={el.image.url} style={{ width: '5rem'}} align="center"/>
    </div>
    <Card.Body>
      <Card.Title>{el.name}</Card.Title>
      <Card.Text>
        Tambien conocido como {el.biography.aliases[0]} publicado por la editorial {el.biography.publisher} 
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <Button onClick={add}>
        Añadir
      </Button>
    </Card.Footer>
     
  </Card>
 

        </>
    )
}

export default Item2
