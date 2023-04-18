import React from 'react'
import './NavbarListContainer.css'

const NavbarListContainer = (props) => {
  return (
    <h2 className='nb-item'> {props.greeting} </h2>
  )
}

export default NavbarListContainer