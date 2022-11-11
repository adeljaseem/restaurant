import React from 'react'

function Reviews({data}) {
  return (
    <div>
      <h3 className='text-center'>Reviews</h3>
        {data.map((item) => (
            <div>
                <h5>{item.name}, {item.date}</h5>
                <p>{item.comments}</p>
            </div>
        ))}
    </div>
  )
}

export default Reviews