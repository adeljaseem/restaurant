import React, { useState, useEffect } from 'react'
import { Row,Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { listRestaurants } from '../actions/restaurantAction'
import RestaurantCard from './RestaurantCard'

function Home() {

    const dispatch = useDispatch();
    
    const restaurantData = useSelector(state => state.restaurantReducer)

    const { restaurant } = restaurantData


    // const [hotels, setHotels] = useState([])
    // const fetchData = async() => {
    //     await fetch('/restaurants.json')
    //     .then((res) => res.json())
    //     .then((data) => setHotels(data.restaurants))
    // }


    useEffect(() => {
      dispatch(listRestaurants())
    }, [])

    console.log('My data is',restaurant);

  return (
        <Row>
          {restaurant.map((item) => (
            <Col className='mx-3' sm={6} md={4} lg={3} xl={2} >
            <RestaurantCard item={item}/>
            </Col>
          )
          )}
        </Row>
  )
}
//sm={12} md={8} lg={6} xl={3}

export default Home