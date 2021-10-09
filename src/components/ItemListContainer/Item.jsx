import React from 'react'
import { Card } from 'react-bootstrap'

export const Item = ({item}) => {

    return(
        <Card border="info" style={{ width: '15rem', margin: '5px' }}>
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Header>{item.id}</Card.Header>
            <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.price}</Card.Text>
            </Card.Body>
        </Card>
    )
}


