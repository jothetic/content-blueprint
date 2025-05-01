
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-scroll";
import { Palette } from "lucide-react";

const Navbar = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [1, 0]);
  const translateY = useTransform(scrollY, [0, 100], [0, -50]);

  return (
    <nav className="fixed w-full top-0 z-50 bg-transparent hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16">
          <motion.div
            className="flex items-center"
            style={{ opacity, y: translateY }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center gap-2">
              <Palette className="h-6 w-6 text-white" />
              <span className="text-white font-bold text-xl">Creator Blueprint</span>
            </div>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
