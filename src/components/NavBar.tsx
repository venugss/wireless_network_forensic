
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home, Settings, Search, Info } from "lucide-react";

const NavBar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-forensic-medium to-forensic-dark flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-forensic-accent animate-pulse-slow"></div>
            </div>
            <span className="font-bold text-lg hidden md:inline-block">WiNetForensic</span>
          </Link>
        </div>
        <nav className="ml-auto flex gap-2">
          <Button variant="ghost" size="icon" asChild>
            <Link to="/">
              <Home className="h-5 w-5" />
              <span className="sr-only">Home</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link to="/analysis">
              <Search className="h-5 w-5" />
              <span className="sr-only">Analysis</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link to="/settings">
              <Settings className="h-5 w-5" />
              <span className="sr-only">Settings</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link to="/about">
              <Info className="h-5 w-5" />
              <span className="sr-only">About</span>
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
