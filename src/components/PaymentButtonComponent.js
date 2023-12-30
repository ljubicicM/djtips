import React from 'react'

export default function PaymentButtonComponent(imageUrl, handleClick) {
  return (
    <button className="paymentOptionButton" onClick={handleClick()}>
        <img className="paymentOptionButtonImage" src={imageUrl} alt="paymentButton"/>
    </button>
  )
}
