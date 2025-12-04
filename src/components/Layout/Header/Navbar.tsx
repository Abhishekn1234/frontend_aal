import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { servicesData } from "../../Services/servicesData";
import { ChevronDown } from "lucide-react";
import { slugify } from "../../Services/slug";

export default function Navbar() {
  const [open, setOpen] = useState(false); // Mobile menu
  const [servicesOpen, setServicesOpen] = useState(false); // Services dropdown
  const [scrolled, setScrolled] = useState(false);
  const [logoHovered, setLogoHovered] = useState(false);

  const navigate = useNavigate();

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu & dropdown on resize >= 768
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
        setServicesOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const logoStyle = {
    width: "58px",
    height: "58px",
    borderRadius: "12px",
    boxShadow: logoHovered
      ? "0 6px 12px rgba(0,0,0,0.2)"
      : "0 4px 6px rgba(0,0,0,0.1)",
    transform: logoHovered ? "scale(1.1) rotate(5deg)" : "scale(1) rotate(0deg)",
    transition: "all 0.3s ease",
    cursor: "pointer",
  };

  // Unified link click handler
  const handleLinkClick = (path: string) => {
    navigate(path);
    setOpen(false);
    setServicesOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 top-0 flex justify-center transition-all duration-500">
      <div
        className={`relative max-w-7xl w-full mx-4 md:mx-8 rounded-xl transition-all duration-500
          flex justify-between items-center px-6 py-4 mt-4
          ${scrolled ? "bg-black shadow-lg" : "shadow-md border border-gray-800"}
          backdrop-blur-xl`}
      >
        {/* Logo */}
        <div
          onClick={() => handleLinkClick("/")}
          onMouseEnter={() => setLogoHovered(true)}
          onMouseLeave={() => setLogoHovered(false)}
        >
          <img src="3.svg" style={logoStyle} alt="Logo" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-white hover:text-blue-300 transition-transform active:scale-90"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "✕" : "☰"}
        </button>

        {/* Navigation Menu */}
        <div
          className={`md:flex md:items-center md:gap-2
            absolute md:static top-full left-0 right-0
            transition-all duration-300 ease-in-out z-50
            ${open ? "max-h-screen opacity-100" : "max-h-0 opacity-0 md:opacity-100 md:max-h-none"}
            overflow-hidden md:overflow-visible
            bg-black/95 md:bg-transparent backdrop-blur-lg md:backdrop-blur-none
            rounded-b-2xl md:rounded-none`}
        >
          <ul className="flex flex-col md:flex-row md:items-center md:gap-2 font-semibold text-white py-4 md:py-0">
            {/* About */}
            <li>
              <button
                className="block px-6 py-3 text-lg hover:text-blue-300 w-full text-left md:text-center"
                onClick={() => handleLinkClick("/about")}
              >
                About
              </button>
            </li>

            {/* Services Dropdown */}
            <li
              className="relative"
              onMouseEnter={() => window.innerWidth >= 768 && setServicesOpen(true)}
              onMouseLeave={() => window.innerWidth >= 768 && setServicesOpen(false)}
            >
              <button
                className="flex items-center gap-1 px-6 py-3 text-lg hover:text-blue-300 transition-all w-full md:w-auto justify-between"
                onClick={() => setServicesOpen((prev) => !prev)}
              >
                Services
                <ChevronDown
                  size={16}
                  className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {/* Dropdown Content */}
              <div
                className={`bg-white text-black rounded-2xl shadow-2xl 
                  transition-all duration-300 ease-in-out
                  ${servicesOpen ? "opacity-100 visible scale-100 max-h-[1000px]" : "opacity-0 invisible scale-95 max-h-0"}
                  md:absolute md:top-full md:left-1/2 md:-translate-x-1/2 md:mt-2
                  md:w-[95vw] md:max-w-6xl overflow-hidden`}
                style={{ zIndex: 2000 }}
              >
                <div className="p-6 md:p-8 bg-gray-50">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {servicesData.map((category, idx) => (
                      <div key={idx}>
                        <h3 className="font-extrabold text-yellow-500 text-sm md:text-base mb-2 tracking-wide">
                          {category.title}
                        </h3>
                        <hr className="border-yellow-500 mb-3" />
                        <ul className="list-disc list-inside text-gray-700 text-xs md:text-sm leading-snug space-y-1">
                          {category.items.map((item, i) => (
                            <li
                              key={i}
                              className="cursor-pointer hover:text-blue-600"
                              onClick={() =>
                                handleLinkClick(`/services/${slugify(category.title)}/${slugify(item)}`)
                              }
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </li>

            {/* Career */}
            <li>
              <button
                className="block px-6 py-3 text-lg hover:text-blue-300 w-full text-left md:text-center"
                onClick={() => handleLinkClick("/career")}
              >
                Career
              </button>
            </li>

            {/* Contact */}
            <li>
              <button
                className="block px-6 py-3 text-lg hover:text-blue-300 w-full text-left md:text-center"
                onClick={() => handleLinkClick("/contact")}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>

    
    </nav>
  );
}

