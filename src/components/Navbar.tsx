
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 z-50 bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent"
            >
              Academy
            </motion.span>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
              How it works?
            </a>
            <Button 
              variant="outline" 
              className="bg-transparent border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-white transition-all duration-300"
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
