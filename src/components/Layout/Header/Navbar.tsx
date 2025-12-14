import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { servicesData } from "../../Services/servicesData";
import { ChevronDown, Menu, X } from "lucide-react";
import { slugify } from "../../Services/slug";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoHovered, setLogoHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const navigate = useNavigate();
  const servicesRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const servicesButtonRef = useRef<HTMLButtonElement>(null);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on resize to desktop
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

  // Close menu when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (open && menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
        setServicesOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  // Close services dropdown when clicking outside on desktop
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesOpen && 
        servicesRef.current && 
        servicesButtonRef.current &&
        !servicesRef.current.contains(event.target as Node) &&
        !servicesButtonRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
      }
    };

    if (servicesOpen && !isMobile) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [servicesOpen, isMobile]);

  const logoStyle = {
    width: "80px",
    height: "80px",
    borderRadius: "12px",
    boxShadow: logoHovered
      ? "0 6px 12px rgba(0,0,0,0.2)"
      : "0 4px 6px rgba(0,0,0,0.1)",
    transform: logoHovered ? "scale(1.05) rotate(3deg)" : "scale(1) rotate(0deg)",
    transition: "all 0.3s ease",
    cursor: "pointer",
  };

  const handleLinkClick = (path: string) => {
    navigate(path);
    setOpen(false);
    setServicesOpen(false);
  };

  const toggleServices = () => {
    if (isMobile) {
      setServicesOpen(!servicesOpen);
    } else {
      setServicesOpen(true);
    }
  };

    const handleServicesClick = () => {
    setServicesOpen(!servicesOpen); // toggle mega menu
    navigate("/services"); // go to main services page
  };

  return (
    <nav className="fixed w-full z-50 top-0 left-0 right-0 transition-all duration-500">
      {/* Full width background */}
      <div
        className={`w-full transition-all duration-500 ${
          scrolled 
            ? "bg-black/95 backdrop-blur-xl shadow-2xl py-2" 
            : "bg-black/90 backdrop-blur-lg py-4"
        } ${open ? "bg-black" : ""}`}
      >
        {/* Centered container with max width */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <div
              className="flex-shrink-0"
              onClick={() => handleLinkClick("/")}
              onMouseEnter={() => setLogoHovered(true)}
              onMouseLeave={() => setLogoHovered(false)}
            >
              <img 
                src="3.svg" 
                style={logoStyle} 
                alt="Logo" 
                className="transition-all duration-300"
              />
            </div>

            {/* Desktop Menu Items */}
            <div className="hidden md:flex md:items-center md:space-x-1 xl:space-x-4">
              <button
                onClick={() => handleLinkClick("/about")}
                className="px-4 py-2 text-lg font-medium text-white hover:text-blue-300 hover:bg-white/5 rounded-lg transition-all duration-300"
              >
                About
              </button>

              {/* Services Dropdown */}
              <div 
                className="relative"
                ref={servicesRef}
              >
                <button
                  ref={servicesButtonRef}
                  onClick={handleServicesClick}
                  onMouseEnter={() => !isMobile && setServicesOpen(true)}
                  className="flex items-center gap-1 px-4 py-2 text-lg font-medium text-white hover:text-blue-300 hover:bg-white/5 rounded-lg transition-all duration-300"
                >
                  Services
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Services Mega Menu - Positioned left-aligned under button */}
             {/* Services Mega Menu */}
{servicesOpen && (
  <div
    className={`absolute left-1/2 top-full mt-2 min-w-[800px] z-50 -translate-x-1/2`}
    onMouseEnter={() => !isMobile && setServicesOpen(true)}
    onMouseLeave={() => !isMobile && setServicesOpen(false)}
  >
    <div className="rounded-2xl bg-white shadow-2xl border border-gray-200 overflow-hidden animate-slideDown">
      <div className="p-6 bg-gradient-to-br from-gray-50 to-white">
        <div
          className={`grid grid-cols-7 gap-2`}
        >
          {servicesData.map((category, idx) => (
            <div key={idx} className="space-y-4">
              <h6
                className={`text-yellow-600 font-bold uppercase tracking-wider ${
                  isMobile ? "text-[10px]" : "text-[11px]"
                }`}
              >
                {category.title}
              </h6>
              <div className="h-px w-12 bg-yellow-500/50 mb-3"></div>
              <ul className="space-y-2">
                {category.items.map((item, i) => (
                  <li key={i} className="group">
                    <button
                      onClick={() =>
                        handleLinkClick(
                          `/services/${slugify(category.title)}/${slugify(item)}`
                        )
                      }
                      className={`text-gray-700 font-medium text-left w-full transition-colors duration-200 group-hover:text-blue-600 ${
                        isMobile ? "text-[10px]" : "text-[12px]"
                      }`}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
)}





              </div>

              <button
                onClick={() => handleLinkClick("/career")}
                className="px-4 py-2 text-lg font-medium text-white hover:text-blue-300 hover:bg-white/5 rounded-lg transition-all duration-300"
              >
                Career
              </button>

              <button
                onClick={() => handleLinkClick("/contact")}
                className="px-4 py-2 text-lg font-medium text-white hover:text-blue-300 hover:bg-white/5 rounded-lg transition-all duration-300"
              >
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setOpen(!open)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-300 hover:bg-white/10 focus:outline-none transition-all duration-300"
              >
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <X size={28} className="animate-fadeIn" />
                ) : (
                  <Menu size={28} className="animate-fadeIn" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          ref={menuRef}
          className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
            open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 pt-2 pb-6 space-y-2 border-t border-white/10 bg-black/95 backdrop-blur-xl">
            <button
              onClick={() => handleLinkClick("/about")}
              className="block w-full text-left px-4 py-4 text-lg font-medium text-white hover:text-blue-300 hover:bg-white/5 rounded-lg transition-all duration-300"
            >
              About
            </button>

            {/* Mobile Services Dropdown */}
           <div className="space-y-2">
  <button
    onClick={() => {
      handleLinkClick("/services"); // navigate to main /services page
      toggleServices();             // also toggle dropdown
    }}
    className="flex items-center justify-between w-full px-4 py-4 text-lg font-medium text-white hover:text-blue-300 hover:bg-white/5 rounded-lg transition-all duration-300"
  >
    <span>Services</span>
    <ChevronDown
      size={20}
      className={`transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
    />
  </button>

  {/* Mobile Services Menu */}
  <div
    className={`overflow-hidden transition-all duration-500 ease-in-out ${
      servicesOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
    }`}
  >
    <div className="px-4 py-4 bg-black/50 rounded-lg border border-white/10">
      <div className="grid grid-cols-7 gap-4 md:grid-cols-6">
        {servicesData.map((category, idx) => (
          <div key={idx} className="space-y-2">
            <h6 className="text-yellow-500 font-bold text-[10px] uppercase">
              {category.title}
            </h6>
            <ul className="space-y-1">
              {category.items.map((item, i) => (
                <li key={i}>
                  <button
                    onClick={() =>
                      handleLinkClick(`/services/${slugify(category.title)}/${slugify(item)}`)
                    }
                    className="text-[10px] text-gray-300 hover:text-blue-300 transition-colors duration-200 text-left w-full"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>


            <button
              onClick={() => handleLinkClick("/career")}
              className="block w-full text-left px-4 py-4 text-lg font-medium text-white hover:text-blue-300 hover:bg-white/5 rounded-lg transition-all duration-300"
            >
              Career
            </button>

            <button
              onClick={() => handleLinkClick("/contact")}
              className="block w-full text-left px-4 py-4 text-lg font-medium text-white hover:text-blue-300 hover:bg-white/5 rounded-lg transition-all duration-300"
            >
              Contact
            </button>
          </div>
        </div>
      </div>

      {/* Global styles for animations */}
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-slideDown {
          animation: slideDown 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }

        /* Smooth scroll behavior for the whole page */
        html {
          scroll-behavior: smooth;
        }

        /* Better scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: #1a1a1a;
        }

        ::-webkit-scrollbar-thumb {
          background: #3b82f6;
          border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #2563eb;
        }
      `}</style>
    </nav>
  );
}