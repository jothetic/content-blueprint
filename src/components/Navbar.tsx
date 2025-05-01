
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
        <div className="flex justify-center items-center h-12 pt-2">
          {/* Empty navbar - all text removed */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
