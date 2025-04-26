
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 z-50 bg-opacity-90 backdrop-blur-sm bg-background/50 border-b border-gray-800/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-teal-500">Academy</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              How it works?
            </a>
            <Button variant="outline" className="border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-all">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
