import React from 'react'
import './NavBar.css'
import {FaUserAlt} from 'react-icons/fa'

export default function NavBar() {
  return (
    <div className='navOutline'>
        <div className="brand">
            <span id="brandLogo"><FaUserAlt /></span>
            <span id="brandName">Valek</span>
        </div>
        <div className="navOptions">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#reviews">Reviews</a></li>
                <li><a href="#products">Products</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        </div>
    </div>
  )
}
