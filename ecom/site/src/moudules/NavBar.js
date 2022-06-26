import React from "react"
import "./NavBar.css"
import {FaAirbnb,FaMailchimp,FaUserAlt} from "react-icons/fa"

export default function NavBar(){
    return(
        <div className="header">
            <div className="leftnav">
                <FaAirbnb id="icon" size={"42px"}/>
                <h2 id="logohead">VALEK</h2>
            </div>
            <div className="center">
                <ul>
                    <li className="firstRef"><a href='#home'> Home </a></li>
                    <li className="secondRef"><a href='#prod'> Products </a></li>
                    <li className="thirdRef"><a href='#review'> Reviews </a></li>
                    <li className="fourthRef"><a href='#abt'> About </a></li>
                </ul>
            </div>
            <div className="rightnav">
                <FaMailchimp id="mail" size={"28px"}/>
                <FaUserAlt id="user" size={"28px"}/>
            </div>
        </div>
    )
}