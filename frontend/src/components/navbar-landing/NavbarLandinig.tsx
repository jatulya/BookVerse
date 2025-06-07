import React from 'react'
import Button from '../buttons/Button'

function NavbarLandinig() {
  return (
    <div className='navbar-landing '>
      <div className={`navbar-buttons display-flex flex-row`}> 
        <Button variant='primary'>Login</Button>
        <Button variant='primary'>Sign Up</Button>
      </div>
    </div>
  )
}

export default NavbarLandinig
