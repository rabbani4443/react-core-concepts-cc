import React from "react";
import CardImg from '/img/luahg-at-pain.jpg'

const Card2 =(props)=>{
    console.log(props)
    return(
    <>
    <div className="card bg-base-100 shadow-xl">
    <figure><img src={CardImg} alt="Shoes" /></figure>
    <div className="card-body">
        <h2 className="card-title ">{props.newTitle}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <p className="font-medium">Views : {props.views} </p>
    </div>
    </div>
    </>
    )
};
export default Card2;