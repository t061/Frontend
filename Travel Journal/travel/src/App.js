import React,{useState} from "react";
import Header from "./Header.js"
import Quote from "./Quote.js";
import Main from "./Main.js";
import dd from "./data.js"

export default function App(){
    const [data,setdata] = useState(dd)
    const d = data.map(x =>{
        return(
        <Main item={x} />
    )}) 
    return(
        <div className="window">
            <div className="head">
                <Header />
            </div>
            <div className="mid">
                <Quote />
            </div>
            <div className="body">
                {d}
            </div>
        </div>
    )
}