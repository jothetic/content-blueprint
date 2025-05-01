
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-scroll";

const Navbar = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [1, 0]);
  const translateY = useTransform(scrollY, [0, 100], [0, -50]);

  return (
    <nav className="fixed w-full top-0 z-50 bg-transparent hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end items-center h-16">
          <div className="flex items-center space-x-6">
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
                className="text-primary-blue hover:text-headline-text transition-colors duration-200 text-lg md:text-xl cursor-pointer"
              >
                Does this work?
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
