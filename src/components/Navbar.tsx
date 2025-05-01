
import { useState } from "react";
import { Link } from "react-scroll";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <nav className="fixed w-full top-0 z-50 bg-deep-purple-gradient border-b border-purple-800/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-14 md:h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-white font-bold flex items-center">
              <span className="text-red-500 text-xl mr-1">C</span>
              <span className="text-white text-lg">Creator</span>
              <span className="text-purple-300 text-lg ml-1">Blueprint</span>
            </div>
          </div>

          {/* Navigation links */}
          <div className="flex items-center space-x-4 md:space-x-6">
            <Link 
              to="testimonials" 
              smooth={true} 
              duration={500} 
              className="text-blue-400 hover:text-white transition-colors duration-200 text-sm md:text-base cursor-pointer"
            >
              Testimonials
            </Link>
            
            <Link 
              to="pricing-section" 
              smooth={true} 
              duration={500} 
              className="text-blue-400 hover:text-white transition-colors duration-200 text-sm md:text-base cursor-pointer"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
