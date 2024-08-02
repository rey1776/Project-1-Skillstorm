import React from 'react';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

export const Form = () => {

    //const [isSubmitted, setIsSubmitted] = useState(false);
    const nameRef = useRef(null);
    const capacityRef = useRef(null);
    const locationIdRef = useRef(null);
    const warehouse = { name: '', 
                        capacity: '0', 
                        location:{ id: 0
                        } };

    useEffect(() =>{
        console.log("Rendered again.");

    },[])

    const url = ["http://localhost:9090/warehouse", "http://localhost:9090/product", "http://localhost:9090/location"];
    function postToBackEnd() {
        
        axios.post(url[0], warehouse)
        .then(res => console.log(res))
        .catch(err => console.log(err));

    }

    const handleSubmit =  (event) =>{
        //event.preventDefault();
        if(nameRef.current !== null){
            console.log("Warehouse Name: " + nameRef.current.value);
            warehouse.name = nameRef.current.value;}
        if(nameRef.current !== null){
            console.log("Capacity : " + capacityRef.current.value);
            warehouse.capacity = capacityRef.current.value;} 
        if(nameRef.current !== null){
            console.log("Location ID : " + locationIdRef.current.value);
            warehouse.location.id = locationIdRef.current.value;}
        
        console.log(warehouse); 
        postToBackEnd();
    }

  return (
    
    <form onSubmit={handleSubmit}>
        <p></p>
        <h3>Create a Warehouse</h3>
        <div className="mb3">
            <label htmlFor="name" className="form-label">Warehouse name</label>
            <input ref={nameRef} id="name" type="text" className="form-control" />
        </div>
        <div className="mb-3">
            <label htmlFor="capacity" className="form-label">Capacity</label>
            <input ref={capacityRef} id="capacity"type="number" className="form-control" />
        </div>
        <div className="mb-3">
            <label htmlFor="location" className="form-label">Location ID</label>
            <input ref={locationIdRef}id="location"type="number" className="form-control" />
        </div>
        <div>
            <button className="btn btn-primary" type="submit">Submit</button>
        </div>

    </form>
  )
}
