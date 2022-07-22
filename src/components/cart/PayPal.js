import React, { useRef } from 'react'

function PayPal() {

    const paypal = useRef()

  return (
    <div>
        <div ref={paypal}></div>
    </div>
  )
}

export default PayPal