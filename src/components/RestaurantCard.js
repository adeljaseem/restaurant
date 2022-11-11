import React from 'react'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function RestaurantCard({item}) {

    return (
        <Link style={{textDecoration:'none'}} to={`details/${item.id}`}>
          <Card className='my-4 p-3' style={{ width: '15rem' }}>
          <Card.Img variant="top" src={item.photograph} />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>
             <p> Cuisine: {item.cuisine_type}</p>
            </Card.Text>
            <Card.Text>
             <p>{item.neighborhood}</p>
            </Card.Text>
          </Card.Body>
        </Card>
        </Link>
  )
}

export default RestaurantCard