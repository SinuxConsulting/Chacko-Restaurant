import { Link, useLocation } from "react-router-dom";
import { Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <nav className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
        <Link to="/" className="font-heading text-xl font-semibold text-foreground tracking-wide">
          Chacko
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className={`font-body text-sm tracking-wide transition-colors hover:text-primary ${
              location.pathname === "/" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Home
          </Link>
          <Link
            to="/menu"
            className={`font-body text-sm tracking-wide transition-colors hover:text-primary ${
              location.pathname === "/menu" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Menu
          </Link>
          <a
            href="tel:+60123456789"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            Call Now
          </a>
          <a
            href="https://maps.google.com/?q=Chacko+Restaurant+Bukit+Gasing+Petaling+Jaya"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <MapPin className="w-3.5 h-3.5" />
            Directions
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-1"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-foreground transition-transform ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-foreground transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-foreground transition-transform ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-background border-b border-border"
          >
            <div className="px-5 py-4 flex flex-col gap-4">
              <Link to="/" onClick={() => setMobileOpen(false)} className="font-body text-sm text-foreground">Home</Link>
              <Link to="/menu" onClick={() => setMobileOpen(false)} className="font-body text-sm text-foreground">Menu</Link>
              <a href="tel:+60123456789" className="flex items-center gap-2 text-sm text-foreground">
                <Phone className="w-3.5 h-3.5" /> Call Now
              </a>
              <a href="https://maps.google.com/?q=Chacko+Restaurant+Bukit+Gasing+Petaling+Jaya" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-foreground">
                <MapPin className="w-3.5 h-3.5" /> Get Directions
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
