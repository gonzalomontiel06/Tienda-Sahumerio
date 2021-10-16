import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './item.scss'

export const Item = ({item}) => {

    return(
        <div className="col-lg-4 cardFlex" style={{ width: '300px'}}>
            <Card border="info" style={{ width: '15rem', margin: '5px' }}>
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                    <Card.Title className='cardName'>{item.name}</Card.Title>
                    <Card.Text className='cardPrice'>{item.price}</Card.Text>
                    <Link to={`/detail/${item.id}`}>
                        <Button className='cardButton' style={{fontWeight: 'bold'}}variant="outline-info">comprar</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    )
}
