import { Link } from "react-router";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-xl font-black text-primary">N</span>
              </div>
              <div>
                  <div className="text-xl font-black">Staytrack</div>
                <div className="text-xs text-white/80">Live Smart. Stay Comfortable.</div>
              </div>
            </div>
            <p className="text-sm text-white/80 leading-relaxed">
              A modern hostel facility providing comfortable and safe living spaces for students, designed to support your academic journey.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-white/80 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-white/80 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/rooms" className="text-sm text-white/80 hover:text-white transition-colors">
                  Rooms & Pricing
                </Link>
              </li>
              <li>
                <Link to="/facilities" className="text-sm text-white/80 hover:text-white transition-colors">
                  Facilities
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-sm text-white/80 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="font-semibold mb-4">Important</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/rules" className="text-sm text-white/80 hover:text-white transition-colors">
                  Rules & Policies
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-white/80 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-sm text-white/80 hover:text-white transition-colors">
                  Student Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-white/80">123 University Road, College District, City - 123456</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm text-white/80">+91 7863047523</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm text-white/80">info@ndverse.com</span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="mt-4">
              <h4 className="font-semibold mb-3 text-sm">Follow Us</h4>
              <div className="flex gap-2">
                <a
                  href="#"
                  className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-white/80">
            © {new Date().getFullYear()} Staytrack. All rights reserved. Designed for student comfort and safety.
          </p>
        </div>
      </div>
    </footer>
  );
}
