import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
 return (
   <>
     <Navbar />
     <Routes>
       <Route path="/" element={<Home />}></Route>
     </Routes>
   </>
 );
}

export default App
