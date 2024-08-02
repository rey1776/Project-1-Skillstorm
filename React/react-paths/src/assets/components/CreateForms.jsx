import React, { useState} from 'react'
import {Link} from 'react-router-dom';


export const Forms = () => {

    const [btnName, setBtnName] = useState("Fetch Data");
    const [mouseIsOver, setMouseIsOver] = useState(false);
    const [mouseIsOver2, setMouseIsOver2] = useState(false);
    const [mouseIsOver3, setMouseIsOver3] = useState(false);
    const [mouseIsOver4, setMouseIsOver4] = useState(false);

    function handleMouseOver(event){

        if(event.target.id==="create")
            
        console.log(event.target.id);
        setMouseIsOver(true);
        console.log("Mouse Over Button");
      }
    
      function handleMouseOut(){
    
        setMouseIsOver(false);
        console.log("Mouse is not Over Button");
      }

      function handleMouseOver2(){

        setMouseIsOver2(true);
        console.log("Mouse Over Button");
      }
    
      function handleMouseOut2(){
    
        setMouseIsOver2(false);
        console.log("Mouse is not Over Button");
      }

      function handleMouseOver3(){

        setMouseIsOver3(true);
        console.log("Mouse Over Button");
      }
    
      function handleMouseOut3(){
    
        setMouseIsOver3(false);
        console.log("Mouse is not Over Button");
      }

      function handleMouseOver4(){

        setMouseIsOver4(true);
        console.log("Mouse Over Button");
      }
    
      function handleMouseOut4(){
    
        setMouseIsOver4(false);
        console.log("Mouse is not Over Button");
      }

  return (
    <>
    

    <div >
      <p></p>
      <h3>Create Data</h3>  
      <Link to={"/forms/location"}> 
        <button style={{backgroundColor: mouseIsOver ? "lightgreen" : "white"}} 
          onMouseOver={handleMouseOver} 
          onMouseOut={handleMouseOut}>
          Create a Location
        </button>
      </Link>;
    
    </div>
    <p></p>
    <div>
    <Link to={"/forms/product"}>
    <button style={{backgroundColor: mouseIsOver2 ? "lightgreen" : "white"}} 
      onMouseOver={handleMouseOver2} 
      onMouseOut={handleMouseOut2}>
        Create a Product
    </button>
    </Link>;
    <p>
    </p>
    </div>
    <Link to={"/forms/warehouse"}>
    <button style={{backgroundColor: mouseIsOver3 ? "lightgreen" : "white"}} 
      onMouseOver={handleMouseOver3} 
      onMouseOut={handleMouseOut3}>
        Create a Warehouse
    </button>
    </Link>;
    <p></p>

    <div>
      <p>
      </p>
      <Link to={"/forms/deleteWarehouse"}>
    <button style={{backgroundColor: mouseIsOver4 ? "lightgreen" : "white"}} 
      onMouseOver={handleMouseOver4} 
      onMouseOut={handleMouseOut4}>
        DELETE
    </button>
    </Link>;
    </div>

    </>
  )
}
