import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Service from "./Components/Pages/Service";
import Register from "./Components/auth/Register";
import Login from "./Components/auth/Login";


function App(){
  return(
    <>
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<Service />} />  
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route/>
        </Routes>
     </BrowserRouter>
    </>
  )
}
export default App