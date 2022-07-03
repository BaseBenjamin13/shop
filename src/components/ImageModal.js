import React from 'react'

function ImageModal({ img }) {
  return (
    <div className="modal-container">
        <img className="modal-image" src={img} />
    </div>
  )
}

export default ImageModal