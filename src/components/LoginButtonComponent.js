import React from 'react'

export default function LoginButtonComponent(imageUrl, handleClick) {
  return (
    <button className="loginTypeButton" onClick={handleClick()}>
        <img className="loginTypeButtonImage" src={imageUrl} alt="Login Button"/>
    </button>
  )
}
