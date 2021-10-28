import React from 'react'
import { useAddContext } from '../../context/addContext'
import CardGroup  from 'react-bootstrap/CardGroup'
import { Link } from 'react-router-dom'
import Button from "react-bootstrap/Button"
import MyTeam from '../MyTeam/MyTeam'
import Stats from '../Stats/Stats'


function MyTeamContainer() {
    const {heroe} = useAddContext()
    //heroe me devuelve array de objetos con todos los datos de los heroes

  
    return (
        <>
        <div>
          {
            <CardGroup>
              {heroe.map(e=>
                <MyTeam props={e}/>
              )}
            </CardGroup>}  
        </div>
        <Stats stats={heroe}/>
        <Link to="/">
            <Button >
                Home
            </Button>
        </Link>      
        </>
    )
}

export default MyTeamContainer
