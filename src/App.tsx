import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import MovieDetails from "./pages/MovieDetails";

function App() {
 return (
   <>
     <Navbar />
     <Routes>
       <Route path="/" element={<Home />}></Route>
       <Route path="/movies/:id" element={<MovieDetails />}></Route>
     </Routes>
   </>  
 );
}

export default App
