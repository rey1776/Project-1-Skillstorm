import {Home, Error, Warehouse, Location, Product} from './pages'
import {Footer, Navbar, Form, Forms, LocationForm} from './assets/components'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import { ProductForm } from './assets/components/ProductForm'
import { DeleteWarehouse } from './assets/components/DeleteWarehouse'

function App() {
  
  return (
    <>

    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/location" element={<Location />} />
      <Route path="/product" element={<Product />} />
      <Route path="/warehouse" element={<Warehouse />} />
      <Route path="/warehouse/:id" element={<Warehouse />} />
      <Route path="/forms/warehouse" element ={<Form />}/> 
      <Route path="/forms" element ={<Forms />}/>
      <Route path="/forms/warehouse" element ={<Form />}/>
      <Route path="/forms/location" element ={<LocationForm />}/>
      <Route path="/forms/product" element ={<ProductForm />}/>
      <Route path="/forms/deleteWarehouse" element ={<DeleteWarehouse />}/>
     
      <Route path="*" element={<Error/>} />
    </Routes>
  
    <footer>
    <Footer />
    </footer>
  
    </>
  )
}

export default App
