
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
    <nav className="fixed w-full top-0 z-50 bg-transparent pointer-events-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between md:justify-end items-center h-16">
          {/* Desktop nav items */}
          <div className="flex items-center space-x-6 pointer-events-auto">
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

        {/* Mobile navigation - simplified with no toggle menu */}
        {isMobile && (
          <motion.div 
            className="flex flex-row justify-center space-x-4 py-2 pointer-events-auto"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Link 
              to="testimonials" 
              smooth={true} 
              duration={500} 
              className="text-light-blue text-sm hover:text-white transition-colors cursor-pointer"
            >
              Does this work?
            </Link>
            <Link 
              to="pricing-section" 
              smooth={true} 
              duration={500} 
              className="text-light-blue text-sm hover:text-white transition-colors cursor-pointer"
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
