import React from 'react'
import CardGroup  from 'react-bootstrap/CardGroup'
import Item2 from "./Item2"

function Item({result}) {
    return (
        <div>
        
        {<CardGroup >{
            result.map(el=>
                <Item2 el={el}/>
            )}
            </CardGroup>

        }   
        
        </div>
    )
}

export default Item
