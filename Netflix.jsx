import React from "react";

 function Series(props)
 {
    return (
        <>
    <div className="box1">
        <div className="box2">
         <img src={props.image} alt="This is an image" className='image'></img>
         <div className="box3">
         <span className="Name">{props.name}</span>
         <h3>{props.title}</h3>
         <a href={props.link} target="_blank">
            <button className="butt">Watch now</button>
         </a>
         </div>
        </div>
    </div>
    </>
    );
 }
 export default Series;
