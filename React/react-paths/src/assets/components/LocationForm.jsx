import React from 'react'
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

export const LocationForm = () => {

//const [isSubmitted, setIsSubmitted] = useState(false);
const addressRef = useRef(null);
const cityRef = useRef(null);
const stateRef = useRef(null);
const countryRef = useRef(null);
const location = { 
                    address: '', 
                    city: '', 
                    state: '',
                    country: ''
                    };

const url = ["http://localhost:9090/warehouse", "http://localhost:9090/product", "http://localhost:9090/location"];
function postToBackEnd() {
    
    axios.post(url[2], location)
    .then(res => console.log(res))
    .catch(err => console.log(err));

}

const handleSubmit =  (event) =>{
    //event.preventDefault();
    if(addressRef.current !== null){
        console.log("Address: " + addressRef.current.value);
        location.address = addressRef.current.value;}
    if(cityRef.current !== null){
        console.log("City : " + cityRef.current.value);
        location.city = cityRef.current.value;} 
    if(stateRef.current !== null){
        console.log(" : " + stateRef.current.value);
        location.state = stateRef.current.value;}
    if(stateRef.current !== null){
        console.log(" : " + countryRef.current.value);
        location.country = countryRef.current.value;}
    
    console.log(location); 
    postToBackEnd();
}

    return (
        <>
        <p></p>
        <p></p>
    <form onSubmit={handleSubmit}>
    <h3>Create a Location</h3>
        <div className="mb3">
            <label htmlFor="address" className="form-label">Address</label>
            <input ref={addressRef} id="address" type="text" className="form-control" />
        </div>
        <div className="mb-3">
            <label htmlFor="city" className="form-label">City</label>
            <input ref={cityRef} id="city"type="text" className="form-control" />
        </div>
        <div className="mb-3">
            <label htmlFor="state" className="form-label">State</label>
            <input ref={stateRef}id="state"type="text" className="form-control" />
        </div>
        <div className="mb-3">
            <label htmlFor="country" className="form-label">Country</label>
            <input ref={countryRef}id="country"type="text" className="form-control" />
        </div>
        <div>
            <button className="btn btn-primary" type="submit">Submit</button>
        </div>

    </form>
    </>
  )
}

  