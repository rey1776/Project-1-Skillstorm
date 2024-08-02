import axios from 'axios';
import React, { useState} from 'react'

export const FetchData = () => {

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
        axios.get(url[0])
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
      >{btnName}</button>
         
        <div className='mt-3'>
            <h3>Warehouse Data</h3>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Warehouse Name</th>
                        <th>Capacity</th>
                        <th>Location ID</th>
                    </tr>
                </thead>
                <tbody>
                    
                        {loaded ? data.map(
                            warehouse => (
                            <tr key={warehouse.id}> 
                                <td>{warehouse.name}</td>
                                <td>{warehouse.capacity}</td>
                                <td>{warehouse.location}</td>
                            </tr>
                        )) : 
                        (<tr><td colSpan='3'Loading>Must fetch data...</td></tr>) 
                    }
                </tbody>
            </table>
        </div>
    </>
  )
}


