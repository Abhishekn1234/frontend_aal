import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { servicesData } from "../../Services/servicesData";
import { slugify } from "../../Services/slug";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [logoHovered, setLogoHovered] = useState(false);

  const navigate = useNavigate();

  /* SCROLL EFFECT */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* AUTO CLOSE ON RESIZE */
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

  /* DROPDOWN CLICK MOBILE */
  const handleServicesClick = () => {
    if (window.innerWidth < 768) {
      setServicesOpen(!servicesOpen);
    }
  };

  /* ITEM CLICK */
  const handleItemClick = (category:any, item:any) => {
    const categorySlug = slugify(category);
    const itemSlug = slugify(item);

    navigate(`/services/${categorySlug}/${itemSlug}`);

    setOpen(false);
    setServicesOpen(false);
  };

  const logoStyle = {
    width: "58px",
    height: "58px",
    borderRadius: "12px",
    boxShadow: logoHovered
      ? "0 6px 12px rgba(0, 0, 0, 0.2)"
      : "0 4px 6px rgba(0, 0, 0, 0.1)",
    transform: logoHovered ? "scale(1.1) rotate(5deg)" : "scale(1) rotate(0deg)",
    transition: "all 0.3s ease",
    cursor: "pointer",
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed w-full z-[9999] top-0 flex justify-center transition-all duration-500">
        <div
          className={`relative max-w-7xl w-full mx-4 md:mx-8 rounded-xl transition-all duration-500
            flex justify-between items-center px-6 py-4 mt-4
            ${scrolled ? "bg-black shadow-lg" : "shadow-md border border-gray-800"}
            backdrop-blur-xl`}
        >
          {/* LOGO */}
          <Link
            to="/"
            className="flex items-center gap-3"
            onMouseEnter={() => setLogoHovered(true)}
            onMouseLeave={() => setLogoHovered(false)}
            onClick={() => setOpen(false)}
          >
            <img src="3.svg" style={logoStyle} alt="Aalizah Technology Logo" />
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-3xl text-white hover:text-blue-300 transition-transform active:scale-90"
            onClick={() => setOpen(!open)}
          >
            {open ? "✕" : "☰"}
          </button>

          {/* NAV LINKS */}
          <div
            className={`
              md:flex md:items-center md:gap-2
              absolute md:static top-full left-0 right-0
              transition-all duration-300 ease-in-out
              ${open ? "opacity-100 max-h-screen" : "opacity-0 max-h-0 md:opacity-100 md:max-h-none"}
              overflow-hidden md:overflow-visible
              bg-black/95 md:bg-transparent backdrop-blur-lg md:backdrop-blur-none
              rounded-b-2xl md:rounded-none
            `}
          >
            <ul className="flex flex-col md:flex-row md:items-center md:gap-2 text-white font-semibold py-4 md:py-0">

              <li>
                <Link
                  to="/about"
                  className="block px-6 py-3 text-lg hover:text-blue-300 transition-all"
                  onClick={() => setOpen(false)}
                >
                  About
                </Link>
              </li>

              {/* SERVICES */}
              <li
                className="relative"
                onMouseEnter={() => window.innerWidth >= 768 && setServicesOpen(true)}
                onMouseLeave={() => window.innerWidth >= 768 && setServicesOpen(false)}
              >
                <button
                  className="flex items-center gap-1 px-6 py-3 text-lg hover:text-blue-300 transition-all"
                  onClick={handleServicesClick}
                >
                  Services
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {/* DROPDOWN */}
                <div
                  className={`
                    bg-white text-black rounded-2xl shadow-2xl
                    transition-all duration-300 ease-in-out
                    ${servicesOpen ? "opacity-100 visible scale-100 max-h-[1200px]" : "opacity-0 invisible scale-95 max-h-0"}
                    md:absolute md:top-full md:left-1/2 md:-translate-x-1/2 md:mt-2
                    md:w-[95vw] md:max-w-6xl overflow-hidden
                  `}
                >
                  <div className="p-6 md:p-8 bg-gray-50 max-h-[60vh] overflow-y-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                      {servicesData.map((cat, idx) => (
                        <div key={idx}>
                          <h3 className="font-extrabold text-yellow-500 text-sm md:text-base mb-2 tracking-wide">
                            {cat.title}
                          </h3>

                          <hr className="border-yellow-500 mb-3" />

                          <ul className="text-gray-700 text-xs md:text-sm space-y-1">
                            {cat.items.map((item, i) => (
                              <li
                                key={i}
                                className="cursor-pointer hover:text-blue-600"
                                onClick={() => handleItemClick(cat.title, item)}
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

              <li>
                <Link
                  to="/career"
                  className="block px-6 py-3 text-lg hover:text-blue-300 transition-all"
                  onClick={() => setOpen(false)}
                >
                  Career
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="block px-6 py-3 text-lg hover:text-blue-300 transition-all"
                  onClick={() => setOpen(false)}
                >
                  Contact
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>

      {/* MOBILE OVERLAY — DOES NOT BLOCK NAVBAR ANYMORE */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-[5000] md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}
