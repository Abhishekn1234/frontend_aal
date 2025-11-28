import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { servicesData } from "../../Services/servicesData";
import { PhoneCallIcon, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [logoHovered, setLogoHovered] = useState(false);

  const navigate = useNavigate();
// const handleServiceScroll = (title: string) => {
//   const elementId = title.replace(/\s+/g, "-").toLowerCase();
//   const element = document.getElementById(elementId);
//   if (element) {
//     element.scrollIntoView({ behavior: "smooth", block: "start" });
//   }
//   setOpen(false);
//   setServicesOpen(false);
// };

  // Handle scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on window resize
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

  // Toggle services dropdown (mobile only)
  const handleServicesClick = () => {
    if (window.innerWidth < 768) {
      setServicesOpen(!servicesOpen);
    }
  };

  // Navigate to Services page and close menus
 const handleServiceNavigationClick = (title: string) => {
  navigate("/services");
  console.log(title)
  setOpen(false);
  setServicesOpen(false);
};

  // const handleServiceItemClick = () => {
  //   if (window.innerWidth < 768) {
  //     setOpen(false);
  //     setServicesOpen(false);
  //   }
  // };

  const logoStyle = {
    width: "58px",
    height: "58px",
    borderRadius: "12px",
    // objectFit: "cover",
    boxShadow: logoHovered
      ? "0 6px 12px rgba(0, 0, 0, 0.2)"
      : "0 4px 6px rgba(0, 0, 0, 0.1)",
    transform: logoHovered ? "scale(1.1) rotate(5deg)" : "scale(1) rotate(0deg)",
    transition: "all 0.3s ease",
    cursor: "pointer",
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
        <Link
  to="/"
  className="flex items-center gap-3"
  onMouseEnter={() => setLogoHovered(true)}
  onMouseLeave={() => setLogoHovered(false)}
  onClick={() => setOpen(false)}
>
  <img src="3.svg" style={logoStyle} alt="Aalizah Technology Logo" />
</Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-white hover:text-blue-300 transition-transform active:scale-90"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>

        {/* Navigation Menu */}
        <div
          className={`md:flex md:items-center md:gap-2
            absolute md:static top-full left-0 right-0
            transition-all duration-300 ease-in-out z-50
            ${open ? "max-h-screen opacity-100 pointer-events-auto" : "max-h-0 opacity-0 pointer-events-none md:opacity-100 md:max-h-none md:pointer-events-auto"}
            overflow-hidden md:overflow-visible
            bg-black/95 md:bg-transparent backdrop-blur-lg md:backdrop-blur-none
            rounded-b-2xl md:rounded-none`}
        >
          <ul className="flex flex-col md:flex-row md:items-center md:gap-2 font-semibold text-white py-4 md:py-0">
            {/* About */}
            <li>
              <Link
                to="/about"
                className="block px-6 py-3 text-lg hover:text-blue-300 transition-all hover:tracking-wide"
                onClick={() => setOpen(false)}
              >
                About
              </Link>
            </li>

            {/* Services Dropdown */}
            <li
              className="relative"
              onMouseEnter={() => window.innerWidth >= 768 && setServicesOpen(true)}
              onMouseLeave={() => window.innerWidth >= 768 && setServicesOpen(false)}
            >
              <button
                className="flex items-center gap-1 px-6 py-3 text-lg hover:text-blue-300 transition-all hover:tracking-wide w-full md:w-auto"
                onClick={handleServicesClick}
                aria-expanded={servicesOpen}
              >
                Services
                <ChevronDown
                  size={16}
                  className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {/* Dropdown Menu */}
              <div
                className={`bg-white text-black rounded-2xl shadow-2xl border border-blue-200
                  transition-all duration-300 ease-in-out
                  ${servicesOpen ? "opacity-100 visible scale-100 max-h-[1000px]" : "opacity-0 invisible scale-95 max-h-0"}
                  md:absolute md:top-full md:left-1/2 md:-translate-x-1/2 md:mt-2
                  md:w-[95vw] md:max-w-6xl md:mx-4
                  overflow-hidden`}
                style={{ zIndex: 2000 }}
              >
<div className="p-6 md:p-8">
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
    {servicesData.map((category, idx) => (
      <div
        key={idx}
        className="cursor-pointer"
        onClick={() => handleServiceNavigationClick(category.title)}
      >
        {/* Title */}
        <h3 className="font-bold text-yellow-400 text-sm mb-1 text-center">
          {category.title}
        </h3>

        {/* Horizontal line */}
        <hr className="border-yellow-400 mb-1" />

        {/* Items as bullet points */}
        <ul className="list-disc list-inside text-gray-700 text-xs leading-snug space-y-1">
          {category.items.map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</div>








                {/* Mobile "View All" Button */}
                {/* <div className="mt-6 md:hidden">
                  <button
                    onClick={handleServiceNavigationClick(category.title)}
                    className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    View All Services
                  </button>
                </div> */}
              </div>
            </li>

            {/* Career */}
            <li>
              <Link
                to="/career"
                className="block px-6 py-3 text-lg hover:text-blue-300 transition-all hover:tracking-wide"
                onClick={() => setOpen(false)}
              >
                Career
              </Link>
            </li>

            {/* Contact */}
            <li>
              <Link
                to="/contact"
                className="block px-6 py-3 text-lg hover:text-blue-300 transition-all hover:tracking-wide"
                onClick={() => setOpen(false)}
              >
                Contact
              </Link>
            </li>

            {/* Speak Now Button */}
           <li className="px-4 py-2 md:py-0">
  <a
    href="https://wa.me/971502037669"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center gap-2 w-full md:w-auto px-5 py-2.5 
      rounded-xl bg-green-500 text-white text-sm font-semibold
      shadow-md hover:bg-green-600 hover:shadow-lg 
      active:scale-95 transition-all border border-green-600"
  >
    <PhoneCallIcon size={16} />
    Speak to Us
  </a>
</li>

          </ul>
        </div>
      </div>

      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/20 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </nav>
  );
}
