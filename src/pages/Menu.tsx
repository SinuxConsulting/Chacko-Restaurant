import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Phone, ArrowUp } from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";

const menuData = [
  {
    category: "Breakfast",
    id: "breakfast",
    items: [
      { name: "Plain Dosa", price: "RM 6" },
      { name: "Masala Dosa", price: "RM 8" },
      { name: "Rava Dosa", price: "RM 8" },
      { name: "Ghee Roast Dosa", price: "RM 9" },
      { name: "Idli (2 pcs)", price: "RM 5", desc: "Steamed rice cakes with sambar & chutney" },
      { name: "Idiyappam (3 pcs)", price: "RM 6", desc: "String hoppers with coconut milk" },
      { name: "Puttu", price: "RM 6", desc: "Steamed rice cake with grated coconut" },
      { name: "Appam (2 pcs)", price: "RM 6", desc: "Fermented rice pancake, lacy edges" },
      { name: "Vada (2 pcs)", price: "RM 5", desc: "Crispy lentil fritters" },
      { name: "Upma", price: "RM 5" },
    ],
  },
  {
    category: "Kerala Meals",
    id: "meals",
    items: [
      { name: "Veg Kerala Meal", price: "RM 12", desc: "Rice, sambar, rasam, thoran, avial, papadam, pickle, payasam" },
      { name: "Non-Veg Kerala Meal", price: "RM 16", desc: "Includes chicken or fish curry" },
      { name: "Special Kerala Meal", price: "RM 22", desc: "Full banana leaf spread with premium sides" },
    ],
  },
  {
    category: "Rice & Biryani",
    id: "rice",
    items: [
      { name: "Chicken Biryani", price: "RM 14" },
      { name: "Lamb Biryani", price: "RM 18" },
      { name: "Lamb Shank Biryani", price: "RM 28" },
      { name: "Fish Biryani", price: "RM 16" },
      { name: "Prawn Biryani", price: "RM 18" },
      { name: "Ghee Rice", price: "RM 6" },
      { name: "Lemon Rice", price: "RM 6" },
    ],
  },
  {
    category: "Bread & Parotta",
    id: "bread",
    items: [
      { name: "Kerala Parotta (2 pcs)", price: "RM 5" },
      { name: "Coin Parotta", price: "RM 7" },
      { name: "Barotta (2 pcs)", price: "RM 6" },
      { name: "Kothu Parotta", price: "RM 10", desc: "Shredded parotta stir-fried with egg & spices" },
      { name: "Chicken Kothu Parotta", price: "RM 12" },
      { name: "Chapati (2 pcs)", price: "RM 4" },
      { name: "Naan", price: "RM 4" },
      { name: "Garlic Naan", price: "RM 5" },
    ],
  },
  {
    category: "Seafood",
    id: "seafood",
    items: [
      { name: "Fish Moilee", price: "RM 16", desc: "Coconut milk curry with mild spice" },
      { name: "Fish Curry (Kerala Style)", price: "RM 14", desc: "Tangy, spiced with kodampuli" },
      { name: "Tawa Fish Fry", price: "RM 14", desc: "Pan-seared whole fish with masala" },
      { name: "Prawn Masala", price: "RM 18", desc: "Tiger prawns in rich tomato gravy" },
      { name: "Prawn Fry", price: "RM 16" },
      { name: "Squid Fry", price: "RM 14" },
      { name: "Crab Roast", price: "RM 28", desc: "Market price may vary" },
    ],
  },
  {
    category: "Meat",
    id: "meat",
    items: [
      { name: "Chicken Curry", price: "RM 12" },
      { name: "Chicken Fry", price: "RM 14" },
      { name: "Chicken 65", price: "RM 12" },
      { name: "Lamb Curry", price: "RM 18" },
      { name: "Lamb Fry", price: "RM 20" },
      { name: "Lamb Shank Curry", price: "RM 28" },
      { name: "Beef Fry", price: "RM 14", desc: "Kerala-style dry-fried beef with coconut slices" },
      { name: "Beef Ularthiyathu", price: "RM 16", desc: "Slow-roasted with whole spices" },
    ],
  },
  {
    category: "Snacks",
    id: "snacks",
    items: [
      { name: "Banana Bajji", price: "RM 5" },
      { name: "Uzhunnu Vada", price: "RM 5" },
      { name: "Parippu Vada", price: "RM 5" },
      { name: "Egg Puffs (2 pcs)", price: "RM 5" },
      { name: "Samosa (2 pcs)", price: "RM 4" },
      { name: "Kerala Mixture", price: "RM 6" },
    ],
  },
  {
    category: "Beverages",
    id: "beverages",
    items: [
      { name: "Masala Chai", price: "RM 4" },
      { name: "Sulaimani Tea", price: "RM 4", desc: "Spiced black tea with lime" },
      { name: "Filter Coffee", price: "RM 5" },
      { name: "Fresh Lime Soda", price: "RM 5" },
      { name: "Mango Lassi", price: "RM 7" },
      { name: "Buttermilk (Sambharam)", price: "RM 4", desc: "Spiced yogurt drink with curry leaves" },
      { name: "Rose Milk", price: "RM 5" },
      { name: "Payasam", price: "RM 6", desc: "Kerala rice pudding with cashew & raisins" },
    ],
  },
];

const categories = menuData.map((s) => ({ name: s.category, id: s.id }));

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const [showBackToTop, setShowBackToTop] = useState(false);
const categoryNavRef = useRef<HTMLDivElement | null>(null);
const categoryButtonRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const handleScroll = useCallback(() => {
    setShowBackToTop(window.scrollY > 600);
    for (const cat of categories) {
      const el = document.getElementById(cat.id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 140) {
          setActiveCategory(cat.id);
        }
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToCategory = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 130;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

useEffect(() => {
  const container = categoryNavRef.current;
  const activeButton = categoryButtonRefs.current[activeCategory];

  if (!container || !activeButton) return;

  const containerWidth = container.offsetWidth;
  const buttonLeft = activeButton.offsetLeft;
  const buttonWidth = activeButton.offsetWidth;

  const targetScrollLeft = buttonLeft - containerWidth / 2 + buttonWidth / 2;

  container.scrollTo({
    left: Math.max(0, targetScrollLeft),
    behavior: "smooth",
  });
}, [activeCategory]);

  return (
    <main className="min-h-screen pt-20">
      {/* Menu Header */}
      <section className="py-10 md:py-16 border-b border-border">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground text-xs mb-6 hover:text-primary transition-colors tracking-wide">
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
            </Link>
            <h1 className="font-heading text-4xl md:text-6xl font-semibold text-foreground mb-2">Menu</h1>
            <p className="font-body text-xs text-muted-foreground tracking-wide">
              Authentic Kerala favourites · Breakfast to dinner · Dine-in & Takeaway
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Sticky Category Nav */}
      <div className="sticky top-[65px] z-40 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-3xl mx-auto px-5">
          <div ref={categoryNavRef} className="flex gap-1 overflow-x-auto py-3 no-scrollbar">
            <div className="flex w-max gap-3 px-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                ref={(el) => (categoryButtonRefs.current[cat.id] = el)} 
                onClick={() => scrollToCategory(cat.id)}
                className={`whitespace-nowrap px-4 py-1.5 rounded-sm font-body text-xs tracking-wide transition-all ${
                  activeCategory === cat.id
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {cat.name}
              </button>
            ))}
            </div>
          </div>
        </div>
      </div>

      {/* Menu Sections */}
      <div className="max-w-3xl mx-auto px-5 py-8 md:py-12">
        {menuData.map((section, sectionIdx) => (
          <motion.section
            key={section.id}
            id={section.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 md:mb-16"
          >
            <div className="flex items-center gap-4 mb-6">
              <h2 className="font-heading text-xl md:text-2xl font-semibold text-foreground whitespace-nowrap">
                {section.category}
              </h2>
              <div className="flex-1 h-px bg-border" />
              <span className="font-body text-[10px] text-muted-foreground tracking-wider uppercase whitespace-nowrap">
                {section.items.length} items
              </span>
            </div>

            <div className="space-y-0">
              {section.items.map((item) => (
                <div
                  key={item.name}
                  className="menu-item-row flex items-baseline justify-between py-3 gap-4"
                >
                  <div className="flex-1 min-w-0">
                    <p className="font-body text-sm text-foreground">{item.name}</p>
                    {item.desc && (
                      <p className="font-body text-[11px] text-muted-foreground mt-0.5 leading-relaxed">{item.desc}</p>
                    )}
                  </div>
                  <span className="font-body text-sm text-secondary font-medium shrink-0 tabular-nums">{item.price}</span>
                </div>
              ))}
            </div>
          </motion.section>
        ))}
      </div>
      
      {/* Bottom CTA */}
<div className="border-t border-border py-10 bg-card">
  <div className="max-w-6xl mx-auto px-5">
    <p className="font-heading text-xl md:text-2xl text-foreground mb-6 text-center">
      Ready to order?
    </p>

    <div className="flex flex-wrap justify-center gap-3 mb-8">
      <a
        href="tel:+60123456789"
        className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 font-body text-sm font-medium tracking-wide hover:opacity-90 transition-opacity rounded-sm"
      >
        <Phone className="w-4 h-4" /> Call to Order
      </a>

      <Link
        to="/"
        className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3.5 font-body text-sm tracking-wide hover:border-primary hover:text-primary transition-colors rounded-sm"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Home
      </Link>
    </div>
  </div>
</div>
{/* ===== FOOTER ===== */}
<footer className="py-8 border-t border-border">
  <div className="max-w-6xl mx-auto px-5">
    <div className="flex flex-col gap-3 text-center md:grid md:grid-cols-3 md:items-center md:gap-6">
      <p className="font-body text-[11px] md:text-xs text-muted-foreground md:text-left">
        © {new Date().getFullYear()} Chacko Restaurant Bukit Gasing, Petaling Jaya
      </p>

      <div className="font-body text-[11px] md:text-xs text-muted-foreground md:text-center">
        Designed by{" "}
        <a
          href="https://sinuxconsulting.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-secondary hover:opacity-80 hover:underline transition-colors"
        >
          Sinux Consulting
        </a>
      </div>
      
      <p className="font-body text-[11px] md:text-xs text-muted-foreground md:text-right">
        Authentic Kerala flavours, served with warmth.
      </p>
    </div>
  </div>
</footer>
      {/* Back to top FAB */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:opacity-90 transition-opacity"
          aria-label="Back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </main>
  );
};

export default Menu;
