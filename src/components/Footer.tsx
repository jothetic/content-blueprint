
import React from "react";
import { Button } from "@/components/ui/button";
import { Instagram, Youtube } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="w-full py-3 px-6 bg-[#0A001A] border-t border-purple-900/30 sticky bottom-0 z-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        <div className="text-sm font-medium text-white/90">
          Viral Content Academy
        </div>
        
        <div className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="icon"
            className="h-8 w-8 text-white/80 hover:text-white hover:bg-purple-900/30"
            asChild
          >
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <Youtube className="h-4 w-4" />
            </a>
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon"
            className="h-8 w-8 text-white/80 hover:text-white hover:bg-purple-900/30"
            asChild
          >
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="h-4 w-4" />
            </a>
          </Button>
        </div>
        
        <Separator className="md:hidden my-1 bg-purple-900/30" />
        
        <div className="text-xs text-white/60">
          Built by Dubowsky Web Solutions
        </div>
      </div>
    </footer>
  );
};

export default Footer;
