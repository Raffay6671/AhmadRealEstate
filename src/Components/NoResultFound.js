import React from 'react'
import '../Styles/NoResultFound.css'

export default function NoResultFound(props) {
  return (
    <div className='container'>
        <h1 className='noResultFoundHeading'>{props.text} </h1>
      
      
    </div>
  )
}
