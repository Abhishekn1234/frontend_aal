import {  Routes, Route } from "react-router-dom";
import Navbar from "./components/Layout/Header/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Layout/Footer/Footer";
import About from "./pages/About";
import Services from "./pages/Services";
import Career from "./pages/Carrer";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/career" element={<Career/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <Footer/>
    </>
  );
}

export default App;



