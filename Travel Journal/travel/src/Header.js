import React,{useState} from "react"
import {FaGlobeAfrica} from "react-icons/fa"
import "./Header.css"

export default function Header(){
    return(
        <div className="nav">
            <div className="navCont">
             <FaGlobeAfrica id="navIcon" size={"28px"}/><span id="navHead">travelJournal</span>
            </div>
        </div>
    )
}