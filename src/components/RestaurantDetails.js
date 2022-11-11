import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Row, Col, Image, Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import Reviews from './Reviews'

function RestaurantDetails() {
  const [data, setData] = useState([])
  const params= useParams()

  const fetchData = async() => {
    await fetch('/restaurants.json')
    .then((res) => res.json())
    .then((data) => setData(data.restaurants))
  }

  useEffect(() => {
   fetchData()
  }, [])
  console.log(data);

  const details = data.find((i) => i.id == params.id)
  console.log(details);

  return (
    <>
    <Link className='btn btn-outline-dark rounded my-2 ' to='/'>Back</Link>
      {details ? (
        <Row className='my-3'>
          <Col md={3}>
            <Image className='img rounded ' src={details.photograph} alt={details.name} fluid/>
          </Col>
          <Col md={4}>
            <ListGroup>
              <ListGroupItem>
                <h2>{details.name}</h2>
                <p>{details.neighborhood}</p>
              </ListGroupItem>
              <ListGroupItem>
                <p>Cuisine: {details.cuisine_type}</p>
              </ListGroupItem>
              <ListGroupItem>
                <p>Address: : {details.address}</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col md={4}>
            <ListGroup>
              <ListGroupItem>
                <h4>Operating Hours</h4>
                <p>Monday: {details.operating_hours.Monday}</p>
                <p>Tuesday: {details.operating_hours.Tuesday}</p>
                <p>Wednesday: {details.operating_hours.Wednesday}</p>
                <p>Thursday: {details.operating_hours.Thursday}</p>
                <p>Friday: {details.operating_hours.Friday}</p>
                <p>Saturday: {details.operating_hours.Saturday}</p>
                <p>Sunday: {details.operating_hours.Sunday}</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Row>
            <Card className='my-3 mx-3 p-3'>
              <Reviews data = {details.reviews}/>
            </Card>
          </Row>
        </Row>
      ) : 'null'}
    </>
  )
}

export default RestaurantDetails