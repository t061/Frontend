import React,{useState} from "react";
import {MdLocationPin} from "react-icons/md"
import {FaStar} from "react-icons/fa"
import "./Main.css"

export default function Main(props){
    const [data,setdata] = useState(props)
    return(
      <div className="card">
          <div >
              <img id="image" src={data.item.img} alt="image" />
          </div>
          <div className="content">
            <div className="loc">
                <span id="logo"> <MdLocationPin /> </span>
                <span id="name">{data.item.name}</span>
            </div>
            <div className="about">
                {data.item.exp}
            </div>
            <div className="foot">
                <div id="price">{data.item.price}</div>
                <div> <FaStar id="star"/> {data.item.rating}</div>
            </div>
          </div>
      </div>
    )
}