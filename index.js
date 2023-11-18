import React from "react";
import ReactDOM  from "react-dom";
import Series from "./Netflix";
import './index.css';
import Sdata from './Sdata';
console.log(Sdata[0]);
ReactDOM.render(
  <>
  <nav className="Heading">
  <h1 className='head'>Netflix Top 6 series are here</h1>
  </nav>
  {/* This is  the use of array map */}
  {Sdata.map(function ncard(val)
  {
    return(
      <Series
      image={val.image}
      name={val.name}
      title={val.title}
      link={val.link}
      />
    );
  }
  )
  }
  {/* <Series 
    image={Sdata[0].image}
    title={Sdata[0].title}
    link={Sdata[0].link}
  />
  <Series 
    image={Sdata[1].image}
    title={Sdata[1].title}
    link={Sdata[1].link}
  />
  <Series 
   image={Sdata[2].image} 
   title={Sdata[2].title}
   link={Sdata[2].link}  
  />
  <Series 
   image={Sdata[3].image} 
   title={Sdata[3].title} 
   link={Sdata[3].link}
  />
  <Series 
    image={Sdata[4].image} 
    title={Sdata[4].title} 
    link={Sdata[4].link} 
  />
  <Series 
    image={Sdata[5].image} 
    title={Sdata[5].title} 
    link={Sdata[5].link}   */}

  />
    </>
,document.getElementById("root"));
