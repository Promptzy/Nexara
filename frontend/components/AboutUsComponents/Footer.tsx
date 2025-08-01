import React from 'react';
import { Github, Linkedin, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-neutral-800/50 bg-neutral-900/20 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 md:px-12 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Zenjira
              </span>
            </h3>
            <p className="text-neutral-400 text-sm">
              Reimagining project management with AI
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <a
              href="#"
              className="w-12 h-12 bg-neutral-800/50 hover:bg-neutral-700/50 border border-neutral-600/50 hover:border-neutral-500/50 rounded-lg flex items-center justify-center transition-all duration-300 group"
            >
              <Github className="w-5 h-5 text-neutral-400 group-hover:text-white" />
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-neutral-800/50 hover:bg-neutral-700/50 border border-neutral-600/50 hover:border-neutral-500/50 rounded-lg flex items-center justify-center transition-all duration-300 group"
            >
              <Linkedin className="w-5 h-5 text-neutral-400 group-hover:text-blue-400" />
            </a>
          </div>
          
          {/* Back to Top */}
          <div className="text-center md:text-right">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors duration-300 group"
            >
              <span className="text-sm">Back to top</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-neutral-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-sm">
            © 2025 Zenjira. All rights reserved.
          </p>
          
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-neutral-500 hover:text-neutral-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-neutral-500 hover:text-neutral-300 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;