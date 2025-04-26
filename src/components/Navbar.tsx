
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end items-center h-16">
          <div className="flex items-center space-x-6">
            <motion.a 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              href="#" 
              className="text-light-blue hover:text-white transition-colors duration-200 text-sm"
            >
              Does this work?
            </motion.a>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Button 
                variant="link" 
                className="text-light-blue hover:text-white p-0 text-sm"
              >
                Sign Up
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
