import React from 'react'

function DetailedResult({ item }) {
  return (
    <div>
        <h1>{item.title}</h1>
        <div>
            {/* Carousel */}
            {/* map images inside carousel */}
            <img src={item.image_urls[0]} />
            <h2>Brand: {item.brand}</h2>
        </div>

        <div>{item.description}</div>
    </div>
  )
}

export default DetailedResult