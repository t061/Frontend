import React from "react"
import "./MainCon.css"
import {FaStar} from "react-icons/fa"

export default function MainCon(props){
    let badge
    if(props.item.spots==0){
        badge = "SOLD"
    }
    return(
            
            <div className="card">
                {badge && <div id="spot">{badge}</div>}
                {/* {props.spots==0 && <div id="spot">SOLD</div>}  */}
                <img src={props.item.img} id="cardimg"/>
                <div className="rating">
                    <FaStar id="star"/>
                    <sub id="sub">{props.item.rating}</sub>
                    <sub id="mode">&#8226;{props.item.place}</sub>
                </div>
                <h3 id="name">{props.item.name}</h3>
                <p id="about">{props.item.about}</p>
                <div id="rate"><strong>${props.item.charge}</strong>/person</div>
            </div>
              
    )
}