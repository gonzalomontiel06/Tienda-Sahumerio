import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './item.scss'

export const Item = ({item}) => {

    return(

        // ITEM VIEW
        
        <div className="col-lg-4 cardFlex" style={{ width: '300px'}}>
            <Card border="ligth" style={{ width: '15rem', margin: '5px' }}>
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                    <Card.Title className='cardName'>{item.name}</Card.Title>
                    <Card.Text className='cardPrice'>${item.price}</Card.Text>
                    <Link to={`/detail/${item.id}`}>
                        <button className='buttonComprar'>COMPRAR</button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    )
}