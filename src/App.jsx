import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/home/HomePage"
import CartPage from "./pages/CartPage/CartPage"
import { ToastContainer } from "react-toastify"

import ProductDetail from "./components/productdetails/ProductDetail"








const App = () => {
  return (
    <div>
        
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/cart" element={<CartPage />} />
          <Route path="/productdetails/:id" element={<ProductDetail />} />
          
          
        </Routes>
        <ToastContainer />
        </BrowserRouter>
      
    </div>
  )
}

export default App