import {useRef } from 'react';
import axios from 'axios';

export const ProductForm = () => {
 
const url = ["http://localhost:9090/warehouse", "http://localhost:9090/product", "http://localhost:9090/location"];
const productDescriptionRef = useRef(null);
const productNameRef = useRef(null);
const warehouseIDRef = useRef(null);
const product = { 
                    productName: '', 
                    productDescription: '',
                    warehouse:{ id: 0
                    } };

function postToBackEnd() {
    
    axios.post(url[1], product)
    .then(res => console.log(res))
    .catch(err => console.log(err));
}

const handleSubmit =  (event) =>{
    //event.preventDefault();
    if(productNameRef.current !== null){
        console.log("Product Name: " + productNameRef.current.value);
        product.productName = productNameRef.current.value;}
    if(productDescriptionRef.current !== null){
        console.log("City : " + productDescriptionRef.current.value);
        product.productDescription = productDescriptionRef.current.value;} 
    if(warehouseIDRef.current !== null){
        console.log(" : " + warehouseIDRef.current.value);
        product.warehouse.id = warehouseIDRef.current.value;}
    
    console.log(product); 
    postToBackEnd();
}
    return (
        <>
        <p></p>
    <form onSubmit={handleSubmit}>
    <h3>Create a Product</h3>
        <div className="mb3">
            <label htmlFor="productName" className="form-label">Name</label>
            <input ref={productNameRef} id="productName" type="text" className="form-control" />
        </div>
        <div className="mb-3">
            <label htmlFor="productDescription" className="form-label">Description</label>
            <input ref={productDescriptionRef} id="productDescription"type="text" className="form-control" />
        </div>
        <div className="mb-3">
            <label htmlFor="warehouseID" className="form-label">Warehouse ID</label>
            <input ref={warehouseIDRef}id="warehouseID"type="text" className="form-control" />
        </div>
        <div>
            <button className="btn btn-primary" type="submit">Submit</button>
        </div>

    </form>
    </>
  )
}

  