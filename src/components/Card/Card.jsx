import React from "react";
import Title from "./Title";
import Images from "./Images";
import Views from "./Views";


const Card = () =>{
    return(
 <>
    <div className="card  bg-base-100 shadow-xl">
    <Images></Images>
        <div className="card-body">
            <Title></Title>
            <Views></Views>
        </div>
    </div>
</>
    )
};

export default Card;