
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [1, 0]);
  const translateY = useTransform(scrollY, [0, 100], [0, -50]);
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <nav className="fixed w-full top-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between md:justify-end items-center h-16">
          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white hover:text-soft-purple transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
          
          {/* Desktop nav items */}
          <div className="hidden md:flex items-center space-x-6">
            <motion.div
              style={{ opacity, y: translateY }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Link 
                to="testimonials" 
                smooth={true} 
                duration={500} 
                className="text-light-blue hover:text-white transition-colors duration-200 text-lg md:text-xl cursor-pointer"
              >
                Does this work?
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Mobile navigation menu */}
        {isMobile && (
          <motion.div 
            className={`${menuOpen ? 'flex' : 'hidden'} flex-col bg-deep-purple-gradient/95 backdrop-blur-md absolute top-16 left-0 w-full p-4 rounded-b-lg shadow-lg`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: menuOpen ? 1 : 0, y: menuOpen ? 0 : -10 }}
            transition={{ duration: 0.2 }}
          >
            <Link 
              to="testimonials" 
              smooth={true} 
              duration={500} 
              className="text-light-blue py-3 text-lg hover:text-white transition-colors cursor-pointer text-center"
              onClick={() => setMenuOpen(false)}
            >
              Does this work?
            </Link>
            <Link 
              to="pricing-section" 
              smooth={true} 
              duration={500} 
              className="text-light-blue py-3 text-lg hover:text-white transition-colors cursor-pointer text-center"
              onClick={() => setMenuOpen(false)}
            >
              Pricing
            </Link>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
