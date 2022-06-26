import React from "react"
import dd from "./data.js"
import MainCon from "./moudules/MainCon.js"
import Header from "./moudules/NavBar.js"
import "./App.css"

export default function App(){
    const map = dd.map((x)=>{
        return(
        <MainCon item = {x}/>)
        // {...x}
    })
    return(
    <div className="body">
        <Header />
        <div className="main">{map}</div>
    </div>
    )
}