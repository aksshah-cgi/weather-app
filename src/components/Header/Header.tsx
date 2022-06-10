import React from 'react'
import './Header.css'

const Header:React.FC = () => {
  return (
    <div className="header">
     <h2>Welcome to</h2>
     <h1 className='headline'>3-Day Weather Forecast</h1>
    </div>
  )
}

export default Header;