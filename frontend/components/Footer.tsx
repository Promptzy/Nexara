
import React from "react";
import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";
export default function Footer() {
  return (
    <footer
      className="w-full bg-[#232129] text-[#e4e4e7] py-14 px-4 mt-12"
      role="contentinfo"
      aria-label="Site Footer"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Logo and description */}
        <div className="flex flex-col gap-5">
          <div>
            <span className="text-2xl font-bold">Zenjira</span>
          </div>
          <p className="text-sm text-[#bdbdc7] max-w-xs">
            Zenjira is an enterprise-grade web platform that revolutionizes Jira workflow management through intelligent automation, AI-powered sprint planning, and comprehensive analytics — delivered via an intuitive, centralized dashboard.
          </p>
          <div className="flex gap-4 mt-2">
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-[#bdbdc7]"
            >
              <Twitter size={18} />
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-[#bdbdc7]"
            >
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24H12.82v-9.294H9.692V11.01h3.127V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.696h-3.12V24h6.116c.729 0 1.326-.597 1.326-1.326V1.326C24 .597 23.403 0 22.675 0"></path></svg>
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-[#bdbdc7]"
            >
              {/* Instagram icon from lucide-react */}
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><rect width="18" height="18" x="3" y="3" rx="4.5"/><circle cx="12" cy="12" r="3.5"/><circle cx="17.5" cy="6.5" r="1"/></svg>
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-[#bdbdc7]"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="mb-4 font-semibold text-base">Company</h3>
          <ul className="space-y-3 text-sm">
            <li><Link href="/about">About us</Link></li>
            <li><Link href="/contact">Contact us</Link></li>
          </ul>
        </div>
        {/* Product */}
        <div>
          <h3 className="mb-4 font-semibold text-base">Product</h3>
          <ul className="space-y-3 text-sm">
            <li><Link href="/features">Features</Link></li>
            <li><Link href="/pricing">Pricing</Link></li>
            <li><Link href="/support">Support</Link></li>
          </ul>
        </div>
        {/* Legal */}
        <div>
          <h3 className="mb-4 font-semibold text-base">Legal</h3>
          <ul className="space-y-3 text-sm">
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms & Conditions</Link></li>
            <li><Link href="/return">Return Policy</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

