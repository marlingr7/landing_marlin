import React from 'react'

export const GeneralButton = ({title, onClick}) => {
  return (
    <button style={{background:'#0CBBC7', color: '#fff', display: 'flex', justifyContent: 'center', padding: '10px'}} onClick={onClick}>
        {title}
    </button>
  )
}
