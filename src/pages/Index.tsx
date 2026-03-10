import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, MapPin, Clock, ArrowRight, Star } from "lucide-react";
import Reviews from "@/components/Reviews";
import heroImage from "@/assets/hero-food.jpg";
import dishDosa from "@/assets/dish-dosa.jpg";
import dishBiryani from "@/assets/dish-biryani.jpg";
import dishFish from "@/assets/dish-fish.jpg";
import dishParotta from "@/assets/dish-parotta.jpg";
import dishPrawn from "@/assets/dish-prawn.jpg";
import dishTawaFish from "@/assets/dish-tawa-fish.jpg";
import galleryMeal from "@/assets/gallery-meal.jpg";
import galleryInterior from "@/assets/gallery-interior.jpg";
import gallerySpices from "@/assets/gallery-spices.jpg";
import atmosphere1 from "@/assets/atmosphere-1.jpg";
import atmosphere2 from "@/assets/atmosphere-2.jpg";
import Seo from "@/components/Seo";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

const reviews = [
  {
    name: "Priya M.",
    rating: 5,
    text: "The fish moilee is the best I've had outside Kerala. Generous portions and the flavours are spot on. We come here every weekend now.",
    time: "2 weeks ago",
  },
  {
    name: "Arun K.",
    rating: 5,
    text: "Authentic Kerala meals on banana leaf — just like back home. The lamb biryani is incredible. Staff is warm and welcoming.",
    time: "1 month ago",
  },
  {
    name: "Sarah T.",
    rating: 5,
    text: "Hidden gem in PJ! The parotta with mutton curry is addictive. Everything tastes homemade. Fair prices for the quality you get.",
    time: "3 weeks ago",
  },
  {
    name: "Rajesh N.",
    rating: 4,
    text: "Great breakfast spot — the masala dosa is crispy and the sambar has real depth. Sulaimani tea is a must-try. Cozy little place.",
    time: "1 month ago",
  },
];

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Seo
  title="Authentic Kerala Cuisine in Petaling Jaya"
  description="Chacko Restaurant serves authentic Kerala cuisine in Bukit Gasing, Petaling Jaya, including banana leaf meals, biryani, dosa, parotta, seafood, and South Indian breakfast."
  path="/"
/>
      {/* ===== HERO ===== */}
      <section className="relative min-h-[100svh] flex items-end pb-16 md:pb-24">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Traditional Kerala banana leaf meal with rice, sambar, and accompaniments"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/10" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-5 w-full">
          <motion.p
            initial="hidden" animate="visible" custom={0} variants={fadeUp}
            className="font-body text-xs tracking-[0.25em] uppercase text-primary mb-3"
          >
            Bukit Gasing · Petaling Jaya
          </motion.p>
          <motion.h1
            initial="hidden" animate="visible" custom={1} variants={fadeUp}
            className="font-heading text-5xl md:text-7xl lg:text-8xl font-semibold text-foreground leading-[1.05] mb-3"
          >
            Chacko<br />Restaurant
          </motion.h1>
          <motion.p
            initial="hidden" animate="visible" custom={2} variants={fadeUp}
            className="font-heading text-lg md:text-xl text-secondary italic mb-1"
          >
            Authentic Kerala Cuisine
          </motion.p>
          <motion.p
            initial="hidden" animate="visible" custom={3} variants={fadeUp}
            className="font-body text-xs text-muted-foreground mb-8 tracking-wide"
          >
            Dine-in & Takeaway · Tue–Sun, 9 AM – 9 PM
          </motion.p>

          <motion.div
            initial="hidden" animate="visible" custom={4} variants={fadeUp}
            className="flex flex-wrap gap-3"
          >
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 font-body text-sm font-medium tracking-wide hover:opacity-90 transition-opacity rounded-sm"
            >
              View Menu <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://maps.google.com/?q=Chacko+Restaurant+Bukit+Gasing+Petaling+Jaya"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3.5 font-body text-sm tracking-wide hover:border-primary hover:text-primary transition-colors rounded-sm"
            >
              <MapPin className="w-4 h-4" /> Directions
            </a>
            <a
              href="tel:+60123456789"
              className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3.5 font-body text-sm tracking-wide hover:border-primary hover:text-primary transition-colors rounded-sm"
            >
              <Phone className="w-4 h-4" /> Call
            </a>
          </motion.div>
        </div>
      </section>

      {/* ===== SIGNATURE DISHES ===== */}
      <section className="py-16 md:py-28">
        <div className="max-w-6xl mx-auto px-5">
          <div className="max-w-3xl mb-10 md:mb-14">
            <motion.p
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              className="font-body text-xs tracking-[0.25em] uppercase text-primary mb-2"
            >
              From Our Kitchen
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-heading text-3xl md:text-5xl font-semibold text-foreground"
            >
              What to Try First
            </motion.h2>
          </div>

          {/* Hero dish — full width */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="relative group overflow-hidden rounded-sm mb-4 md:mb-5"
          >
            <img src={dishFish} alt="Fish Moilee — Kerala coconut fish curry" className="w-full h-72 md:h-[520px] object-cover group-hover:scale-[1.03] transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <span className="font-body text-[10px] tracking-[0.2em] uppercase text-primary block mb-1">Signature</span>
              <p className="font-heading text-2xl md:text-4xl text-foreground mb-1">Fish Moilee</p>
              <p className="font-body text-sm text-muted-foreground max-w-md">Tender fish simmered in fragrant coconut milk with curry leaves and green chili. A Kerala classic.</p>
            </div>
          </motion.div>
          
          {/* Two column feature */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mb-4 md:mb-5">
            {[
  {
    img: dishBiryani,
    name: "Lamb Biryani",
    desc: "Fragrant basmati, slow-cooked lamb, whole spices",
    tag: "Best Seller",
    alt: "Lamb biryani served with fragrant basmati rice and Kerala-style spices",
  },
  {
    img: dishDosa,
    name: "Masala Dosa",
    desc: "Crispy fermented crepe with potato masala filling",
    tag: "Breakfast",
    alt: "Masala dosa served crisp with potato filling, chutney, and sambar",
  },
].map((dish, i) => (
              <motion.div
                key={dish.name}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.1 }}
                className="relative group overflow-hidden rounded-sm"
              >
                <img
  src={dish.img}
  alt={dish.alt}
  className="w-full h-64 md:h-80 object-cover group-hover:scale-[1.03] transition-transform duration-700"
/>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="font-body text-[10px] tracking-[0.2em] uppercase text-primary block mb-1">{dish.tag}</span>
                  <p className="font-heading text-xl md:text-2xl text-foreground">{dish.name}</p>
                  <p className="font-body text-xs text-muted-foreground mt-0.5">{dish.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Three column row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
            {[
  {
    img: dishParotta,
    name: "Kerala Parotta",
    desc: "Flaky layered bread, mutton curry",
    alt: "Kerala parotta served with curry in traditional South Indian style",
  },
  {
    img: dishPrawn,
    name: "Prawn Masala",
    desc: "Tiger prawns, rich tomato gravy",
    alt: "Prawn masala cooked in a rich spiced Kerala-style gravy",
  },
  {
    img: dishTawaFish,
    name: "Tawa Fish Fry",
    desc: "Pan-seared whole fish, masala crust",
    alt: "Tawa fish fry with a spiced masala crust served hot from the pan",
  },
            ].map((dish, i) => (
              <motion.div
                key={dish.name}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.08 }}
                className="relative group overflow-hidden rounded-sm"
              >
                <img
  src={dish.img}
  alt={dish.alt}
  className="w-full h-56 object-cover group-hover:scale-[1.03] transition-transform duration-700"
/>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-heading text-lg text-foreground">{dish.name}</p>
                  <p className="font-body text-xs text-muted-foreground mt-0.5">{dish.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-center mt-10 md:mt-14"
          >
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-8 py-3.5 font-body text-sm tracking-wide hover:bg-primary/20 transition-colors rounded-sm"
            >
              Explore Full Menu <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section className="py-16 md:py-28 border-t border-border">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7 }}
            >
              <p className="font-body text-xs tracking-[0.25em] uppercase text-primary mb-2">Our Story</p>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-6 leading-tight">
                The warmth of Kerala,<br className="hidden md:block" />right here in PJ.
              </h2>
              <div className="space-y-4 text-muted-foreground font-body text-sm leading-relaxed">
                <p>
                  Chacko Restaurant brings the rich, layered flavours of Kerala to Bukit Gasing. Every dish
                  begins with whole spices, fresh curry leaves, and coconut — prepared without shortcuts.
                </p>
                <p>
                  From morning dosas to evening biryanis, our kitchen serves honest food with generous portions.
                  Whether you're here for a quick breakfast or a long weekend lunch with family, you'll leave
                  with the kind of satisfaction only real Kerala cooking can deliver.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-6">
                <div>
                  <p className="font-heading text-2xl text-primary font-semibold">9+</p>
                  <p className="font-body text-xs text-muted-foreground">Years Serving PJ</p>
                </div>
                <div className="w-px h-10 bg-border" />
                <div>
                  <p className="font-heading text-2xl text-primary font-semibold">50+</p>
                  <p className="font-body text-xs text-muted-foreground">Dishes on Menu</p>
                </div>
                <div className="w-px h-10 bg-border" />
                <div>
                  <p className="font-heading text-2xl text-primary font-semibold">4.5</p>
                  <p className="font-body text-xs text-muted-foreground">Google Rating</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}
              className="overflow-hidden rounded-sm"
            >
              <img src={galleryMeal} alt="Kerala thali meal on banana leaf" className="w-full h-80 md:h-[440px] object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== REVIEWS ===== */}
      <Reviews />

      {/* ===== GALLERY ===== */}
      <section className="py-16 md:py-28">
        <div className="max-w-6xl mx-auto px-5">
          <div className="max-w-3xl mb-10 md:mb-14">
            <motion.p
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              className="font-body text-xs tracking-[0.25em] uppercase text-primary mb-2"
            >
              The Experience
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-heading text-3xl md:text-5xl font-semibold text-foreground"
            >
              Warm. Intimate. Yours.
            </motion.h2>
          </div>

          {/* Masonry-inspired asymmetric gallery */}
          <div className="grid grid-cols-2 md:grid-cols-12 gap-3 md:gap-4">
            {/* Large interior shot */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7 }}
              className="col-span-2 md:col-span-8 overflow-hidden rounded-sm"
            >
              <img src={galleryInterior} alt="Warm restaurant interior with banana leaf table settings" className="w-full h-64 md:h-[400px] object-cover hover:scale-[1.03] transition-transform duration-700" />
            </motion.div>

            {/* Spices */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
              className="col-span-1 md:col-span-4 overflow-hidden rounded-sm"
            >
              <img src={gallerySpices} alt="Kerala spices and curry in clay pot" className="w-full h-48 md:h-[400px] object-cover hover:scale-[1.03] transition-transform duration-700" />
            </motion.div>

            {/* Atmosphere 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}
              className="col-span-1 md:col-span-4 overflow-hidden rounded-sm"
            >
              <img src={atmosphere1} alt="Restaurant ambiance with pendant lighting" className="w-full h-48 md:h-72 object-cover hover:scale-[1.03] transition-transform duration-700" />
            </motion.div>

            {/* Atmosphere 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}
              className="col-span-2 md:col-span-8 overflow-hidden rounded-sm"
            >
              <img src={atmosphere2} alt="Close-up of Kerala spices — cardamom, cinnamon, star anise" className="w-full h-48 md:h-72 object-cover hover:scale-[1.03] transition-transform duration-700" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== VISIT US ===== */}
      <section className="py-16 md:py-28 border-t border-border bg-card">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
          >
            <p className="font-body text-xs tracking-[0.25em] uppercase text-primary mb-2">Visit Us</p>
            <h2 className="font-heading text-3xl md:text-5xl font-semibold text-foreground mb-8">
              Come hungry.
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10 text-center">
              <div>
                <MapPin className="w-5 h-5 text-primary mx-auto mb-2" />
                <p className="font-body text-sm font-medium text-foreground mb-1">Location</p>
                <p className="font-body text-xs text-muted-foreground">Bukit Gasing,<br />Petaling Jaya</p>
              </div>
              <div>
                <Clock className="w-5 h-5 text-primary mx-auto mb-2" />
                <p className="font-body text-sm font-medium text-foreground mb-1">Hours</p>
                <p className="font-body text-xs text-muted-foreground">Tue – Sun<br />9:00 AM – 9:00 PM</p>
                <p className="font-body text-[10px] text-primary mt-1">Monday Closed</p>
              </div>
              <div>
                <Phone className="w-5 h-5 text-primary mx-auto mb-2" />
                <p className="font-body text-sm font-medium text-foreground mb-1">Service</p>
                <p className="font-body text-xs text-muted-foreground">Dine-in &<br />Takeaway</p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="tel:+60123456789"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 font-body text-sm font-medium tracking-wide hover:opacity-90 transition-opacity rounded-sm"
              >
                <Phone className="w-4 h-4" /> Call to Order
              </a>
              <a
                href="https://maps.google.com/?q=Chacko+Restaurant+Bukit+Gasing+Petaling+Jaya"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-border text-foreground px-7 py-3.5 font-body text-sm tracking-wide hover:border-primary hover:text-primary transition-colors rounded-sm"
              >
                <MapPin className="w-4 h-4" /> Get Directions
              </a>
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 border border-border text-foreground px-7 py-3.5 font-body text-sm tracking-wide hover:border-primary hover:text-primary transition-colors rounded-sm"
              >
                View Menu <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

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
    </main>
  );
};

export default Index;
