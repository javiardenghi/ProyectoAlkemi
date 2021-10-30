import React from 'react'
import { useAddContext } from '../../context/addContext'
import CardGroup  from 'react-bootstrap/CardGroup'
import { Link } from 'react-router-dom'
import Button from "react-bootstrap/Button"
import MyTeam from '../MyTeam/MyTeam'
import Stats from '../Stats/Stats'


function MyTeamContainer() {
    const {heroe} = useAddContext()

    return (
        <>
        <div>
          {
            heroe.length === 0 ? <h1 style={{textAlign: 'center'}}> Empty Team </h1> : 
            <CardGroup>
              {heroe.map(e=>
                <MyTeam props={e}/>
              )}
            <Stats stats={heroe}/>

            </CardGroup>}  
        </div>
        <Link to="/">
            <Button >
                Home
            </Button>
        </Link>      
        </>
    )
}

export default MyTeamContainer
