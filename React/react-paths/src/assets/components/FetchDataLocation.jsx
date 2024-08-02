import axios from 'axios';
import React, {useEffect, useState} from 'react'

export const FetchDataLocation = () => {

    
    const[data,setData] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [btnName, setBtnName] = useState("Fetch Data");
    const [mouseIsOver, setMouseIsOver] = useState(false);
    const url = ["http://localhost:9090/warehouse", "http://localhost:9090/product", "http://localhost:9090/location"];

    function submitClicked() {
        if(loaded){
            setLoaded(false);
            setBtnName("Fetch Data");
        }
        else{
            getData();
        }
    }

    async function getData() {
        axios.get(url[2])
        .then(res => {setData(res.data);
                        setLoaded(true)})
        .catch(err => console.log(err));
        setBtnName("Hide Data");
      }

  function handleMouseOver(){

    setMouseIsOver(true);
    console.log("Mouse Over Button");
  }

  function handleMouseOut(){

    setMouseIsOver(false);
    console.log("Mouse is not Over Button");
  }

  return (
    <>
    <div className='container'></div>
    <button
      style={{backgroundColor: mouseIsOver ? "black" : "white"}} 
      onClick={submitClicked} 
      onMouseOver={handleMouseOver} 
      onMouseOut={handleMouseOut}
      >{btnName}
    </button>
    
        <div className='mt-3'>
            <h3>Warehouse Data</h3>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Location ID</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Country</th>
                    </tr>
                </thead>
                <tbody>
                    
                        {loaded ? data.map(
                            location => (
                            <tr key={location.id}> 
                                <td>{location.id}</td>
                                <td>{location.address}</td>
                                <td>{location.city}</td>
                                <td>{location.state}</td>
                                <td>{location.country}</td>
                            </tr>
                        )) : 
                        (<tr><td colSpan='5'Loading>Must fetch data...</td></tr>) 
                    }
                </tbody>
            </table>
        </div>
    </>
  )
}
