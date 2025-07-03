
import React from 'react';
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border/40 bg-card/50">
      <div className="container flex flex-col md:flex-row items-center justify-between py-6 gap-4">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-forensic-medium to-forensic-dark flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-forensic-accent"></div>
          </div>
          <span className="font-bold text-sm">WiNetForensic</span>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          <Link to="/about" className="hover:text-foreground transition-colors">
            About
          </Link>
          <Link to="/privacy" className="hover:text-foreground transition-colors">
            Privacy
          </Link>
          <Link to="/terms" className="hover:text-foreground transition-colors">
            Terms
          </Link>
          <Link to="/contact" className="hover:text-foreground transition-colors">
            Contact
          </Link>
        </div>
        <div className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} WiNetForensic. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
