/**
 * Footer Component

 */
import React from "react";
import { Github, Twitter, Linkedin } from "lucide-react";

/**
 * Responsive, accessible footer for Zenjira.
 **/
export default function Footer() {
  return (
    <footer
      className="w-full bg-blue-900 text-gray-100 border-t border-blue-800 py-10 px-4 mt-12"
      role="contentinfo"
      aria-label="Site Footer"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Navigation Links */}
        <nav aria-label="Footer Navigation" className="space-y-2">
          <span className="font-semibold text-lg">Navigation</span>
          <ul className="space-y-1">
            <li><a href="/about" className="hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded">About</a></li>
            <li><a href="/features" className="hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded">Features</a></li>
            <li><a href="/contact" className="hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded">Contact</a></li>
          </ul>
        </nav>
        {/* Social Icons */}
        <div className="space-y-2">
          <span className="font-semibold text-lg">Connect</span>
          <div className="flex gap-4 mt-2">
            <a
              href="https://github.com/Promptzy/Zenjira"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary rounded"
            >
              <Github size={22} />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary rounded"
            >
              <Twitter size={22} />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary rounded"
            >
              <Linkedin size={22} />
            </a>
          </div>
        </div>
        {/* Contact Info */}
        <div className="space-y-2">
          <span className="font-semibold text-lg">Contact</span>
          <address className="not-italic text-sm">
            info@zenjira.com
            <br />
            address
          </address>
        </div>
        {/* Copyright */}
        <div className="flex flex-col justify-end items-start md:items-end text-xs text-muted-foreground">
          <span>&copy; {new Date().getFullYear()} Zenjira. All rights reserved.</span>
          <span className="mt-2">Built with <a href="https://ui.shadcn.com/" target="_blank" rel="noopener noreferrer" className="hover:underline text-primary">shadcn/ui</a></span>
        </div>
      </div>
    </footer>
  );
}
