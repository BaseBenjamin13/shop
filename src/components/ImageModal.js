import React from 'react'
import '../assets/style/DetailPage.css';



function ImageModal({ img, modal, setModal }) {


    function hideModal() {
        setModal({show: false});
    }

  return (
    <div onClick={() => hideModal()} className="modal-container">
        <img className="modal-image detailed-img" src={img} />
    </div>
  )
}

export default ImageModal