import React from 'react'

export default function AddButton({buttonText, onClick}) {
  return (
    <button className="add-button" onClick={onClick}>
        {buttonText}
    </button>
  )
}
