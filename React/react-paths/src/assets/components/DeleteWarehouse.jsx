import React from 'react'

export const DeleteWarehouse = () => {


const idRef = useRef(-1);
let idToDelete = -1;



const url = ["http://localhost:9090/warehouse", "http://localhost:9090/product", "http://localhost:9090/location"];
function postToBackEnd() {
    
    axios.delete(url[0], 'http://localhost:9090/warehouse/'+ isToDelete)
    .then(res => console.log(res))
    .catch(err => console.log(err));
}

const handleSubmit =  (event) =>{
    //event.preventDefault()
    //console.log(location); 
    if(idRef !== null)
    idToDelete = idRef.current.value;
    postToBackEnd();
}

  return (<>
  <p></p>
  <p></p>
<form onSubmit={handleSubmit}>
<h3>Delete A Warehouse</h3>
  <div className="mb3">
      <label htmlFor="idToDelete" className="form-label">Warehouse ID</label>
      <input ref={idRef} id="idToDelete" type="number" className="form-control" />
  </div>
  
  <div>
      <button className="btn btn-primary" type="submit">Submit</button>
  </div>

</form>
</>
)
}
