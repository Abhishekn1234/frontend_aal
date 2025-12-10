import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Layout/Header/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Layout/Footer/Footer";
import About from "./pages/About";
import Services from "./pages/Services";
import Career from "./pages/Carrer";
import Contact from "./pages/Contact";
import ServiceItemPage from "./pages/ServiceItemPage";
import CategoryPage from "./pages/CategoryPage";
import './App.css'
import { useEffect, useRef } from "react";
import SplashCursor from "./components/SplashCursor";





function App() {


const posRef = useRef({ x: 50, y: 50 });

useEffect(() => {
  const handleMouseMove = (e: MouseEvent) => {
    posRef.current = {
      x: (e.clientX / window.innerWidth) * 100,
      y: (e.clientY / window.innerHeight) * 100,
    };
  };
  window.addEventListener("mousemove", handleMouseMove);
  return () => window.removeEventListener("mousemove", handleMouseMove);
}, []);


  return (
    <>
 <SplashCursor
        BACK_COLOR={{ r: 0, g: 0, b: 0 }} // background black
        COLOR_UPDATE_SPEED={10}
      />
    <Navbar />
     
     
 <div className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/:categorySlug" element={<CategoryPage />} />
          <Route path="/services/:categorySlug/:itemSlug" element={<ServiceItemPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
  <Footer />

     
    </>
  );
}

export default App;
