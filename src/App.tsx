import {  Routes, Route } from "react-router-dom";
import Navbar from "./components/Layout/Header/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Layout/Footer/Footer";
import About from "./pages/About";
import Services from "./pages/Services";
import Career from "./pages/Carrer";
import Contact from "./pages/Contact";
import ServiceItemPage from "./pages/ServiceItemPage";
import CategoryPage from "./pages/CategoryPage";

function App() {
  return (
    <>
      
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/services/:categorySlug" element={<CategoryPage />} />
        <Route path="/services/:categorySlug/:itemSlug" element={<ServiceItemPage />} />
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



