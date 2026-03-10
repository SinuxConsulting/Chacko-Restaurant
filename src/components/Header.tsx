import { Link, useLocation } from "react-router-dom";
import { Phone, MapPin, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMenu = () => setMobileOpen(false);

  return (
    <>
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

          {/* Mobile toggle only */}
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden flex flex-col gap-1.5 p-1"
            aria-label="Open menu"
          >
            <span className="block w-5 h-0.5 bg-foreground" />
            <span className="block w-5 h-0.5 bg-foreground" />
            <span className="block w-5 h-0.5 bg-foreground" />
          </button>
        </nav>
      </header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-background md:hidden"
          >
            <div className="flex h-full flex-col">
              {/* Top bar */}
              <div className="border-b border-border bg-background/95 backdrop-blur-md">
                <div className="px-5 py-4 flex items-center justify-between">
                  <Link
                    to="/"
                    onClick={closeMenu}
                    className="font-heading text-xl font-semibold text-foreground tracking-wide"
                  >
                    Chacko
                  </Link>

                  <button
                    onClick={closeMenu}
                    className="p-1 text-foreground"
                    aria-label="Close menu"
                  >
                    <X className="w-8 h-8" />
                  </button>
                </div>
              </div>

              {/* Overlay content */}
              <div className="flex-1 overflow-y-auto px-5 py-7 flex flex-col justify-between gap-8">
  <div className="flex flex-col gap-5">
    <Link
      to="/"
      onClick={closeMenu}
      className={`font-body text-xl transition-colors hover:text-primary ${
        location.pathname === "/" ? "text-primary" : "text-foreground"
      }`}
    >
      Home
    </Link>

    <Link
      to="/menu"
      onClick={closeMenu}
      className={`font-body text-xl transition-colors hover:text-primary ${
        location.pathname === "/menu" ? "text-primary" : "text-foreground"
      }`}
    >
      Menu
    </Link>

    <a
      href="tel:+60123456789"
      onClick={closeMenu}
      className="flex items-center gap-3 font-body text-xl text-foreground hover:text-primary transition-colors"
    >
      <Phone className="w-4 h-4" />
      Call Now
    </a>

    <a
      href="https://maps.google.com/?q=Chacko+Restaurant+Bukit+Gasing+Petaling+Jaya"
      target="_blank"
      rel="noopener noreferrer"
      onClick={closeMenu}
      className="flex items-center gap-3 font-body text-xl text-foreground hover:text-primary transition-colors"
    >
      <MapPin className="w-4 h-4" />
      Get Directions
    </a>
  </div>

  <div className="border-t border-border pt-5">
    <p className="font-body text-[10px] tracking-[0.22em] uppercase text-primary mb-2">
      Bukit Gasing · Petaling Jaya
    </p>

    <h2 className="font-heading text-3xl leading-[0.95] text-foreground mb-2">
      Chacko
      <br />
      Restaurant
    </h2>

    <p className="font-heading italic text-lg text-secondary mb-2">
      Authentic Kerala Cuisine
    </p>

    <p className="font-body text-xs text-muted-foreground">
      Dine-in & Takeaway · Tue–Sun, 9 AM – 9 PM
    </p>
  </div>
</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;